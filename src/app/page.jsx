import Link from "next/link";
import Index from "./pages/index/page";
import Header from "@/components/Header/Header";


export default function Home() {
  return (
    <>
    <Link href= "/">Home</Link>
    <Link href="/pages/index">Index</Link>
    <Link href="/pages/contato">Contato</Link>
    <Link href= "/pages/galeria">Galeria</Link>
    
    </>

  );
}
