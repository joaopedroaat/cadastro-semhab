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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { IBGEContext } from "@/contexts/IBGEContext";

export function AddressCountyField() {
  const { form } = useContext(FormContext);
  const { addressState, addressCounties } = useContext(IBGEContext);

  return (
    <FormField
      control={form.control}
      name="address.county"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Município</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={!addressState}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o município" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {addressCounties?.map((county) => (
                <SelectItem key={county.id} value={county.name}>
                  {county.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>
            Município do endereço do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
