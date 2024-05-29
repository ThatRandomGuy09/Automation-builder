import { ModeToggle } from "@/components/global/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <p className="text-3xl font-bold">Testing</p>
    </main>
  );
}
