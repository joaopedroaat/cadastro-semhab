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
import { NationalityField } from "./components/fields/NationalityField";

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
            <NationalityField />
            <Button className="mt-2" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </main>
    </>
  );
}
