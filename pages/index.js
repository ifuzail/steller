import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import ProductListing from "@/components/ProductListing";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <main className="mt-10">
        <Banner/>
        <ProductListing />
      </main>
    </Layout>
  );
}
