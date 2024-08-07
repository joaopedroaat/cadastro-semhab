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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function SexField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="sex"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Sexo</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o sexo" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="male">Masculino</SelectItem>
              <SelectItem value="female">Feminino</SelectItem>
            </SelectContent>
          </Select>
          <FormDescription>Sexo do responsável familiar</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
