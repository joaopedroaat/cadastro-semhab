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

export function DocumentSerialNumberField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="document.serialNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel>N° / Série do documento</FormLabel>
          <FormControl>
            <Input type="number" {...field} />
          </FormControl>
          <FormDescription>
            Número de série do documento do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
