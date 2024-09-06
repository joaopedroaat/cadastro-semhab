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

export function SexField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="sex"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Sexo</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="male" />
                </FormControl>
                <FormLabel className="font-normal">
                  Masculino
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="female" />
                </FormControl>
                <FormLabel className="font-normal">
                  Feminino
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
