import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import ProductListing from "@/components/ProductListing";
import Head from "next/head";

export default function Home() {
  return (
   <main>
    <Head><title>Steller | e-commerce web app</title></Head>
    <section className="mb-14">
    <Navbar/>
    </section>
    <section>
      <Banner/>
    </section>
    <section>
    <ProductListing/>
    </section>
   </main>
  )
}
