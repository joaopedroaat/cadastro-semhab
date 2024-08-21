import axios from "axios";
import { createContext, ReactNode, useState } from "react";
import { useQuery } from "react-query";

export const IBGEContext = createContext(
  {} as {
    states?: FU[];
    birthState: string;
    birthCounties?: County[];
    addressState: string;
    addressCounties?: County[];

    handleBirthStateChange: (FU: string) => void;
    handleAddressStateChange: (FU: string) => void
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

async function fetchStatesByFU(FU: string): Promise<County[] | undefined> {
  if (!FU) return;

  const response = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${FU}/municipios`,
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
}

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

      return data
        .map(
          (val) =>
            ({
              id: val.id,
              name: val.nome,
              acronym: val.sigla,
            }) as FU,
        )
        .sort((a, b) => {
          if (a.acronym < b.acronym) return -1;
          else if (a.acronym > b.acronym) return 1;
          return 0;
        });
    },
  });

  const [birthState, setBirthState] = useState("");

  const { data: birthCounties } = useQuery({
    queryKey: ["counties", birthState],
    queryFn: async () => {
      return fetchStatesByFU(birthState)
    }
  });


  const handleBirthStateChange = (FU: string) => {
    if (!FU) return;
    if (FU.length < 2 || FU.length > 2) return;

    setBirthState(FU);
  };

  const [addressState, setAddressState] = useState("")
  const { data: addressCounties } = useQuery({
    queryKey: ["counties", addressState],
    queryFn: async () => {
      return fetchStatesByFU(addressState)
    }
  })

  const handleAddressStateChange = (FU: string) => {
    if (!FU) return;
    if (FU.length < 2 || FU.length > 2) return;

    setAddressState(FU);
  }


  return (
    <IBGEContext.Provider
      value={{
        states,
        birthState,
        birthCounties,
        addressState,
        addressCounties,

        handleBirthStateChange,
        handleAddressStateChange
      }}
    >
      {children}
    </IBGEContext.Provider>
  );
}
