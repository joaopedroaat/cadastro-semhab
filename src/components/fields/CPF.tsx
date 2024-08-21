
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

export function CPF() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="CPF"
      render={({ field }) => (
        <FormItem>
          <FormLabel>CPF</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>CPF do responsável familiar</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
