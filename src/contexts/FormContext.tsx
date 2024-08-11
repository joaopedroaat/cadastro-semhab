import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, ReactNode } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(3, {
    message: "Nome deve conter no mínimo 3 caracteres",
  }),
  birthDate: z.string(),
  sex: z.union([
    z.literal("male", {
      message: "Sexo deve ser especificado",
    }),
    z.literal("female"),
  ]),
  nationality: z.union([
    z.literal("brazilian", { message: "Nacionalidade deve ser especificada" }),
    z.literal("brazilian naturalized"),
    z.literal("foreign"),
  ]),
  placeOfBirth: z.object({
    FU: z.string().min(2).max(2),
    city: z.string().min(3),
  }),
  motherName: z.string().min(3, {
    message: "Nome da mãe deve conter no mínimo 3 caracteres",
  }),
  document: z.object({
    type: z.string(),
    serialNumber: z.coerce.number(),
  }),
});

export const FormContext = createContext(
  {} as {
    form: UseFormReturn<z.infer<typeof FormSchema>>;
  },
);

export function FormContextProvider({ children }: { children: ReactNode }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      birthDate: new Date().toString(),
      motherName: "",
    },
  });

  return (
    <FormContext.Provider value={{ form }}>{children}</FormContext.Provider>
  );
}
