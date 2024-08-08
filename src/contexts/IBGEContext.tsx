import axios from "axios";
import { createContext, ReactNode } from "react";
import { useQuery } from "react-query";

export const IBGEContext = createContext(
  {} as {
    states?: FU[];
    counties?: County[];
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

  const { data: counties } = useQuery({
    queryKey: "counties",
    queryFn: async () => {
      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/AL/municipios`,
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

  console.log(counties);

  return (
    <IBGEContext.Provider
      value={{
        states,
        counties,
      }}
    >
      {children}
    </IBGEContext.Provider>
  );
}
