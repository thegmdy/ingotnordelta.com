import { Shield, Video, Users, Truck, FileText, Bell } from "lucide-react";

const services = [
  {
    name: "Manned Guarding",
    description:
      "Elite security personnel for static and mobile protection. Our guards are rigorously trained in conflict resolution, emergency response, and customer service.",
    icon: Shield,
  },
  {
    name: "Electronic Security Systems",
    description:
      "State-of-the-art surveillance, access control, and intrusion detection systems designed to monitor and protect your premises 24/7.",
    icon: Video,
  },
  {
    name: "Executive Protection",
    description:
      "Discreet close protection services for high-net-worth individuals, executives, and their families, ensuring safety during travel and public appearances.",
    icon: Users,
  },
  {
    name: "Secure Transportation",
    description:
      "Armored vehicle transport for valuable assets and personnel, managed by experienced drivers and security escorts.",
    icon: Truck,
  },
  {
    name: "Security Consulting & Audits",
    description:
      "Comprehensive risk assessments and security audits to identify vulnerabilities and recommend strategic improvements.",
    icon: FileText,
  },
  {
    name: "24/7 Monitoring & Response",
    description:
      "A dedicated command center that monitors alarms and coordinates rapid response teams to address incidents immediately.",
    icon: Bell,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600">
            Our Expertise
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tailored Security Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We offer a full spectrum of security services designed to meet the
            unique needs of our corporate and private clients.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <service.icon
                    className="h-5 w-5 flex-none text-amber-600"
                    aria-hidden="true"
                  />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
