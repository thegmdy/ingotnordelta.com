import { Shield, Globe, Lock, Users, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')]"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Uncompromising Security for a Complex World
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Ingōtnordelta provides elite protection services for corporations
              and high-net-worth individuals. Headquartered in Argentina,
              operating globally.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
              >
                Secure Your Assets
              </a>
              <a
                href="/services"
                className="text-sm font-semibold leading-6 text-white flex items-center gap-1"
              >
                Our Services <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-600">
              Why Ingōtnordelta?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Comprehensive Protection Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We blend traditional security measures with cutting-edge
              technology to ensure complete peace of mind.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                    <Shield
                      className="h-6 w-6 text-amber-500"
                      aria-hidden="true"
                    />
                  </div>
                  Executive Protection
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  Highly trained agents providing discreet and effective
                  protection for executives and VIPs.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                    <Lock
                      className="h-6 w-6 text-amber-500"
                      aria-hidden="true"
                    />
                  </div>
                  Asset Security
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  Secure transportation and storage of high-value assets using
                  armored vehicles and state-of-the-art vaults.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                    <Globe
                      className="h-6 w-6 text-amber-500"
                      aria-hidden="true"
                    />
                  </div>
                  Global Intelligence
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  Real-time threat analysis and risk assessment to navigate
                  complex geopolitical environments.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                    <Users
                      className="h-6 w-6 text-amber-500"
                      aria-hidden="true"
                    />
                  </div>
                  Corporate Consulting
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  Security audits, crisis management planning, and employee
                  training programs.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to elevate your security?
              <br />
              Contact our experts today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Don't leave safety to chance. Partner with Ingōtnordelta for a
              secure future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a
                href="/about"
                className="text-sm font-semibold leading-6 text-white flex items-center gap-1"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
