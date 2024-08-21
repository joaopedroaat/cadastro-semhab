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

export function FUOfBirthField() {
  const { form } = useContext(FormContext);
  const { states, handleBirthStateChange } = useContext(IBGEContext);
  return (
    <FormField
      control={form.control}
      name="placeOfBirth.FU"
      render={({ field }) => (
        <FormItem>
          <FormLabel>UF de nascimento</FormLabel>
          <Select
            onValueChange={(FU) => {
              handleBirthStateChange(FU);
              field.onChange(...FU);
            }}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a UF de nascimento" />
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
            UF de nascimento do responsável familiar
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
