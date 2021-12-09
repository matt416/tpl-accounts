import Head from 'next/head'
import Layout from "/components/layouts/Layout"
import { useMainFocus } from 'lib/useMainFocus'
import { useEffect, useState, useRef } from 'react'
import SettingsNavigation from "components/views/SettingsNavigation"
export default function AccountBorrowingHistory() {

  const mainRef = useMainFocus()
  const [historyEnabled, setHistoryEnabled] = useState(false)
  const [isUpdate, setUpdate] = useState(false)
  const responseRef = useRef(null)

  const handleToggleHistory = () => {
    setHistoryEnabled(!historyEnabled)
    setUpdate(true)
  }

  useEffect(() => {
    if (isUpdate) {
      responseRef.current.focus()
    }
  }, [isUpdate, historyEnabled])


  return (
    <Layout>
      <Head>
        <title>Borrowing history : Toronto Public Library</title>
      </Head>

      <SettingsNavigation/>

      <main id="main" tabIndex="-1" className="col-span-full md:col-span-4 bg-white border-t border-gray-700 p-8 space-y-4" ref={ mainRef }>
        <h1 className="text-3xl font-bold">Borrowing history settings</h1>

        <div ref={ responseRef } tabIndex="-1" className="scroll-m-16">
        { isUpdate ?
          <div className="rounded-md bg-green-600 p-4 error">
            <h2 className="text-white font-bold font-xl">Your borrowing history has been turned { historyEnabled ? "on" : "off" }</h2>
          </div>
          : null }
        </div>

        { historyEnabled ?
        <p>Your <a href="#" className="text-tpl-blue">borrowing history</a> is enabled.</p>
        : <><p className="font-bold">Keep a record of what you borrow from the library</p>
        <p>Turn on the Borrowing History feature to automatically keep track of books and other materials you check out.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            The library does not keep a record of items you borrow unless you opt in to use this feature.
          </li>
          <li>
            Borrowing History starts on the day you opt in. We don't have any record of what you checked out before you started using this feature.
          </li>
          <li>
            Borrowing History includes the title, author, and format of each item you borrow, as well as checkout date and date returned.
          </li>
          <li>Once items appear in your borrowing history, they can’t be deleted.</li>
        </ul>
        <p>Your <a href="#" className="text-tpl-blue underline">borrowing history</a> is <strong className="font-bold">not enabled</strong>.</p>

        </>}
        <div className="border-t border-gray-300 pt-4 mt-4 flex justify-between items-center">

          <button onClick={ handleToggleHistory } className="bg-tpl-blue text-white rounded-md min-h-[2rem] items-center inline-flex justify-center px-4 min-w-[6rem] py-2">
            Turn { historyEnabled ? "Off" : "On" } Borrowing History
          </button>

          <a href="#" className="text-tpl-blue underline">Help with Borrowing History</a>

        </div>

      </main>

    </Layout>
  )
}
