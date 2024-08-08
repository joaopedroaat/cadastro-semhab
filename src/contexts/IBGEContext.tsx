import axios from "axios";
import { createContext, ReactNode } from "react";
import { useQuery } from "react-query";

export const IBGEContext = createContext(
  {} as {
    states?: FU[];
  },
);

type FU = {
  id: number;
  acronym: string;
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

  return (
    <IBGEContext.Provider
      value={{
        states,
      }}
    >
      {children}
    </IBGEContext.Provider>
  );
}
