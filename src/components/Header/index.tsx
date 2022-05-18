import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Meta from "../Meta";
import classnames from "classnames";
import { useState } from "react";

export default function Header({
  title,
  active,
}: {
  title?: string;
  active?: number;
}) {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <Meta title={title} />
      <div className="flex items-center justify-between mb-4">
        <Link href="/">
          <a className="text-2xl md:text-4xl uppercase no-underline block">
            <span className="text-slate-700">František</span>
            <span className="text-slate-500">Ortmann</span>
          </a>
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
              <Link href="/o-autorovi">
                <a
                  className="p-4 md:p-0 w-full block hover:text-slate-500"
                  onClick={() => setMobileNav(false)}
                >
                  O autorovi
                </a>
              </Link>
            </li>
            <li
              className={classnames("w-full text-center", {
                ["md:border-b-2 md:border-slate-300"]: active === 2,
              })}
            >
              <Link href="/detail">
                <a
                  className="p-4 md:p-0 w-full block hover:text-slate-500 transition-all"
                  onClick={() => setMobileNav(false)}
                >
                  Detail
                </a>
              </Link>
            </li>
            <li
              className={classnames("w-full text-center", {
                ["md:border-b-2 md:border-slate-300"]: active === 3,
              })}
            >
              <Link href="/people">
                <a
                  className="p-4 md:p-0 w-full block hover:text-slate-500 transition-all"
                  onClick={() => setMobileNav(false)}
                >
                  People
                </a>
              </Link>
            </li>
            <li
              className={classnames("w-full text-center", {
                ["md:border-b-2 md:border-slate-300"]: active === 4,
              })}
            >
              <Link href="/show">
                <a
                  className="p-4 md:p-0 w-full block hover:text-slate-500 transition-all"
                  onClick={() => setMobileNav(false)}
                >
                  Show
                </a>
              </Link>
            </li>
          </ul>

          <a
            className="md:hidden bg-slate-100 flex p-2 rounded-md text-slate-500 hover:bg-slate-200 cursor-pointer text-xl"
            onClick={() => setMobileNav(!mobileNav)}
          >
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </a>

          <div
            className={classnames(
              "absolute bottom-16 flex z-90 items-center justify-center left-1/2 -translate-x-1/2 z-50 gap-4 md:relative md:bottom-0 md:-translate-x-0 md:left-0 md:gap-2",
              { ["hidden md:flex"]: !mobileNav }
            )}
          >
            <Link href="https://www.facebook.com/ortmann.frantisek/">
              <a className="flex w-10 h-10 md:w-8 md:h-8 items-center justify-center text-white bg-slate-700 rounded-full hover:bg-slate-500 cursor-pointer text-lg transition-all">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/frantisekortmann/">
              <a className="flex w-10 h-10 md:w-8 md:h-8 items-center justify-center text-white bg-slate-700 rounded-full hover:bg-slate-500 cursor-pointer text-lg transition-all">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </Link>
            <Link href="mailto:frantisek@frantisekortmann.eu">
              <a className="flex w-10 h-10 md:w-8 md:h-8 items-center justify-center text-white bg-slate-700 rounded-full hover:bg-slate-500 cursor-pointer text-lg transition-all">
                <FontAwesomeIcon icon={["far", "envelope"]} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
