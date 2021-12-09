import Head from 'next/head'
import Layout from "/components/layouts/Layout"
import SettingsNavigation from "components/views/SettingsNavigation"
import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { useMainFocus } from 'lib/useMainFocus'
import { FocusScope } from "react-aria"
import BranchOptions from 'components/views/BranchOptions'
import BranchHours from 'components/views/BranchHours'

function Modal({ isOpen, isUpdate, responseRef, openerRef, setOpen, handleCloseModal, handleSaveCloseModal  }){
  useLayoutEffect(() => {

    if (!isOpen && isUpdate){
      responseRef?.current?.focus()
    } else if (!isOpen && !isUpdate) {
      openerRef?.current?.focus()
    }

  }, [isOpen, isUpdate])

  useEffect(() => {
    const keypressListener = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
      }
    }


    if (isOpen) {
      window.addEventListener('keydown', keypressListener)
    }


    return () => {
      window.removeEventListener('keydown', keypressListener)
    }

  }, [isOpen])


  return <>{ isOpen &&
    <FocusScope contain autoFocus>
    <div className="fixed inset-0 flex items-center justify-center">

      {/** Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-10" onClick={ handleCloseModal }></div>

      {/** Dialog */}
      <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="rounded-xl bg-white w-full max-w-[480px] z-20">

        <div className="flex w-full items-center justify-between px-6 py-4 border-b border-gray-300">
          <h2 id="modal-title" className="text-xl font-bold">Change your home branch</h2>
          <button aria-label="Close" className="text-2xl flex items-center justify-center w-[2rem] h-[2rem]" onClick={ handleCloseModal }>×</button>
        </div>

        <form action="/" method="POST" onSubmit={ handleSaveCloseModal } noValidate>

          <div className="flex flex-col p-6 gap-1">
            <label htmlFor="home-branch">Select your home branch</label>
            <select defaultValue="TRL" id="home-branch" name="home-branch" className="border bg-white rounded border-gray-500 px-3 py-2">
              <BranchOptions/>
            </select>
          </div>
          <div className="flex gap-2 px-6 pb-6">
            <button type="submit" className="bg-tpl-blue text-white rounded-md min-h-[2rem] items-center inline-flex justify-center px-4 min-w-[6rem] py-2 no-underline">Save</button>
            <button onClick={ handleCloseModal } className="bg-gray-100 border-2 border-gray-300 text-gray-900 rounded-md min-h-[2rem] items-center inline-flex justify-center px-4 min-w-[6rem] py-2">Cancel</button>
          </div>
        </form>

      </div>
    </div>
    </FocusScope>
    }</>

}


export default function AccountBranch() {
  const mainRef = useMainFocus()

  const [isOpen, setOpen] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const responseRef = useRef(null)
  const openerRef = useRef(null)

  const handleCloseModal = (e) => {
    e.preventDefault();
    setOpen(false)
  }

  const handleSaveCloseModal = (e) => {
    e.preventDefault();
    setUpdate(true)
    setOpen(false)
  }

  const handleOpenModal = (e) => {
    setOpen(true)
  }

  return (
    <Layout>
      <Head>
        <title>Home branch : Toronto Public Library</title>
      </Head>

      <SettingsNavigation/>

      <Modal {...{ isOpen, setOpen, isUpdate, setUpdate, responseRef, openerRef, handleSaveCloseModal, handleCloseModal }} />

      <main id="main" tabIndex="-1" className="col-span-full md:col-span-4 bg-white border-t border-gray-700 p-8" ref={ mainRef }>

        <h1 className="text-3xl font-bold mb-8">Your home branch</h1>

        <div ref={ responseRef } tabIndex="-1" className="scroll-m-16">
          { isUpdate ?
            <div className="rounded-md bg-green-600 p-4 error">
              <h2 className="text-white font-bold font-xl">Your home branch has been changed successfully</h2>
            </div>
            : null }
        </div>

        <div className="flex flex-col mt-6">
          <h2 className="text-xl font-bold">Toronto Reference Library</h2>
          <dl className="space-y-2 my-4">
            <div className="flex space-x-2">
              <dt>Address:</dt>
              <dd><address className="not-italic">789 Yonge Street Toronto, ON  M4W 2G8 <a className="text-tpl-blue" href="https://goo.gl/maps/XLkgfXh8sR1J8UE68">View on Google maps</a></address></dd>
            </div>
            <div className="flex space-x-2">
              <dt>Phone:</dt>
              <dd>416-395-5577</dd>
            </div>
          </dl>

          <BranchHours />

          {/* Explore Learn more text vs something descriptive */}
          <span className="mt-4">
          <a href="https://www.torontopubliclibrary.ca/torontoreferencelibrary/">Visit the Toronto Reference Library branch page</a> to learn more about featured services, directions, and parking.
          </span>
        </div>

        <div className="border-t border-gray-300 pt-4 mt-4 flex justify-between items-center">
          <button ref={ openerRef } onClick={ handleOpenModal } className="bg-tpl-blue text-white rounded-md min-h-[2rem] items-center inline-flex justify-center px-4 min-w-[6rem] py-2">
            Change your home branch
          </button>
        </div>

      </main>

    </Layout>
  )
}
