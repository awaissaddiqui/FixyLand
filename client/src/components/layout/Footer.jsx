import { Link } from "react-router-dom";
import { useState } from "react";

const exploreLinks = [
  "About Hotel",
  "Pricing",
  "Hotel Staff",
  "Latest News",
  "Contact Us",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <footer className="bg-[var(--color-secondary)] text-white mt-auto">
      <div
        className="mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        style={{ maxWidth: "var(--max-width-container)" }}
      >
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-md flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span className="font-heading font-bold text-xl text-white">
              Fixy<span className="text-[var(--color-primary)]">land</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Nam libero tempore cum soluta nobis eligendi optio cumque nihil
            impedit quo minus maxime placer facere.
          </p>
          <div className="flex items-center gap-2 mt-1">
            {["f", "X", "in", "Be"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-600 text-[10px] text-gray-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-2">
          <h4 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-2">
            Explore
          </h4>
          {exploreLinks.map((label) => (
            <Link
              key={label}
              to="/"
              className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] inline-block" />
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-2">
            Contact
          </h4>
          <p className="text-sm text-gray-400 flex items-start gap-2">
            <svg
              className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            7631 Sabina Park, 15 Devon Isle, Louisiana, USA
          </p>
          <a
            href="tel:+19876543210"
            className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors"
          >
            (+1) 987 654 3210
          </a>
          <a
            href="mailto:info@domain.com"
            className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors"
          >
            info@domain.com
          </a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-2">
            Newsletter
          </h4>
          <div className="flex rounded-[var(--radius-sm)] overflow-hidden border border-gray-600 focus-within:border-[var(--color-primary)] transition-colors">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex. info@domain.com"
              className="flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-300 placeholder-gray-500 outline-none"
            />
            <button
              onClick={() => setEmail("")}
              className="bg-[var(--color-primary)] px-3 flex items-center hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 accent-[var(--color-primary)] shrink-0"
            />
            <span className="text-xs text-gray-400">
              I agree to all terms and policies
            </span>
          </label>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4">
        <div
          className="mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ maxWidth: "var(--max-width-container)" }}
        >
          <p className="text-xs text-gray-500">
            © Copyright {year} Fixyland. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/"
              className="text-xs text-gray-500 hover:text-[var(--color-primary)] transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              to="/"
              className="text-xs text-gray-500 hover:text-[var(--color-primary)] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
