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

export function EducationalAttainmentField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="educationalAttainment"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Grau de Instrução</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="elementary1_complete" />
                </FormControl>
                <FormLabel className="font-normal">
                  Fundamental 1 Completo
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="elementary1_incomplete" />
                </FormControl>
                <FormLabel className="font-normal">
                  Fundamental 1 Incompleto
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="elementary2_complete" />
                </FormControl>
                <FormLabel className="font-normal">
                  Fundamental 2 Completo
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="elementary2_incomplete" />
                </FormControl>
                <FormLabel className="font-normal">
                  Fundamental 2 Incompleto
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="highschool_complete" />
                </FormControl>
                <FormLabel className="font-normal">
                  Ensino Médio Completo
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="highschool_incomplete" />
                </FormControl>
                <FormLabel className="font-normal">
                  Ensino Médio Incompleto
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="higher_education_complete" />
                </FormControl>
                <FormLabel className="font-normal">
                  Ensino Superior Completo
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="higher_education_incomplete" />
                </FormControl>
                <FormLabel className="font-normal">
                  Ensino Superior Incompleto
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="illiterate" />
                </FormControl>
                <FormLabel className="font-normal">
                  Analfabeto
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
