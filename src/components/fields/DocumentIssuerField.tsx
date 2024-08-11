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

export function DocumentIssuerField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="document.issuer"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Sigla do órgão emissor</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>
            Sigla do órgão emissor do documento do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
