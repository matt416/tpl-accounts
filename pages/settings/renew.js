import Head from 'next/head'
import Layout from "/components/layouts/Layout"
import SettingsNavigation from "components/views/SettingsNavigation"
import { useMainFocus } from 'lib/useMainFocus'
export default function AccountRenew() {
  const mainRef = useMainFocus()

  return (
    <Layout>
      <Head>
        <title>Renew your card : Toronto Public Library</title>
      </Head>

      <SettingsNavigation />

      <main id="main" tabIndex="-1" className="col-span-full md:col-span-4 bg-white border-t border-gray-700 p-8" ref={ mainRef } >
        <h1 className="text-3xl font-bold mb-8">Renew your card</h1>

        <div className="space-y-2 mb-8 pb-8 border-b border-gray-300">
          <h2 className="text-xl font-bold">Renew your card online</h2>
          <p>If your name and address haven't changed, you can renew your card online.</p>
          <p>You will be asked to do the following:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Confirm that your <b>name</b> and <b>address</b> haven't changed.</li>
            <li>Add or update your <b>email address</b> (if we don't already have it).</li>
            <li>Add or update your <b>phone number</b> (if we don't already have it).</li>
          </ul>
          <a href="#" className="bg-tpl-blue text-white rounded-md min-h-[2rem] items-center inline-flex justify-center px-4 min-w-[6rem] py-2 no-underline">
            Renew online
            </a>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Renew your card in person</h2>
          <p>You can renew your card by bringing <a href="#" className="text-tpl-blue underline">identification</a> to any library branch.</p>

          <div className="flex items-center space-x-2">
          <a href="#" className="bg-tpl-blue text-white rounded-md min-h-[2rem] items-center inline-flex justify-center px-4 min-w-[6rem] py-2 no-underline">
          Visit your home branch
          </a>

          <a href="#" className="bg-gray-100 border-2 border-gray-300 text-gray-900 rounded-md min-h-[2rem] items-center inline-flex justify-center px-4 min-w-[6rem] py-2 no-underline">
          Find a branch
          </a>
          </div>

        </div>

      </main>

    </Layout>
  )
}
