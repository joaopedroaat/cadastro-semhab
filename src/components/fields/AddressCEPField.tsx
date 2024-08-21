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

export function AddressCEPField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="address.CEP"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Endereço</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>
            CEP do endereço do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
