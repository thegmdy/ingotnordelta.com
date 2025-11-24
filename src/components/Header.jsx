import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold text-white tracking-tighter uppercase">
                Ingōt<span className="text-amber-500">nordelta</span>
              </span>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold leading-6 text-white hover:text-amber-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden pb-6">
            <div className="space-y-2 px-2 pt-2">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-slate-800 hover:text-amber-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
