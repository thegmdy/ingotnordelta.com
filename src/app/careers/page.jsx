import { Briefcase, MapPin, Clock } from "lucide-react";

const positions = [
  {
    id: 1,
    title: "Executive Protection Agent",
    location: "Buenos Aires, Argentina",
    type: "Full-time",
    description:
      "We are seeking experienced close protection agents with a background in law enforcement or military service. Must be fluent in English and Spanish.",
  },
  {
    id: 2,
    title: "Security Systems Engineer",
    location: "Buenos Aires, Argentina",
    type: "Full-time",
    description:
      "Responsible for designing and implementing advanced electronic security systems for corporate clients. Experience with IP cameras and access control required.",
  },
  {
    id: 3,
    title: "Intelligence Analyst",
    location: "Remote / Hybrid",
    type: "Contract",
    description:
      "Analyze global security trends and provide real-time risk assessments for our international operations.",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600">
            Join Our Team
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Careers at Ingōtnordelta
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Be part of an elite team dedicated to protecting what matters most.
            We offer competitive compensation, ongoing training, and
            opportunities for advancement.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="space-y-8">
            {positions.map((position) => (
              <div
                key={position.id}
                className="rounded-2xl bg-white p-8 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-x-4 text-xs">
                  <time dateTime="2025-01-01" className="text-slate-500">
                    Posted recently
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-200"
                  >
                    {position.type}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {position.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                    {position.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {position.type}
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="text-amber-600 font-semibold hover:text-amber-500 text-sm"
                  >
                    Apply for this position &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
