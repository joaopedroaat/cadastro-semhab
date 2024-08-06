import { Button } from "./components/ui/button";

export function App() {
  return (
    <>
      <header className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl">SEMHAB</h1>
        <h2>Formulário de Cadastro</h2>
      </header>
      <main className="h-screen w-full flex items-center justify-center">
        <Button>Hello World!</Button>
      </main>
    </>
  );
}
