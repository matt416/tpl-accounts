import Head from 'next/head'
import Layout from "/components/layouts/Layout"


const Card = ({ children, className, ...props }) => <div className={ `w-full p-4 bg-white rounded ${ className }`} { ...props }>{ children }</div>

export default function Home() {


  return (
    <Layout>
      <Head>
        <title>Account summary</title>
      </Head>

      <main id="main" tabIndex="-1" className="col-span-full grid grid-cols-6 gap-12">

        <h1 className="text-3xl font-bold col-span-full">Account summary</h1>

        <div role="alert" className="col-span-full border-t-4 p-4 border-red-500 bg-white">
          <h2 className="text-xl">Your library card has expired</h2>
          <p>Your library card expired on 19 Mar 2016. To renew your card either,</p>
          <ul className="list-disc list-inside">
            <li>Bring name and address identification to any library branch</li>
            <li>Renew your library card online</li>
          </ul>
        </div>

        <div className="col-span-full md:col-span-2 min-h-full gap-4 flex flex-col">
          <Card>
            <h2 className="text-2xl">Checkouts</h2>
          </Card>

          <Card>
            <h2 className="text-2xl">Holds</h2>
          </Card>

          <Card>
            <h2 className="text-2xl">Borrowing History</h2>
          </Card>

          <Card>
            <h2 className="text-2xl flex justify-between">
              Saved Items
              <span>1</span>
            </h2>
          </Card>

          <Card>
            <h2 className="text-2xl">Charges</h2>
          </Card>

        </div>

        <div className="col-span-full md:col-span-4">
          <div>
            <h2 className="text-2xl">eBooks</h2>
            <p>Looking for your eBook account?</p>
            <a href="#">Overdrive eBooks & eAudiobooks <span aria-hidden="true">&gt;</span></a>
          </div>

          <div>
            <h2 className="text-2xl">Print card</h2>
            <a href="#" className="underline">Check your print card balance <span aria-hidden="true">&gt;</span></a>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl">Your Home Branch</h2>
            <a href="#">Toronto Reference Library</a>

            <div className="bg-yellow-50 border-t border-yellow-200 p-4 space-y-3">
              <h3 className="text-xl font-bold">Service update <span className="sr-only"> for the Toronto Reference Library</span></h3>
              <p>Due to ongoing elevator maintenance, some closed stacks material is not currently accessible. Library staff will notify you if the item you have requested cannot be fulfilled at this time.</p>
            </div>

            <h3>Address & contact</h3>

            <h3>Hours</h3>
          </div>

          <h2>Your Library Card</h2>

        </div>
      </main>

    </Layout>
  )


}


/**
 * <aside className="col-span-2 min-h-full">
        <div>
          <h2>Checkouts</h2>
        </div>

        <div>
          <h2>Holds</h2>
        </div>

        <div>
          <h2>Borrowing History</h2>
        </div>

        <div>
          <h2>Saved Items 1</h2>
        </div>

        <div>
          <h2>Charges</h2>
        </div>




      </aside>
 */