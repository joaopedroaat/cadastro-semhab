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

export function MotherNameField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="motherName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nome da mãe</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>Nome da mãe do responsável familiar</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
