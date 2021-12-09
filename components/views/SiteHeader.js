export default function SiteHeader({}) {

  return (
    <header className="w-full bg-blue-dark">

    <div className="flex items-stretch">

      <a href="#" className="text-center py-4 border-r border-white border-opacity-10 px-8 flex items-center">
        <img src="/tpl-logo.svg" alt="Toronto Public Library" width="128" height="64" />
      </a>

      <nav aria-label="Login & contact" className="text-white font-bold flex items-stretch">
        <ul className="flex flex-auto justify-stretch items-stretch">
          <li className="text-center p-6 border-r border-white border-opacity-10 flex items-center"><a href="#">Sign out</a></li>
          <li className="text-center p-6 border-r border-white border-opacity-10 flex items-center"><a href="#">Your account</a></li>
          <li className="text-center p-6 border-r border-white border-opacity-10 flex items-center"><a href="#">Contact us</a></li>
        </ul>
      </nav>

      <form role="search" className="flex-1 space-x-2 flex items-center p-4">
        <label htmlFor="site-search" className="sr-only text-white">Search books, movies, branches, programs & more</label>
        <input id="site-search" autoComplete="off" type="search" placeholder="Search books, movies, branches, programs & more" className="py-2 px-4 rounded-md flex-1" />
        <button type="submit" className="rounded-md bg-tpl-blue text-white py-2 px-4">Search</button>
      </form>
    </div>

    <nav aria-label="Main menu" className="w-full text-white font-bold border-t border-white border-opacity-10">
      <ul className="flex justify-stretch">
        <li className="flex-auto text-center p-3"><a href="#">Books, DVDs, & Music</a></li>
        <li className="flex-auto text-center p-3"><a href="#">eBooks & Online Content</a></li>
        <li className="flex-auto text-center p-3"><a href="#">Programs</a></li>
        <li className="flex-auto text-center p-3"><a href="#">Locations</a></li>
        <li className="flex-auto text-center p-3"><a href="#">Using the Library</a></li>
        <li className="flex-auto text-center p-3 bg-[#041041] border-l border-white border-opacity-20"><a href="#">Teens</a></li>
        <li className="flex-auto text-center p-3 bg-[#041041] border-l border-white border-opacity-20"><a href="#">Kids</a></li>
      </ul>
    </nav>

    </header>
  )
}