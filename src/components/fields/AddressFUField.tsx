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

export function AddressFUField() {
  const { form } = useContext(FormContext);
  const { states, handleAddressStateChange } = useContext(IBGEContext);
  return (
    <FormField
      control={form.control}
      name="address.FU"
      render={({ field }) => (
        <FormItem>
          <FormLabel>UF</FormLabel>
          <Select
            onValueChange={(FU) => {
              handleAddressStateChange(FU);
              field.onChange(...FU);
            }}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a UF" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {states?.map((state) => (
                <SelectItem key={state.id} value={state.acronym}>
                  {state.acronym} - {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>
            UF do endereço do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
