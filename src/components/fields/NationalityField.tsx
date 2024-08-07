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

export function NationalityField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="nationality"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nacionalidade</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a nacionalidade" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="brazilian">Brasileira</SelectItem>
              <SelectItem value="brazilian naturalized">
                Brasileira naturalizado
              </SelectItem>
              <SelectItem value="foreign">Estrangeira</SelectItem>
            </SelectContent>
          </Select>
          <FormDescription>
            Nacionalidade do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
