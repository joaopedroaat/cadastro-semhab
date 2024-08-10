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

export function DocumentTypeField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="document.type"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tipo do documento de identidade</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>
            Tipo do documento de identidade do responsável familiar (RG, CNH,
            CTPS, ...)
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
