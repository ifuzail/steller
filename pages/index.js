import Navbar from "@/components/Navbar";
import ProductListing from "@/components/ProductListing";
import Head from "next/head";

export default function Home() {
  return (
   <main>
    <Head><title>Steller | e-commerce web app</title></Head>
    <Navbar/>
    <ProductListing/>
   </main>
  )
}
