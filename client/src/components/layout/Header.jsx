import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import cn from "classnames";

const navLinks = [
  {
    to: "/",
    label: "Home",
    subNav: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { to: "/booking", label: "Booking" }
    ],
  },
  { 
    to: "/pages", 
    label: "Pages",
    subNav: [
      { to: "/team", label: "Our Team" },
      { to: "/faq", label: "FAQ" }
    ]
  },
  { 
    to: "/rooms", 
    label: "Rooms & Suites",
    subNav: [
      { to: "/rooms", label: "All Rooms" },
      { to: "/room-details", label: "Room Details" }
    ]
  },
  { 
    to: "/services", 
    label: "Services",
    subNav: [
      { to: "/services", label: "All Services" },
      { to: "/service-details", label: "Service Details" }
    ]
  },
  { 
    to: "/blog", 
    label: "Blog",
    subNav: [
      { to: "/blog", label: "Blog Standard" },
      { to: "/blog-details", label: "Blog Details" }
    ]
  },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 font-sans shadow-md">
      {/* Top bar */}
      <div className="bg-[var(--color-primary)] text-white text-xs hidden md:block py-2.5">
        <div
          className="mx-auto px-6 flex items-center justify-between h-auto"
          style={{ maxWidth: "var(--max-width-container)" }}
        >
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
              7631 Sabina Park, 115 Devon Isle, USA
            </span>
            <a
              href="mailto:info@domain.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
              info@domain.com
            </a>
            <a
              href="tel:+19876543210"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
              (+1) 987 654 3210
            </a>
          </div>
          <div className="flex items-center gap-5">
            {[
              { label: "f", href: "#" },
              { label: "X", href: "#" },
              { label: "In", href: "#" },
              { label: "Be", href: "#" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="font-bold hover:text-yellow-200 transition-colors"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-[#1F2937] relative">
        <div
          className="mx-auto flex items-center h-16 w-full"
          style={{ maxWidth: "var(--max-width-container)" }}
        >
          {/* Logo Section with Cut - Added padding-left to align with container */}
          <div 
             className="relative bg-white h-16 flex items-center pr-16 pl-6 z-20"
             style={{ 
               clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
               width: "320px",
               marginLeft: "0" 
             }}
          >
             <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-10 flex items-center justify-center">
                 {/* Logo Icon */}
                 <svg className="w-8 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                 </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-[#111827] leading-none tracking-tight">
                  Fixy<span className="text-[var(--color-primary)]">land</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center mx-auto gap-6 xl:gap-8 flex-1 px-4 z-10">
            {navLinks.map(({ to, label, subNav }) => (
              <div key={to} className="group relative h-24 flex items-center">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-1 text-sm font-semibold transition-colors duration-200 tracking-wide",
                      "text-white hover:text-[var(--color-primary)] group-hover:text-[var(--color-primary)]"
                    )
                  }
                >
                  {label}
                  {subNav && (
                     <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                  )}
                </NavLink>

                {/* Dropdown Content */}
                {subNav && (
                  <div className="absolute top-full left-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">
                    <div className="bg-white shadow-xl py-2 border-t-4 border-[var(--color-primary)]">
                       {subNav.map((sub) => (
                         <Link
                           key={sub.label}
                           to={sub.to}
                           className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-none"
                         >
                           {sub.label}
                         </Link>
                       ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4 z-10 ml-auto pr-6">
             {/* Search */}
             <button className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
             </button>
             
             {/* Menu Desktop */}
             <button 
                className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors"
                onClick={() => setOpen(true)}
             >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
             </button>

             {/* CTA Button */}
            <Link
  to="/booking"
  className="flex items-center justify-center gap-2 bg-[var(--color-accent)] text-[#111827] text-sm font-bold px-8 py-4 rounded-sm hover:bg-white hover:text-[#111827] transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
>
  <span>Book Your Stay</span>
  <svg className="w-4 h-4 stroke-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-4 text-white ml-auto"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Drawer (Slide from Right) */}
        <div className={cn(
             "fixed inset-0 z-[100] lg:hidden transition-all duration-300",
             open ? "visible" : "invisible pointer-events-none"
        )}>
             {/* Backdrop */}
             <div 
               className={cn(
                 "absolute inset-0 bg-black/60 transition-opacity duration-300",
                 open ? "opacity-100" : "opacity-0"
               )}
               onClick={() => setOpen(false)}
             />

             {/* Drawer Panel */}
             <div className={cn(
               "absolute top-0 right-0 w-[300px] h-full bg-white shadow-2xl transition-transform duration-300 ease-out transform",
               open ? "translate-x-0" : "translate-x-full"
             )}>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8 border-b pb-4">
                     <span className="font-heading font-bold text-xl text-black">Menu</span>
                     <button onClick={() => setOpen(false)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                     </button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col gap-1">
                      {navLinks.map((link) => (
                        <div key={link.label}>
                          <NavLink
                            to={link.to}
                            onClick={() => !link.subNav && setOpen(false)}
                            className={({ isActive }) => cn(
                              "block py-3 px-2 text-base font-semibold border-b border-gray-100 hover:bg-gray-50 rounded",
                              isActive ? "text-[var(--color-primary-light)]" : "text-gray-800"
                            )}
                          >
                            {link.label}
                          </NavLink>
                          {link.subNav && (
                             <div className="pl-6 bg-gray-50 rounded-b mb-2">
                               {link.subNav.map(sub => (
                                 <NavLink 
                                    key={sub.label} 
                                    to={sub.to}
                                    onClick={() => setOpen(false)}
                                    className="block py-2 text-sm text-gray-600 hover:text-[var(--color-primary)]"
                                 >
                                    {sub.label}
                                 </NavLink>
                               ))}
                             </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t mt-auto">
                    <Link
                      to="/booking"
                      onClick={() => setOpen(false)}
                      className="flex justify-center items-center gap-2 bg-[var(--color-accent)] text-[#111827] font-bold px-4 py-3 rounded-md w-full hover:opacity-90"
                    >
                      Book Your Stay
                    </Link>
                  </div>
                </div>
             </div>
        </div>
      </div>
    </header>
  );
}
