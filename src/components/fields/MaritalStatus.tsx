import { useContext } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FormContext } from "@/contexts/FormContext";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export function MaritalStatus() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="maritalStatus"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Estado Civil</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="single" />
                </FormControl>
                <FormLabel className="font-normal">
                  Solteiro(a)
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="divorced" />
                </FormControl>
                <FormLabel className="font-normal">
                  Divorciado(a)
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="widowed" />
                </FormControl>
                <FormLabel className="font-normal">
                  Viúvo(a)
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="domestic_partnership" />
                </FormControl>
                <FormLabel className="font-normal">
                  União Estável/Outros
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="married_1" />
                </FormControl>
                <FormLabel className="font-normal">
                  Casado(a) Separação Total de Bens
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="married_2" />
                </FormControl>
                <FormLabel className="font-normal">
                  Casado(a) Comunhão Parcial de Bens
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="married_3" />
                </FormControl>
                <FormLabel className="font-normal">
                  Casado(a) Comunhão Total de Bens
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
