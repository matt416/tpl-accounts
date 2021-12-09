import Head from 'next/head'
import Layout from "/components/layouts/Layout"
import { useState, useEffect, useRef } from "react"
import SettingsNavigation from 'components/views/SettingsNavigation'
import { useMainFocus } from 'lib/useMainFocus'

function FormSubmissionSummary({ submitted, error }) {
  const formResponse = useRef(null)

  useEffect(() => {
    if (submitted == true) {
      formResponse.current.focus()
    }
  }, [submitted])

  return <div ref={ formResponse } tabIndex="-1" className="scroll-m-16">
  { submitted ?
    error ?
    <div className="rounded-md bg-red-600 p-4 error" role="alert" aria-relevant="additions">
      <h2 className="text-white font-bold font-xl mb-2">There is 1 error in your submission</h2>
      <ul className="list-disc list-inside text-white">
        <li><a href="#password" className="custom:focus">A new password is required</a></li>
      </ul>
    </div>
    :
    <div className="rounded-md bg-green-600 p-4 error">
      <h2 className="text-white font-bold font-xl">Your new password has been set successfully</h2>
    </div>
    : null }
  </div>
}


export default function AccountPassword() {
  const mainRef = useMainFocus()

  const [error,setError] = useState(null)
  const [submitted, setSubmitted] = useState(null)
  const passwordRef = useRef(null)
  const confirmRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(passwordRef?.current?.value === "" || passwordRef?.current?.value !== confirmRef?.current?.value ? true : false)
    setSubmitted(true)
  }

  return (
    <Layout>
      <Head>
        <title>Change your password : Toronto Public Library</title>
      </Head>

      <SettingsNavigation />

      <main id="main" tabIndex="-1" className="col-span-full md:col-span-4 bg-white border-t border-gray-700 p-8" ref={ mainRef }>
        <h1 className="text-3xl font-bold mb-8">Change your password</h1>

        <form className="space-y-4" onSubmit={ handleSubmit } noValidate action="/" method="POST">

          <FormSubmissionSummary { ...{ submitted, error }} />

          <div className="flex flex-col space-y-2 ">
            <div>
            <label htmlFor="password" className="flex items-center gap-2 scroll-m-16">
              New password
            </label>
            { error && <p id="password-error" className="text-red-600 text-[15px] flex items-center">
              <img src="/validation-error.svg" alt="Error" width="20" height="20" className="mr-2" />
              Please enter a new password</p> }
            </div>
            <input
              ref={ passwordRef }
              id="password"
              type="password"
              id="password"
              autoComplete="new-password"
              className="scroll-m-16 border border-gray-300 p-2 max-w-[20rem]"
              aria-invalid={ error }
              aria-describedby={ error ? "password-error" : null }
            />
          </div>

          <div className="flex flex-col space-y-2 border-b border-gray-200 pb-6 pt-4 ${ error ? }">
            <label htmlFor="confirm-password" className="flex items-center gap-2">
              Confirm password
            </label>
            <input ref={ confirmRef } id="confirm-password" type="password" autoComplete="new-password" className="
              scroll-m-16 border border-gray-300 p-2 max-w-[20rem]
            "
            />
          </div>

          <button type="submit" className="
            bg-tpl-blue text-white rounded-md min-h-[2rem] items-center inline-flex justify-center px-4 min-w-[6rem] py-2
          ">Save</button>
        </form>
      </main>

    </Layout>
  )
}
