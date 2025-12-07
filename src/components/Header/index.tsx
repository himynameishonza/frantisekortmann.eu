import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Meta from "../Meta";
import classnames from "classnames";
import { useState, useEffect } from "react";

export default function Header({
  title,
  active,
}: {
  title?: string;
  active?: number;
}) {
  const [mobileNav, setMobileNav] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Meta title={title} />
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="text-2xl md:text-4xl uppercase no-underline block">
          <span className="text-slate-700">František</span>
          <span className="text-slate-500">Ortmann</span>
        </Link>

        <div className="flex items-center gap-1 ">
          <ul
            className={classnames(
              "md:flex gap-3 uppercase text-lg mr-4 text-slate-700 md:relative md:flex-row md:top-0 md:p-0 md:bg-transparent",

              mobileNav
                ? "bg-slate-200 absolute left-0 right-0 top-16 bottom-0 flex z-40 w-full flex-col p-5 items-center justify-center"
                : "hidden"
            )}
          >
            <li
              className={classnames("w-full text-center whitespace-nowrap", {
                ["md:border-b-2 md:border-slate-300"]: active === 1,
              })}
            >
              <Link
                href="/o-autorovi"
                className="p-4 md:p-0 w-full block hover:text-slate-500"
                onClick={() => setMobileNav(false)}
              >
                O autorovi
              </Link>
            </li>
            <li
              className={classnames("w-full text-center", {
                ["md:border-b-2 md:border-slate-300"]: active === 2,
              })}
            >
              <Link
                href="/detail"
                className="p-4 md:p-0 w-full block hover:text-slate-500 transition-all"
                onClick={() => setMobileNav(false)}
              >
                Detail
              </Link>
            </li>
            <li
              className={classnames("w-full text-center", {
                ["md:border-b-2 md:border-slate-300"]: active === 3,
              })}
            >
              <Link
                href="/people"
                className="p-4 md:p-0 w-full block hover:text-slate-500 transition-all"
                onClick={() => setMobileNav(false)}
              >
                People
              </Link>
            </li>
            <li
              className={classnames("w-full text-center", {
                ["md:border-b-2 md:border-slate-300"]: active === 4,
              })}
            >
              <Link
                href="/show"
                className="p-4 md:p-0 w-full block hover:text-slate-500 transition-all"
                onClick={() => setMobileNav(false)}
              >
                Show
              </Link>
            </li>
          </ul>

          <button
            className="md:hidden bg-slate-100 flex p-2 rounded-md text-slate-500 hover:bg-slate-200 cursor-pointer text-xl"
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mounted ? <FontAwesomeIcon icon={["fas", "bars"]} /> : <span>☰</span>}
          </button>

          <div
            className={classnames(
              "absolute bottom-16 flex z-90 items-center justify-center left-1/2 -translate-x-1/2 z-50 gap-4 md:relative md:bottom-0 md:-translate-x-0 md:left-0 md:gap-2",
              { ["hidden md:flex"]: !mobileNav }
            )}
          >
            <a
              href="https://www.facebook.com/ortmann.frantisek/"
              target="_blank"
              rel="noreferrer"
              className="flex w-10 h-10 md:w-8 md:h-8 items-center justify-center text-white bg-slate-700 rounded-full hover:bg-slate-500 cursor-pointer text-lg transition-all"
            >
              {mounted ? <FontAwesomeIcon icon={["fab", "facebook-f"]} /> : <span>f</span>}
            </a>
            <a
              href="https://www.instagram.com/frantisekortmann/"
              target="_blank"
              rel="noreferrer"
              className="flex w-10 h-10 md:w-8 md:h-8 items-center justify-center text-white bg-slate-700 rounded-full hover:bg-slate-500 cursor-pointer text-lg transition-all"
            >
              {mounted ? <FontAwesomeIcon icon={["fab", "instagram"]} /> : <span>i</span>}
            </a>
            <a
              href="mailto:frantisek@frantisekortmann.eu"
              className="flex w-10 h-10 md:w-8 md:h-8 items-center justify-center text-white bg-slate-700 rounded-full hover:bg-slate-500 cursor-pointer text-lg transition-all"
            >
              {mounted ? <FontAwesomeIcon icon={["far", "envelope"]} /> : <span>@</span>}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}