import Head from 'next/head'
import Layout from "/components/layouts/Layout"
import BranchHours from 'components/views/BranchHours'

export default function Home() {


  return (
    <Layout>
      <Head>
        <title>Account summary : Toronto Public Library</title>
      </Head>

      <main id="main" tabIndex="-1" className="col-span-full grid grid-cols-6 gap-12">

        <h1 className="text-3xl font-bold col-span-full">Account summary</h1>

        <div role="alert" className="col-span-full border-t-4 p-4 border-red-500 bg-white flex items-center">
          <div className="h-full flex flex-col justify-center border-r border-gray-300 pr-4 mr-4">
          <img src="/error.svg" alt="" height="32" width="32"/>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl">Your library card has expired</h2>
            <p>Your library card expired on 19 Mar 2016. To renew your card either,</p>
            <ul className="list-disc list-inside">
              <li>Bring name and address identification to any library branch</li>
              <li>Renew your library card online</li>
            </ul>
          </div>
        </div>

        <div className="col-span-full md:col-span-2 min-h-full gap-4 flex flex-col">
          <div className="w-full p-4 bg-white rounded space-y-2">
            <h2 className="text-2xl border-b border-gray-300 pb-2 flex items-center"><a href="/checkouts/" className="no-underline text-tpl-blue">Checkouts</a><img src="/chevron.svg" width="8" height="16" alt="" className="ml-auto mr-0"/></h2>
            <p>You don't have any items checked out.</p>
            <p><a href="#" className="text-tpl-blue">Search the website</a> to find something you might like, or <a href="#" className="text-tpl-blue">visit your local branch</a>.</p>
          </div>

          <div className="w-full p-4 bg-white rounded space-y-2">
            <h2 className="text-2xl border-b border-gray-300 pb-2 flex items-center"><a href="/holds/" className="no-underline text-tpl-blue">Holds</a>
            <img src="/chevron.svg" width="8" height="16" alt="" className="ml-auto mr-0"/>
            </h2>
            <p>You don't have any items on hold.</p><p><a href="#" className="text-tpl-blue">Search the website</a> to find something you might like.</p>
          </div>

          <div className="w-full p-4 bg-white rounded">
            <h2 className="text-2xl flex items-center"><a href="/borrowing-history/" className="no-underline text-tpl-blue">Borrowing History</a><img src="/chevron.svg" width="8" height="16" alt="" className="ml-auto mr-0"/></h2>

          </div>

          <div className="w-full p-4 bg-white rounded flex items-center">
            <h2 className="text-2xl flex-1 mr-4">
            <a href="/saved/" className="no-underline text-tpl-blue flex justify-between">Saved Items
              <span>1</span></a>
            </h2>
              <img src="/chevron.svg" width="8" height="16" alt="" className="ml-auto mr-0"/>
          </div>

          <div className="w-full p-4 bg-white rounded space-y-2">
            <h2 className="text-2xl border-b border-gray-300 pb-2 flex items-center"><a href="/charges/" className="no-underline text-tpl-blue">Charges</a>
            <img src="/chevron.svg" width="8" height="16" alt="" className="ml-auto mr-0"/></h2>
            <p>Hooray! You don’t have any charges!</p>
          </div>

        </div>

        <div className="col-span-full md:col-span-4 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">eBooks</h2>
            <p>Looking for your eBook account?</p>
            <a href="#">Overdrive eBooks & eAudiobooks <span aria-hidden="true">&gt;</span></a>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Print card</h2>
            <a href="#" className="underline">Check your print card balance <span aria-hidden="true">&gt;</span></a>
          </div>

          <div className="mb-8 space-y-6">

            <h2 className="text-2xl font-bold mb-6">Home Branch - <a href="#" className="text-xl font-bold text-tpl-blue">Toronto Reference Library</a></h2>

            <div className="bg-yellow-50 border-t border-yellow-200 p-4 space-y-3">
              <h3 className="text-lg font-bold">Service update <span className="sr-only"> for the Toronto Reference Library</span></h3>
              <p>Due to ongoing elevator maintenance, some closed stacks material is not currently accessible. Library staff will notify you if the item you have requested cannot be fulfilled at this time.</p>
            </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold">Address</h3>
                <address className="not-italic">789 Yonge Street Toronto, ON  M4W 2G8 <a className="text-tpl-blue" href="https://goo.gl/maps/XLkgfXh8sR1J8UE68">View on Google maps</a></address>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Phone</h3>
                <p>416-395-5577</p>
              </div>

            <BranchHours />
          </div>

          <div className="space-y-2">
          <h2 className="text-2xl font-bold mb-4">Your Library Card (Expired)</h2>
            <span className="text-red-700">Expiry: 19 Mar 2016</span>
            <p>Library cards must be renewed once a year.</p>
            <p><a href="#" className="text-tpl-blue">Renew your card online</a> or at any branch.</p>
            <p><a href="#" className="text-tpl-blue">Help with card renewal</a></p>

          </div>
        </div>
      </main>

    </Layout>
  )


}
