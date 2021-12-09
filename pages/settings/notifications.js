import Head from 'next/head'
import Layout from "/components/layouts/Layout"
import { useState, useRef, useEffect } from "react"
import SettingsNavigation from 'components/views/SettingsNavigation'
import { useMainFocus } from 'lib/useMainFocus'

function FormSubmissionSummary({ submitted, error }) {
  const formResponse = useRef(null)

  useEffect(() => {
    if (submitted) {
      formResponse.current.focus()

    }

  }, [submitted, error])

  return <div ref={ formResponse } tabIndex="-1" className="scroll-m-16">
  { submitted ?
    error ?
    <div className="rounded-md bg-red-600 p-4 error" role="alert" aria-relevant="additions">
      <h2 className="text-white font-bold font-xl mb-2">There is 1 error in your submission</h2>
      <ul className="list-disc list-inside text-white">
        <li><a href="#email-address" className="custom:focus">Your email address is required</a></li>
      </ul>
    </div>
    :
    <div className="rounded-md bg-green-600 p-4 error">
      <h2 className="text-white font-bold font-xl">Your updates were saved successfully</h2>
    </div>
    : null }
  </div>
}


export default function AccountNotifications() {
  const mainRef = useMainFocus()


  const [error,setError] = useState(null)
  const [submitted, setSubmitted] = useState(null)
  const emailRef = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    setError(emailRef?.current?.value === "" ? true : false)
    setSubmitted(true)

  }

  return (
    <Layout>
      <Head>
        <title>Email, phone, and notifications : Toronto Public Library</title>
      </Head>

      <SettingsNavigation/>

      <main id="main" tabIndex="-1" className="col-span-full md:col-span-4 bg-white border-t border-gray-700 p-8" ref={ mainRef }>
        <h1 className="text-3xl font-bold mb-8">Email, phone, and notifications</h1>

        <form className="space-y-4 mb-4" onSubmit={ handleSubmit } noValidate action="/" method="POST">

          <FormSubmissionSummary { ...{ submitted, error }} />

          <div className="flex flex-col space-y-2 border-b border-gray-200 pb-6 pt-4 ${ error ? }">
            <div>
            <label htmlFor="email-address" className="flex items-center gap-2">
              <span>Email address</span>
              <span className="text-[14px] bg-gray-200 text-gray-800 rounded-full inline-flex px-2 items-center">Required</span>
            </label>
            { error && <p id="email-address-error" className="text-red-600 text-[15px] flex items-center">
              <svg viewBox="0 0 20 20" fill="currentColor" role="img" preserveAspectRatio="xMinYMin" aria-labelledby="react-aria-22" focusable="false" width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="mr-2"><title id="react-aria-22">Error</title><path fill-rule="evenodd" d="M1.552 13.917l6.1-10.558c1.052-1.812 3.66-1.812 4.712 0l6.088 10.558c1.04 1.812-.266 4.083-2.355 4.083H3.907c-2.089 0-3.406-2.271-2.355-4.083zM9.965 11.7c-.46-.024-.846-.398-.858-.857L8.9 7.363c0-.29.097-.567.29-.785.194-.217.472-.338.761-.35.64 0 1.124.46 1.148 1.051l-.193 3.564a.893.893 0 01-.894.857h-.048zM10 15.252c-.713 0-1.293-.58-1.293-1.293s.58-1.293 1.293-1.293a1.294 1.294 0 010 2.586z" clip-rule="evenodd"></path></svg>

              Your email address is required</p> }
            </div>
            <input ref={ emailRef } id="email-address" type="email" autoComplete="email" className="
              scroll-m-16 border border-gray-300 p-2 max-w-[20rem]
            "
              aria-invalid={ error }
              aria-describedby={ error ? "email-address-error" : null }
            />
          </div>

          <div className="flex flex-col space-y-2 border-b border-gray-200 pb-6 pt-4">
            <div className="">
              <label htmlFor="phone">Telephone number</label>
              <p className="text-[0.9375rem] text-gray-700" id="phone-description">	E.g. 416-555-5555. Make sure your telephone number is in one of the <a href="#">area codes we call</a>.</p>
            </div>
            <input id="phone" type="tel" autoComplete="tel" className="scroll-m-16 border border-gray-300 p-2 max-w-[20rem]" aria-describedby="phone-description" />
          </div>

          <div className="flex flex-col space-y-2 border-b border-gray-200 pb-6 pt-4">
            <label htmlFor="name">Preferred Name (for website display and email greeting)</label>
            <input id="name" type="text" autoComplete="name" className="scroll-m-16 border border-gray-300 p-2 max-w-[20rem]" />
          </div>

          <fieldset className="space-y-1 border-b border-gray-200 pb-6 pt-4">
            <legend className="space-y-1 ">
              <span className="font-bold">Notification method</span>
              <p className="text-[0.9375rem] text-gray-700">You will receive hold pickup notices, overdue notices, and card expiry reminders</p>
            </legend>

            <div className="flex gap-2 items-center min-h-[2rem]">
              <input type="radio" name="notification-method" value="Email" id="notification-method-email"/>
              <label htmlFor="notification-method-email">Email</label>
            </div>

            <div className="flex gap-2 items-center min-h-[2rem]">
              <input type="radio" name="notification-method" value="Email" id="notification-method-phone"/>
              <label htmlFor="notification-method-phone">Telephone</label>
            </div>

          </fieldset>

          <div className="flex gap-2 items-start min-h-[2rem] bg-gray-100 p-4">
            <span className="h-full"><input type="checkbox" name="subscribe" id="subscribe"/></span>

            <label htmlFor="subscribe">Receive additional updates including the latest news, upcoming programs, and newest titles by email</label>
          </div>

          <button type="submit" className="
            bg-tpl-blue text-white rounded-md min-h-[2rem] items-center inline-flex justify-center px-4 min-w-[6rem] py-2
          ">Save</button>
        </form>

        <div className="border-t border-b border-gray-300 py-4">
          <a href="#" className="text-tpl-blue underline">Help with notification settings</a>
        </div>

        <details className="py-4 space-y-2">

          <summary className="text-tpl-blue underline">Privacy information</summary>

          <h2 className="font-bold">Collection of Personal Information Notice</h2>
          <p>The personal information entered in Notification Settings is collected under the authority of sections 20 (a) and (d) of the Public Libraries Act. This information will only be used for the purpose of updating your customer account. Questions about the management and collection of personal information can be directed to the Data Governance and Privacy Risk Advisor, Toronto Public Library, 789 Yonge Street, Toronto ON M4W 2G8, 416-395-5658.</p>

        </details>



      </main>

    </Layout>
  )
}
