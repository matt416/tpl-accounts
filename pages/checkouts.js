import Head from 'next/head'
import Layout from "/components/layouts/Layout"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Checkouts</title>
      </Head>

      <main id="main" tabIndex="-1" className="col-span-full">
        <h1 className="text-3xl font-bold">Checkouts</h1>
      </main>
    </Layout>
  )
}
