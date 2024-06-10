import { Button } from "@nextui-org/react";

export default function PrimerPaso() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-between font-mono text-sm lg:flex">
        <p>Elige si quieres un juego individual o en pareja</p>
        <span className="flex gap-4 my-5">
          <Button>Individual</Button>
          <Button>Pareja</Button>
        </span>
      </div>
    </main>
  );
}
