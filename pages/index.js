import Layout from "@/components/Layout";
import ProductListing from "@/components/ProductListing";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <main>
        <ProductListing />
      </main>
    </Layout>
  );
}
