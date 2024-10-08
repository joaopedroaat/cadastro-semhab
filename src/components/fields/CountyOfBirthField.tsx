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

export function CountyOfBirthField() {
  const { form } = useContext(FormContext);
  const { birthState, birthCounties } = useContext(IBGEContext);

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
            disabled={!birthState}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o município de nascimento" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {birthCounties?.map((county) => (
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
