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

export function CountyOfBirth() {
  const { form } = useContext(FormContext);
  const { selectedFU, counties } = useContext(IBGEContext);

  console.log(!!selectedFU);
  return (
    <FormField
      control={form.control}
      name="placeOfBirth.city"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Município de nascimento</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={!selectedFU}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o município de nascimento" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {counties?.map((county) => (
                <SelectItem key={county.id} value={county.name}>
                  {county.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>
            Município de nascimento do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
