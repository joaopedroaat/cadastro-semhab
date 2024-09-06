import { useContext } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FormContext } from "@/contexts/FormContext";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export function NationalityField() {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form.control}
      name="nationality"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Nacionalidade</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="brazilian" />
                </FormControl>
                <FormLabel className="font-normal">
                  Brasileira
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="brazilian_naturalized" />
                </FormControl>
                <FormLabel className="font-normal">
                  Brasileira Naturalizado
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="foreign" />
                </FormControl>
                <FormLabel className="font-normal">
                  Estrangeira
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
