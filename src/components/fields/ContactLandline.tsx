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

export function ContactLandline() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="contact.landline"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Fixo (DDD Número)</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>
            Telefone fixo do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
