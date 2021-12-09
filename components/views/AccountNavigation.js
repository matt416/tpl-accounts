import Link from "next/link"
import { useMatchPartialRoute } from "lib/useMatchPartialRoute"

const MenuItem = ({ label, href }) => {

  const isCurrent = useMatchPartialRoute(href, 0)

  return <li>
  <Link href={ href }>
    <a
      className={
        `py-4 px-2 inline-flex border-b-4
        ${ isCurrent ? 'border-tpl-blue' : 'border-transparent' }`
      }
        aria-current={ isCurrent ? "page" : undefined }
      >
        { label }
      </a>
  </Link>
</li>
}

export default function AccountNavigation() {

  return (
  <div className="bg-white flex justify-center pt-[4px] px-4">

    <nav aria-label="Account menu" className="w-full max-w-[80rem]">
      <ul className="flex text-tpl-blue text-20 space-x-6">
        <MenuItem label="Summary" href="/" />
        <MenuItem label="Checkouts" href="/checkouts/" />
        <MenuItem label="Holds" href="/holds/" />
        <MenuItem label="Browsing History" href="/browsing-history/" />
        <MenuItem label="Charges ($0.00)" href="/charges/" />
        <MenuItem label="Account Settings" href="/settings/card/" />
      </ul>
    </nav>
  </div>
  )
}