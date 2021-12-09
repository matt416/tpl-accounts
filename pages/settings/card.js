import Head from 'next/head'
import Layout from "/components/layouts/Layout"
import SettingsNavigation from "components/views/SettingsNavigation"
import { useMainFocus } from 'lib/useMainFocus'
export default function AccountCard() {
  const mainRef = useMainFocus()




  return (
    <Layout>
      <Head>
        <title>Card number & expiry date : Toronto Public Library</title>
      </Head>

      <SettingsNavigation />

      <main id="main" tabIndex="-1" className="col-span-full md:col-span-4 bg-white border-t border-gray-700 p-8" ref={ mainRef }>
        <h1 className="text-3xl font-bold mb-8">Card number & expiry date</h1>

        <div className="space-y-4">
          <div className="flex flex-col space-y-1 border-b border-gray-300 pb-4">
            <h2 className="text-gray-800">Library card number</h2>
            <span className="font-bold text-[18px]">27131035183302</span>
          </div>

          <div className="flex flex-col space-y-1">
            <h2 className="text-gray-800">Card expiry</h2>
            <span className="font-bold text-[18px] inline-flex gap-2"><img src="/error.svg" width="24" height="24" alt=""/><span className="text-red-600">Expired:</span> 19 Mar 2016</span>

            <div className="p-4">
              There are two ways to renew your card:
              <ul className="list-disc list-inside">
                <li>Bring <a href="#" className="text-tpl-blue underline">name and address identification</a> to any library branch</li>
                <li><a href="#" className="text-tpl-blue underline">Renew your library card online</a></li>
              </ul>
            </div>

            <a href="#" className="text-tpl-blue underline mt-4">Help with expired library cards</a>
          </div>
        </div>
      </main>

    </Layout>
  )
}
