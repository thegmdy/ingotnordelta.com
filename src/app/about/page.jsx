import { Shield, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-amber-600">
                  About Ingōtnordelta
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Securing Your World with Integrity and Precision
                </h1>
                <p className="mt-6 text-xl leading-8 text-slate-700">
                  Founded with a vision to redefine security standards in
                  Argentina, Ingōtnordelta has grown into a premier provider of
                  protection services for the corporate elite.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-slate-900 shadow-xl ring-1 ring-slate-400/10 sm:w-[57rem]"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop"
              alt="Security professionals meeting"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-slate-700 lg:max-w-lg">
                <p>
                  Headquartered in the heart of Buenos Aires at Ingōt Nordelta,
                  we operate with a deep understanding of the local landscape
                  while adhering to international security protocols. Our team
                  consists of former law enforcement officers, military
                  veterans, and intelligence analysts who bring decades of
                  experience to every assignment.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-slate-600">
                  <li className="flex gap-x-3">
                    <Shield
                      className="mt-1 h-5 w-5 flex-none text-amber-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Unwavering Protection.
                      </strong>{" "}
                      We believe that security is not just about guards and
                      cameras, but about creating an environment where our
                      clients can thrive without fear.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <Target
                      className="mt-1 h-5 w-5 flex-none text-amber-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Precision Planning.
                      </strong>{" "}
                      Every client is unique. We tailor our strategies to fit
                      your specific lifestyle, business operations, and risk
                      profile.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <Award
                      className="mt-1 h-5 w-5 flex-none text-amber-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Excellence in Service.
                      </strong>{" "}
                      Our commitment to quality is absolute. We continuously
                      train our staff and upgrade our technology to stay ahead
                      of emerging threats.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  At Ingōtnordelta, we don't just provide security; we provide
                  the confidence to live and work freely. Join the many
                  corporations and individuals who trust us with their most
                  valuable assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
