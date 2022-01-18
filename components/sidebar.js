import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="space-y-4">
      <div className="text-4xl font-mono uppercase font-extrabold text-black glow">
        <Link href="/">
          <a>dt</a>
        </Link>
      </div>
      <div className="flex flex-row sm:flex-col sm:space-x-0 sm:space-y-2 border-gray-700 border-b pb-6 sm:border-b-0 sm:pb-0 text-sm font-mono space-x-4">
        <NavItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/log">
            <a>Log</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </NavItem>
      </div>
      <style>{`
        .glow {
          animation: text-shadow-color-change 8s infinite;
        }
        @keyframes text-shadow-color-change {
          0% { text-shadow: 0px 0px 15px #ffadf5; }
          12% { text-shadow: 0px 0px 15px #8fc5ff; }
          37% { text-shadow: 0px 0px 15px #ff6b6b; }
          62% { text-shadow: 0px 0px 15px #6df774; }
          87% { text-shadow: 0px 0px 15px #f0f76d; }
          100% { text-shadow: 0px 0px 15px #ffadf5; }
        }
      `}</style>
    </div>
  )
}

export default Sidebar

const NavItem = ({ children }) => {
  return <div className="hover:underline">{children}</div>
}
