import Head from 'next/head'
import Layout from "/components/layouts/Layout"
import SettingsNavigation from 'components/views/SettingsNavigation'
import { useMainFocus } from 'lib/useMainFocus'
export default function AccountInfo() {
  const mainRef = useMainFocus()

  return (
    <Layout>
      <Head>
        <title>Name & address : Toronto Public Library</title>
      </Head>

      <SettingsNavigation/>

      <main id="main" tabIndex="-1" className="col-span-full md:col-span-4 bg-white border-t border-gray-700 p-8" ref={ mainRef }>
        <h1 className="text-3xl font-bold mb-8">Name & address</h1>


        <div className="space-y-4">
          <div className="flex flex-col space-y-1 border-b border-gray-300 pb-4">
            <h2 className="text-gray-800">Name</h2>
            <span className="font-bold text-[18px]">Matthew Rintoul</span>
          </div>

          <div className="flex flex-col space-y-1">
            <h2 className="text-gray-800">Address</h2>
            <address className="font-bold text-[18px] not-italic">B-1446 BAYVIEW AVE<br/>TORONTO, ON, M4G 3B3</address>
          </div>
        </div>




        {/**
          <dl className="space-y-4">
          <div className="border-b border-gray-300 space-y-1 pb-4">
            <dt>Name</dt>
            <dd className="font-bold">Matthew Rintoul</dd>
          </div>
          <div className="space-y-1">
            <dt>Address</dt>
            <dd className="font-bold">
                <address className="not-italic">
                  B-1446 BAYVIEW AVE<br/>TORONTO, ON, M4G 3B3
              </address></dd>
          </div>
        </dl>
         */}

      </main>

    </Layout>
  )
}
