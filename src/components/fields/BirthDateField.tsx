import { useContext } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FormContext } from "@/contexts/FormContext";
import { Input } from "../ui/input";

export function BirthDateField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="birthDate"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Data de Nascimento</FormLabel>
          <FormControl>
            <Input type="date" {...field} />
          </FormControl>
          <FormDescription>
            Data de nascimento do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
