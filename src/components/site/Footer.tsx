import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="pemogan-hero-font relative overflow-hidden border-t border-teal-500/15 text-white"
      style={{
        backgroundColor: "#0b1220",
        backgroundImage:
          "radial-gradient(ellipse 70% 60% at 100% 100%, rgba(99,102,241,0.14) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(20,184,166,0.12) 0%, transparent 50%)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 md:py-[100px]">
        {/* Top row — logo + privacy */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="shrink-0 rounded-xl border border-teal-500/25 bg-[#131d2e] px-3 py-2"
          >
            <Image
              src="/TGL-Logo.svg"
              alt="TGL — The Great Logics"
              width={220}
              height={52}
              className="h-auto w-[160px] object-contain"
            />
          </Link>
          <span className="text-[14px] text-white/50">Privacy Policy</span>
        </div>

        {/* Link columns */}
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:mt-14 md:gap-x-8 md:gap-y-10">
          <div>
            <h3 className="text-[18px] font-semibold text-white">Home</h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link
                  href="/"
                  className="text-white/50 transition hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/50 transition hover:text-white"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/50 transition hover:text-white"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-white/50 transition hover:text-white"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mern-stack"
                  className="text-white/50 transition hover:text-white"
                >
                  MERN Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/services/next-js"
                  className="text-white/50 transition hover:text-white"
                >
                  Next.js
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-white">
              Quick Link
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link
                  href="#contact"
                  className="text-white/50 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/50 transition hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/50 transition hover:text-white"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-white">
              Information
            </h3>
            <ul className="mt-5 space-y-3 text-[15px] text-white/50">
              <li>
                <a
                  href="tel:+923441882663"
                  className="transition hover:text-white"
                >
                  (+92) 344 1882663
                </a>
              </li>
              <li>Lahore, Pakistan</li>
              <li>
                <a
                  href="mailto:mhussnainashiq@gmail.com"
                  className="transition hover:text-white"
                >
                  mhussnainashiq@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row — social icons + terms */}
        <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/70 transition hover:text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-white/70 transition hover:text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 transition hover:text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <span className="text-[14px] text-white/50">Term Of Condition</span>
        </div>
      </div>
    </footer>
  );
}
