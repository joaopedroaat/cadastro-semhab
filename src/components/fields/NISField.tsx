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

export function NISField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="NIS"
      render={({ field }) => (
        <FormItem>
          <FormLabel>NIS</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>NIS do responsável familiar</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
