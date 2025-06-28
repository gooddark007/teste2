import Index from "@/app/pages/index/page";
import Link from "next/link";



export default function Header(){
    return(
        <>
        <h1>Meu site</h1>
        <Link href="/">Home</Link>
        <Link href="/pages/galeria">Galeria</Link>
        <Link href="/pages/contato">Contato</Link>
        
      
       
        </>
    )
}