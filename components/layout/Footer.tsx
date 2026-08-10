import Link from "next/link";
import { company, contactPlaceholders, phoneHref } from "@/lib/content/company";
import { footerColumns, locationLinks } from "@/lib/content/nav";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-950 text-concrete-300">
      <div className="mx-auto max-w-[1680px] px-6 py-16 md:px-10 2xl:px-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="focus-ring inline-block" aria-label="Nexa Construction Solutions — Home">
              <Logo
                iconClassName="h-11 sm:h-12 lg:h-14 2xl:h-20"
                wordClassName="h-6 sm:h-7 lg:h-8 2xl:h-10"
                subtitleClassName="text-[9px] sm:text-[10px] lg:text-xs 2xl:text-sm"
              />
            </Link>
            <address className="mt-5 not-italic text-sm leading-relaxed">
              {company.legalName}
              <br />
              ABN: {company.abn}
              <br />
              {company.address.street}
              <br />
              {company.address.suburb} {company.address.state} {company.address.postcode}
              <br />
              {company.address.country}
            </address>
            <p className="mt-4 text-sm text-steel-400">
              {company.email ? (
                <a href={`mailto:${company.email}`} className="focus-ring hover:text-amber-500">
                  {company.email}
                </a>
              ) : (
                contactPlaceholders.email
              )}
              <br />
              {company.phone && phoneHref ? (
                <a href={phoneHref} className="focus-ring hover:text-amber-500">
                  {company.phone}
                </a>
              ) : (
                contactPlaceholders.phone
              )}
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold tracking-[0.2em] text-steel-400 uppercase">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="focus-ring text-sm hover:text-amber-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-steel-400 uppercase">Service Areas</p>
            <ul className="mt-4 space-y-2.5">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring text-sm hover:text-amber-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-steel-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. ABN {company.abn}.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="focus-ring hover:text-amber-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="focus-ring hover:text-amber-500">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
