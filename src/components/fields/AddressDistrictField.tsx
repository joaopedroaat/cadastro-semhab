
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

export function AddressDistrictField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="address.district"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Bairro</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>
            Bairro do endereço do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
