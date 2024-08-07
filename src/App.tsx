import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { useContext } from "react";
import { IBGEContext } from "./contexts/IBGEContext";
import { FormContext } from "./contexts/FormContext";
import { NameField } from "./components/fields/NameField";
import { SexField } from "./components/fields/SexField";

export function App() {
  const { states } = useContext(IBGEContext);

  const { form } = useContext(FormContext);

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <>
      <header className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl">SEMHAB</h1>
        <h2>Formulário de Cadastro</h2>
      </header>

      <main className="mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <NameField />
            <SexField />

            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado de Nascimento</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o estado de nascimento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {states?.map((state) => (
                        <SelectItem key={state.id} value={state.name}>
                          {state.acronym}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Estado de nascimento do responsável familiar
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="mt-2" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </main>
    </>
  );
}
