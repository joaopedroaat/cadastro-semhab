import axios from "axios";
import { createContext, ReactNode, useState } from "react";
import { useQuery } from "react-query";

export const IBGEContext = createContext(
  {} as {
    states?: FU[];
    counties?: County[];
    selectedFU: string;
    handleFUChange: (FU: string) => void;
  },
);

type FU = {
  id: number;
  acronym: string;
  name: string;
};

type County = {
  id: number;
  name: string;
};

export function IBGEContextProvider({ children }: { children: ReactNode }) {
  const { data: states } = useQuery({
    queryKey: "states",
    queryFn: async () => {
      const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
      );

      if (response.status !== 200) {
        throw new Error("Falha ao carregar os estados");
      }

      const data = response.data as {
        id: number;
        nome: string;
        sigla: string;
      }[];

      return data.map(
        (val) =>
          ({
            id: val.id,
            name: val.nome,
            acronym: val.sigla,
          }) as FU,
      );
    },
  });

  const [selectedFU, setSelectedFU] = useState("");

  const { data: counties } = useQuery({
    queryKey: "counties",
    queryFn: async () => {
      if (!selectedFU) return;

      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedFU}/municipios`,
      );

      if (response.status !== 200) {
        throw new Error("Falha ao carregar os municípios");
      }

      const data = response.data as {
        id: number;
        nome: string;
      }[];

      return data.map(
        (val) =>
          ({
            id: val.id,
            name: val.nome,
          }) as County,
      );
    },
  });

  const handleFUChange = (FU: string) => {
    if (!FU) return;
    if (FU.length < 2 || FU.length > 2) return;

    setSelectedFU(FU);
  };

  return (
    <IBGEContext.Provider
      value={{
        states,
        counties,
        selectedFU,
        handleFUChange,
      }}
    >
      {children}
    </IBGEContext.Provider>
  );
}
