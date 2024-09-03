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

export function ContactMobile() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="contact.mobile"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Móvel (DDD Número)</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>
            Telefone móvel do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
