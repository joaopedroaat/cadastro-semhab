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
import { BirthDateField } from "./components/fields/BirthDateField";
import { DocumentIssueDateField } from "./components/fields/DocumentIssueDateField";
import { NISField } from "./components/fields/NISField";
import { CPFField } from "./components/fields/CPFField";
import { OccupationField } from "./components/fields/OccupationField";
import { AddressStreetField } from "./components/fields/AddressStreetField";
import { AddressNumberField } from "./components/fields/AddressNumberField";
import { AddressDistrictField } from "./components/fields/AddressDistrictField";
import { AddressCountyField } from "./components/fields/AddressCountyField";
import { AddressFUField } from "./components/fields/AddressFUField";
import { AddressCEPField } from "./components/fields/AddressCEPField";
import { AddressComplementField } from "./components/fields/AddressComplementField";
import { ContactLandline } from "./components/fields/ContactLandline";
import { ContactMobile } from "./components/fields/ContactMobile";
import { ContactVoicemail } from "./components/fields/ContactVoicemail";
import { MaritalStatus } from "./components/fields/MaritalStatus";

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
            <BirthDateField />
            <SexField />
            <NationalityField />
            <FUOfBirthField />
            <CountyOfBirthField />
            <MotherNameField />
            <DocumentTypeField />
            <DocumentSerialNumberField />
            <DocumentIssuerField />
            <DocumentFUField />
            <DocumentIssueDateField />
            <NISField />
            <CPFField />
            <OccupationField />
            <AddressStreetField />
            <AddressNumberField />
            <AddressComplementField />
            <AddressDistrictField />
            <AddressFUField />
            <AddressCountyField />
            <AddressCEPField />
            <ContactLandline />
            <ContactMobile />
            <ContactVoicemail />
            <MaritalStatus />

            <Button className="mt-2" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </main>
    </>
  );
}
