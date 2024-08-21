
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

export function DocumentIssueDateField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="document.issueDate"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Data de expedição</FormLabel>
          <FormControl>
            <Input type="date" {...field} />
          </FormControl>
          <FormDescription>
            Data de expedição do documento do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
