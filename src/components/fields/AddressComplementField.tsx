
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

export function AddressComplementField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="address.complement"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Complemento</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>
            Complemento do endereço do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  qwejqodiawjoidhawoih
}
