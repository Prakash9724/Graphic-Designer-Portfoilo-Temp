import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RegistrationMark from './RegistrationMark';
import { PERSON } from '../data/content';
import { useLenis } from '../context/LenisContext';

/* ── Nav links ── */
const NAV_LINKS = [
  { label: 'Work',       href: '#work',       id: 'work' },
  { label: 'Packaging',  href: '#packaging',  id: 'packaging' },
  { label: 'Graphics',   href: '#graphics',   id: 'graphics' },
  { label: 'Process',    href: '#process',    id: 'process' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact',    href: '#contact',    id: 'contact' },
];

/* ── Easing used throughout navbar motion ── */
const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const lenisRef = useLenis();
  const hamburgerRef  = useRef(null);
  const overlayRef    = useRef(null);
  const firstLinkRef  = useRef(null);

  /* ─── Scroll → shrink navbar ─── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ─── Active section via IntersectionObserver ─── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const observers = [];
    const map = new Map();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          map.set(id, entry.isIntersecting);
          // Pick the first visible section
          const active = ids.find((k) => map.get(k));
          setActiveSection(active || '');
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ─── Close overlay on resize past lg ─── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) closeMenu();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  /* ─── Lenis stop/start + focus management ─── */
  const openMenu = useCallback(() => {
    setMenuOpen(true);
    lenisRef?.current?.stop();
    // Focus first link after animation
    setTimeout(() => firstLinkRef.current?.focus(), 320);
  }, [lenisRef]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    lenisRef?.current?.start();
    setTimeout(() => hamburgerRef.current?.focus(), 100);
  }, [lenisRef]);

  /* ─── Keyboard: Esc closes, focus trap inside overlay ─── */
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') { closeMenu(); return; }
      if (e.key === 'Tab') {
        const focusable = overlayRef.current?.querySelectorAll(
          'a[href],button:not([disabled])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen, closeMenu]);

  /* ─── Lenis-aware smooth scroll to section ─── */
  const scrollTo = useCallback((href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(el, { offset: -navH, duration: 1.1 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [lenisRef]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    closeMenu();
    // Small delay so the overlay starts closing before scroll
    setTimeout(() => scrollTo(href), 80);
  }, [closeMenu, scrollTo]);

  /* ── Computed nav bg ── */
  const navBg = scrolled
    ? 'bg-[rgba(8,8,12,0.85)] backdrop-blur-xl border-b border-white/[0.08]'
    : 'bg-[rgba(8,8,12,0.72)] backdrop-blur-md border-b border-white/[0.05]';

  const navHeight = scrolled ? 'py-3' : 'py-4 md:py-5';

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${navBg} ${navHeight}`}
        style={{ paddingTop: `calc(env(safe-area-inset-top))` }}
      >
        <nav
          className="container-main flex items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          {/* ── Wordmark ── */}
          <a
            href="#"
            className="flex items-center gap-2 font-heading font-semibold text-[14px] sm:text-[15px] text-text hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#hero');
              if (menuOpen) closeMenu();
            }}
            aria-label="Pradeep Malla — back to top"
          >
            {/* Drop reg mark at very small widths */}
            <RegistrationMark size={14} className="text-primary hidden xs:block sm:block" />
            <span className="hidden xxs:inline">{PERSON.name}</span>
            {/* Fallback initials at <320px */}
            <span className="xxs:hidden font-mono font-bold text-[13px] tracking-wide">PM</span>
          </a>

          {/* ── Desktop links (lg+) ── */}
          <div
            className="hidden lg:flex items-center gap-7 xl:gap-8 relative"
            role="list"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <div key={link.id} className="relative" role="listitem">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-heading text-[13px] font-medium transition-colors duration-200 pb-0.5 ${
                      isActive ? 'text-text' : 'text-text-muted hover:text-text'
                    }`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {link.label}
                  </a>
                  {/* Active underline slider */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 36 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Let's talk pill — md+ visible; hidden below md (shown in overlay instead) */}
            <a
              href={`mailto:${PERSON.email}`}
              className="hidden md:inline-flex items-center gap-1.5 h-10 px-5 rounded-full border border-white/[0.14] bg-white/[0.06] backdrop-blur-sm text-[14px] font-heading font-medium text-text hover:text-white hover:border-primary/60 hover:bg-primary/[0.14] hover:shadow-[0_0_16px_rgba(123,57,252,0.25)] hover:-translate-y-px active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Let&apos;s talk
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>

            {/* Hamburger — below lg only */}
            <button
              ref={hamburgerRef}
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              onClick={() => (menuOpen ? closeMenu() : openMenu())}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-overlay"
            >
              {/* Two-line hamburger → X morph */}
              <motion.span
                className="block h-px w-5 bg-text"
                animate={menuOpen
                  ? { rotate: 45, y: 3, width: 20 }
                  : { rotate: 0,  y: 0, width: 20 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
              <motion.span
                className="block h-px w-5 bg-text"
                animate={menuOpen
                  ? { rotate: -45, y: -2, width: 20 }
                  : { rotate: 0,   y: 0,  width: 20 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ── MOBILE OVERLAY ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-overlay"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto lg:hidden"
            data-lenis-prevent
            style={{
              background: 'rgba(8,8,12,0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              paddingTop: `calc(var(--nav-h) + env(safe-area-inset-top) + 8px)`,
              paddingBottom: `calc(24px + env(safe-area-inset-bottom))`,
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            {/* Faint hairline grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.025]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
              aria-hidden="true"
            />

            {/* Close button — accessible, top-right */}
            <button
              className="absolute top-4 right-5 p-2.5 text-text-muted hover:text-text rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ top: `calc(var(--nav-h) - 8px + env(safe-area-inset-top))` }}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            {/* Nav links — large Instrument Serif with stagger */}
            <nav className="relative z-10 px-6 sm:px-8 flex-1 flex flex-col justify-center gap-1">
              <ul className="space-y-0">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{
                        delay: i * 0.06,
                        duration: 0.42,
                        ease: EASE,
                      }}
                    >
                      <a
                        ref={i === 0 ? firstLinkRef : undefined}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="flex items-baseline gap-5 py-4 border-b border-white/[0.06] group focus-visible:outline-none"
                        aria-current={isActive ? 'true' : undefined}
                      >
                        {/* Spec index number */}
                        <span className="font-body text-[11px] tabular-nums text-text-dim/60 tracking-widest w-6 shrink-0 select-none">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {/* Link label */}
                        <span
                          className="font-display transition-colors duration-200 leading-tight"
                          style={{
                            fontSize: 'clamp(2rem, 8vw, 3rem)',
                            color: isActive ? '#f2f2f5' : 'rgba(242,242,245,0.55)',
                          }}
                        >
                          {link.label}
                        </span>
                        {/* Active dot */}
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0 mb-1" />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* ── Bottom block ── */}
              <motion.div
                className="mt-8 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.38, duration: 0.3, ease: EASE }}
              >
                {/* Full-width CTA pill */}
                <a
                  href={`mailto:${PERSON.email}`}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full h-12 rounded-full border border-primary/40 bg-primary/[0.12] text-[15px] font-heading font-medium text-text hover:bg-primary/20 transition-colors"
                >
                  Let&apos;s talk
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>

                {/* Contact meta */}
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href={`mailto:${PERSON.email}`}
                    className="font-body text-sm text-text-muted hover:text-text transition-colors"
                    onClick={closeMenu}
                  >
                    {PERSON.email}
                  </a>
                  <a
                    href={`tel:${PERSON.phone.replace(/\s+/g, '')}`}
                    className="font-body text-sm text-text-muted hover:text-text transition-colors"
                    onClick={closeMenu}
                  >
                    {PERSON.phone}
                  </a>
                  <a
                    href={PERSON.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-text-muted hover:text-text transition-colors"
                    onClick={closeMenu}
                  >
                    {PERSON.instagram}
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
