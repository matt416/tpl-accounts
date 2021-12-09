import AccountNavigation from "/components/views/AccountNavigation"
import SiteHeader from "/components/views/SiteHeader"
import Footer from "/components/views/Footer"
import Favicon from "/components/views/Favicon"
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute top-[1rem] left-[1rem] bg-white p-4 rounded flex"><span className="p-4">Skip to content</span></a>
      <Head>
        <Favicon/>
        <base href="."/>
      </Head>

      <SiteHeader/>
      <AccountNavigation/>

      <div className="flex justify-center h-full px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 max-w-[80rem] w-full gap-12">
          {/* Typically a main, or container with main in it */}
          { children }
        </div>
      </div>

      <Footer/>
    </div>
  )
}