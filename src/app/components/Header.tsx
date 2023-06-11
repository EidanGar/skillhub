import Link from "next/link"

const Header = () => {
    const headerLinkClass = "hover:opacity-80 font-semibold text-xl transition-opacity duration-300"

    return (
        <nav className="flex flex-col items-center justify-center sm:flex-row gap-y-5 sm:justify-between mb-10">
        <Link href="/" className="hover:opacity-80 transition-opacity duration-300 font-bold text-3xl text-primary-color">
          Skillhub
        </Link>
        <ul className="w-full max-w-xs flex items-center justify-between">
          <li className={headerLinkClass}>
            <Link href="/about">About</Link>
          </li>
          <li className={headerLinkClass}>
            <Link href="/about/team">Team</Link>
          </li>
          <li className={headerLinkClass}>
            <Link href="/code/repos">Code</Link>
          </li>
        </ul>
      </nav>

    )
}

export default Header;