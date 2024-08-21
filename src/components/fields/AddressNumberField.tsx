
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

export function AddressNumberField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="address.number"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Número</FormLabel>
          <FormControl>
            <Input type="number" {...field} />
          </FormControl>
          <FormDescription>
            Número do endereço do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
