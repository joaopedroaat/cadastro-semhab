import { isNumericString } from "@/utils/isNumericString";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, ReactNode } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(3, {
    message: "Nome deve conter no mínimo 3 caracteres",
  }),
  birthDate: z.string().date(),
  sex: z.union([
    z.literal("male", {
      message: "Sexo deve ser especificado",
    }),
    z.literal("female"),
  ]),
  nationality: z.union([
    z.literal("brazilian", { message: "Nacionalidade deve ser especificada" }),
    z.literal("brazilian_naturalized"),
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
    issuer: z.string().min(2),
    FU: z.string().min(2).max(2),
    issueDate: z.string().date()
  }),
  NIS: z.string().refine(val => isNumericString(val), { message: "Deve conter apenas números" }),
  CPF: z.string().refine(val => isNumericString(val), { message: "Deve conter apenas números" }),
  occupation: z.string(),
  address: z.object({
    street: z.string(),
    number: z.coerce.number(),
    complement: z.string(),
    district: z.string(),
    county: z.string(),
    FU: z.string(),
    CEP: z.string().refine(val => isNumericString(val), { message: "Deve conter apenas números" })
  }),
  contact: z.object({
    landline: z.string().optional(),
    mobile: z.string().optional(),
    voicemail: z.string().optional()
  }),
  maritalStatus: z.union([
    z.literal("single"),
    z.literal("divorced"),
    z.literal("widowed"),
    z.literal("domestic_partnership"),
    z.literal("married_1"),
    z.literal("married_2"),
    z.literal("married_3"),
  ]),
  educationalAttainment: z.union([
    z.literal("elementary1_complete"),
    z.literal("elementary1_incomplete"),
    z.literal("elementary2_complete"),
    z.literal("elementary2_incomplete"),
    z.literal("highschool_complete"),
    z.literal("highschool_incomplete"),
    z.literal("higher_education_complete"),
    z.literal("higher_education_incomplete"),
    z.literal("illiterate"),
  ]),
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
