import { ModeToggle } from "@/components/global/mode-toggle";
import Navbar from "@/components/global/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
     <Navbar />
    </main>
  );
}
