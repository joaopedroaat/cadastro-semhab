import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useContext } from "react";
import { FormContext } from "./contexts/FormContext";
import { NameField } from "./components/fields/NameField";
import { SexField } from "./components/fields/SexField";
import { NationalityField } from "./components/fields/NationalityField";
import { CountyOfBirthField } from "./components/fields/CountyOfBirthField";
import { MotherNameField } from "./components/fields/MotherNameField";
import { FUOfBirthField } from "./components/fields/FUOfBirthField";
import { DocumentTypeField } from "./components/fields/DocumentTypeField";
import { DocumentSerialNumberField } from "./components/fields/DocumentSerialNumberField";
import { DocumentIssuerField } from "./components/fields/DocumentIssuerField";
import { DocumentFUField } from "./components/fields/DocumentFUField";

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
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <NameField />
            <SexField />
            <NationalityField />
            <FUOfBirthField />
            <CountyOfBirthField />
            <MotherNameField />
            <DocumentTypeField />
            <DocumentSerialNumberField />
            <DocumentIssuerField />
            <DocumentFUField />
            <Button className="mt-2" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </main>
    </>
  );
}
