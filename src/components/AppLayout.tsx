import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./Brand";
import { useAuth } from "../state/AuthContext";
import { pageLinks } from "./sections/data";

export function AppLayout() {
  const { user, signOut } = useAuth();

  return (
    <div className="app-shell">
      <header className="topbar">
        <Brand />
        <div className="topbar-actions">
          <span className="user-greeting">{user?.name}</span>
          <button className="button button-quiet" onClick={signOut} type="button">
            Sign out
          </button>
        </div>
      </header>
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
}

export function LandingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 24);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const exploreToggleRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const isExploreActive = pageLinks.some((item) => item.href === pathname);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsExploreOpen(false);
  };

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen && !isExploreOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      if (isExploreOpen) {
        setIsExploreOpen(false);
        exploreToggleRef.current?.focus();
      } else {
        closeMenu();
        menuToggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen, isExploreOpen]);

  return (
    <header className={`topbar landing-nav${isScrolled ? " is-scrolled" : ""}`}>
      <Brand />
      <button
        ref={menuToggleRef}
        className={`menu-toggle${isMenuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="landing-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={`landing-menu${isMenuOpen ? " is-open" : ""}`}
        id="landing-navigation"
        aria-label="Main navigation"
      >
        <Link className="nav-link" to="/#about" onClick={closeMenu}>About</Link>
        <Link className="nav-link" to="/#services" onClick={closeMenu}>Services</Link>
        <div className={`nav-dropdown${isExploreOpen ? " is-open" : ""}`}>
          <button
            ref={exploreToggleRef}
            className={`nav-link nav-dropdown-trigger${isExploreActive ? " active" : ""}`}
            type="button"
            aria-expanded={isExploreOpen}
            aria-controls="explore-submenu"
            onClick={() => setIsExploreOpen((open) => !open)}
          >
            What we do <span className="nav-dropdown-caret" aria-hidden="true" />
          </button>
          <div className="nav-dropdown-menu" id="explore-submenu">
            {pageLinks.map((item) => (
              <NavLink className="nav-link" to={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        {/* <Link className="nav-link" to="/#leadership" onClick={closeMenu}>Team</Link> */}
        <Link className="button button-small" to="/#contact" onClick={closeMenu}>
          Talk to our Team
        </Link>
      </nav>
    </header>
  );
}
