// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/basquete", label: "Basquete" },
  { to: "/skate", label: "Skate" },
  { to: "/corrida", label: "Corrida" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-white/10">
      <nav className="flex items-center justify-between px-6 md:px-12 h-20">
        <NavLink to="/" className="font-display text-2xl italic text-bone">
          VOLT<span className="text-volt">.</span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-10 font-body text-sm uppercase tracking-widest">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative py-2 transition-colors ${
                    isActive ? "text-volt" : "text-bone/70 hover:text-bone"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-volt transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-bone" aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}