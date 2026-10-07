'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const services = [
  { label: 'Web Design', href: '/web' },
  { label: 'Graphic Design', href: '/graphics' },
  { label: 'Others', href: '/art' },
];

const resources = [
  { label: 'Bible Study', href: '/resources/bible-study' },
  { label: 'Devotionals', href: '/resources/devotionals' },
  { label: 'Podcasts', href: '/resources/podcasts' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { label: 'Services', dropdown: services },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacts', label: 'Contacts' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimeout = useRef(null);

  /* Close everything on route change */
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
  }, [pathname]);

  /* Solidify navbar on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  const openMenu = (label) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(label);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-gray-200/70 shadow-[0_1px_20px_rgba(0,0,0,0.04)]'
            : 'bg-white/60 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
          {/* ---------- Logo ---------- */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Lapsa — Home"
          >
            <div className="relative h-9 w-9 md:h-10 md:w-10">
              <Image
                src="/images/Lapsa-removebg-preview.png"
                alt="Lapsa"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-sm font-bold tracking-tight text-orange-500 md:text-xl">
              Lapsa
              <span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* ---------- Desktop nav ---------- */}
          <ul className="hidden items-center gap-1 lg:flex">
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
                    className={`flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                      openDropdown === item.label
                        ? 'text-blue-700'
                        : 'text-gray-700 hover:text-blue-700'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-2 transition-all duration-200 ${
                      openDropdown === item.label
                        ? 'pointer-events-auto translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-1 opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm transition-colors ${
                            pathname === sub.href
                              ? 'bg-blue-50 text-blue-700 font-semibold'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700'
                          }`}
                        >
                          {sub.label}
                          <ArrowUpRight
                            size={14}
                            className="opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-700'
                        : 'text-gray-700 hover:text-blue-700'
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-blue-600" />
                    )}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* ---------- Desktop CTA ---------- */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contacts"
              className="group inline-flex items-center gap-1.5 rounded-md bg-orange-500 px-4 py-1 text-xs font-normal text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Start a Project
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* ---------- Mobile hamburger ---------- */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-900 transition-colors hover:bg-gray-50 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* ---------- Mobile backdrop ---------- */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* ---------- Mobile drawer ---------- */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
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
            <span className="text-sm font-bold text-gray-900">
              Lapsa<span className="text-blue-600">.</span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition hover:bg-gray-50"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 4l8 8M12 4l-8 8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Drawer body */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <ul className="space-y-1">
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
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium text-gray-800 transition hover:bg-gray-50"
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
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
                    <ul className="ml-3 mt-1 space-y-0.5 border-l border-gray-200 pl-3">
                      {item.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className={`block rounded-lg px-3 py-2.5 text-sm transition ${
                              pathname === sub.href
                                ? 'bg-blue-50 font-semibold text-blue-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-700'
                            }`}
                          >
                            {sub.label}
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
                    className={`block rounded-xl px-3 py-3 text-base font-medium transition ${
                      isActive(item.href)
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Drawer footer CTA */}
        <div className="border-t border-gray-100 px-5 py-4">
          <Link
            href="/contacts"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-900 px-5 py-2 text-sm font-normal text-white transition hover:bg-blue-700"
          >
            Start a Project
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </aside>
    </>
  );
}