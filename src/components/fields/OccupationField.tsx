import { useContext } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { FormContext } from "@/contexts/FormContext";

export function OccupationField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="occupation"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Profissão</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>
            Profissão do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
