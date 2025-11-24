import { Shield, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-slate-950 text-white border-t border-slate-800"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold tracking-tighter uppercase">
                Ingōt<span className="text-amber-500">nordelta</span>
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-300 max-w-sm">
              Providing elite security solutions for corporate and
              high-net-worth individuals in Argentina and beyond.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-amber-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="/services"
                      className="text-sm leading-6 text-slate-300 hover:text-white"
                    >
                      Manned Guarding
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-sm leading-6 text-slate-300 hover:text-white"
                    >
                      Electronic Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-sm leading-6 text-slate-300 hover:text-white"
                    >
                      Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-sm leading-6 text-slate-300 hover:text-white"
                    >
                      Asset Protection
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="/about"
                      className="text-sm leading-6 text-slate-300 hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="text-sm leading-6 text-slate-300 hover:text-white"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="text-sm leading-6 text-slate-300 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-sm leading-6 text-slate-300 hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="/privacy"
                      className="text-sm leading-6 text-slate-300 hover:text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-sm leading-6 text-slate-300 hover:text-white"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Headquarters
                </h3>
                <address className="mt-6 text-sm leading-6 text-slate-300 not-italic">
                  Ingōt Nordelta
                  <br />
                  Av del, Calle del Caminante 20
                  <br />
                  1670 Buenos Aires, Argentina
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-400">
            &copy; 2025 Ingōtnordelta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
