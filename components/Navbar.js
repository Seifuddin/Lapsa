'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const services = [
  { label: 'Web Design', href: '/web', desc: 'Websites, landing pages & e-commerce' },
  { label: 'Graphic Design', href: '/graphics', desc: 'Logos, brand kits & print' },
  { label: 'Others', href: '/art', desc: 'Illustration & experimental work' },
];

const resources = [
  { label: 'Bible Study', href: '/resources/bible-study', desc: 'Guides & study material' },
  { label: 'Devotionals', href: '/resources/devotionals', desc: 'Daily readings' },
  { label: 'Podcasts', href: '/resources/podcasts', desc: 'Conversations & teaching' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { label: 'Services', dropdown: services },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacts', label: 'Contact' },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef(null);

  /* reset on navigation */
  useEffect(() => {
    setOpenDropdown(null);
    setIsOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  /* scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* body lock when drawer open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  const openMenu = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);
  };

  return (
    <>
      {/* ============================================
          DESKTOP / TABLET HEADER — floating capsule
      ============================================ */}
      <header className="sticky top-0 z-50 w-full">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 md:px-6 ${
            scrolled ? 'pt-2' : 'pt-3 md:pt-4'
          }`}
        >
          <div
            className={`flex w-full items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-300 md:px-4 md:py-2.5 ${
              scrolled
                ? 'border-gray-200/80 bg-white/85 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] backdrop-blur-xl'
                : 'border-gray-200/60 bg-white/70 backdrop-blur-md'
            }`}
          >
            {/* -------- Logo (natural aspect ratio) -------- */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2.5 pl-1 pr-2"
              aria-label="Lapsa — Home"
            >
              <div className="relative h-8 w-8 md:h-9 md:w-9">
                <Image
                  src="/images/Lapsa-removebg-preview.png"
                  alt="Lapsa"
                  fill
                  sizes="36px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-gray-900 md:text-base">
                Lapsa
              </span>
            </Link>

            {/* -------- Desktop links -------- */}
            <ul className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((item, i) =>
                item.dropdown ? (
                  <li
                    key={i}
                    className="relative"
                    onMouseEnter={() => openMenu(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      className={`group flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
                        openDropdown === item.label
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        strokeWidth={2.4}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-200 ${
                        openDropdown === item.label
                          ? 'pointer-events-auto translate-y-0 opacity-100'
                          : 'pointer-events-none -translate-y-1 opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-1.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
                        {item.dropdown.map((sub) => {
                          const active = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`group flex items-start gap-3 rounded-xl p-2.5 transition-colors ${
                                active
                                  ? 'bg-orange-50'
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              <span
                                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${
                                  active
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-gray-100 text-gray-500 group-hover:bg-orange-500 group-hover:text-white'
                                } transition-colors`}
                              >
                                {String(sub.label.charAt(0))}
                              </span>
                              <span className="flex-1">
                                <span
                                  className={`flex items-center justify-between text-[13px] font-semibold ${
                                    active ? 'text-orange-600' : 'text-gray-900'
                                  }`}
                                >
                                  {sub.label}
                                  <ArrowUpRight
                                    size={13}
                                    className="opacity-0 transition-opacity group-hover:opacity-60"
                                  />
                                </span>
                                <span className="mt-0.5 block text-[11.5px] leading-snug text-gray-500">
                                  {sub.desc}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className={`relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-gray-900'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="absolute inset-x-3 -bottom-[3px] h-[2px] rounded-full bg-orange-500" />
                      )}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* -------- Desktop CTA -------- */}
            <div className="hidden items-center gap-2 lg:flex">
              <Link
                href="/contacts"
                className="group inline-flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Let&apos;s Talk
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* -------- Mobile trigger -------- */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-900 text-white transition hover:bg-orange-500 lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span className="absolute left-0 top-0 block h-[1.5px] w-full rounded-full bg-current" />
                <span className="absolute left-0 top-1/2 block h-[1.5px] w-3/4 -translate-y-1/2 rounded-full bg-current" />
                <span className="absolute bottom-0 left-0 block h-[1.5px] w-full rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ============================================
          MOBILE DRAWER — full bleed
      ============================================ */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-gray-950/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[90%] max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="relative h-8 w-8">
                <Image
                  src="/images/Lapsa-removebg-preview.png"
                  alt="Lapsa"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="text-base font-semibold tracking-tight text-gray-900">
                Lapsa
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 3l8 8M11 3l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Nav items */}
          <div className="flex-1 overflow-y-auto px-3 py-4">
            <p className="px-3 pb-2 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-gray-400">
              Navigation
            </p>

            <ul className="space-y-0.5">
              {navLinks.map((item, i) =>
                item.dropdown ? (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label
                        )
                      }
                      aria-expanded={mobileDropdown === item.label}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[15px] font-medium transition ${
                        mobileDropdown === item.label
                          ? 'bg-gray-50 text-gray-900'
                          : 'text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 transition-transform duration-200 ${
                          mobileDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        mobileDropdown === item.label
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <ul className="ml-3 mt-1 space-y-0.5 border-l-2 border-gray-100 pl-3">
                        {item.dropdown.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className={`block rounded-lg px-3 py-2.5 transition ${
                                pathname === sub.href
                                  ? 'bg-orange-50 text-orange-600'
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              <span className="block text-[14px] font-medium text-gray-800">
                                {sub.label}
                              </span>
                              <span className="mt-0.5 block text-[12px] text-gray-500">
                                {sub.desc}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={i}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium transition ${
                        isActive(item.href)
                          ? 'bg-orange-50 text-orange-600'
                          : 'text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      )}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Footer CTA */}
          <div className="border-t border-gray-100 bg-white px-5 py-4">
            <Link
              href="/contacts"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-5 py-2 text-[12px] font-normal text-white transition hover:bg-orange-500"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>
            <p className="mt-3 text-center text-[11.5px] text-gray-400">
              Lapsa Web &amp; Graphics
            </p>
          </div>
        </div>
      </div>
    </>
  );
}