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

export function ContactVoicemail() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="contact.voicemail"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Recado (DDD Número)</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>
            Telefone de recado do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
