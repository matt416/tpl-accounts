import Link from "next/link"
import { useMatchPartialRoute } from "lib/useMatchPartialRoute"


const MenuItem = ({ label, href }) => {

  const isCurrent = useMatchPartialRoute(href, 1)

  return <li>
    <Link href={ href }>
      <a
        className={
          `p-4 inline-flex border-t w-full text-gray-900 text-[1rem]
          ${ isCurrent ? 'border-gray-700 bg-white font-bold' : 'border-gray-300' }`
        }
          aria-current={ isCurrent ? "page" : undefined }
        >
          { label }
        </a>
    </Link>
  </li>
}

export default function SettingsNavigation() {
  return (
    <nav aria-label="Account settings" className="col-span-full md:col-span-2">
      <ul className="flex flex-col text-tpl-blue text-20 border border-gray-300 border-t-0">
        <MenuItem label="Card number & expiry date" href="/settings/card/" />
        <MenuItem label="Change password/PIN" href="/settings/password/" />
        <MenuItem label="Name & address" href="/settings/info/" />
        <MenuItem label="Email, phone, & notifications" href="/settings/notifications/" />
        <MenuItem label="Home branch" href="/settings/branch/" />
        <MenuItem label="Borrowing history settings" href="/settings/borrowing-history/" />
        <MenuItem label="Renew your card" href="/settings/renew/" />
      </ul>
    </nav>
  )
}