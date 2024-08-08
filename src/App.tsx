import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useContext } from "react";
import { FormContext } from "./contexts/FormContext";
import { NameField } from "./components/fields/NameField";
import { SexField } from "./components/fields/SexField";
import { NationalityField } from "./components/fields/NationalityField";
import { StateOfBirth } from "./components/fields/StateOfBirth";
import { CountyOfBirth } from "./components/fields/CountyOfBirth";
import { MotherName } from "./components/fields/MotherName";

export function App() {
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
            <StateOfBirth />
            <CountyOfBirth />
            <MotherName />
            <Button className="mt-2" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </main>
    </>
  );
}
