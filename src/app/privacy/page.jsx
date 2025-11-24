export default function PrivacyPage() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-slate-700">
        <p className="text-base font-semibold leading-7 text-amber-600">
          Last updated: January 1, 2025
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-xl leading-8">
          Your privacy is critically important to us. At Ingōtnordelta, we have
          a few fundamental principles:
        </p>
        <ul role="list" className="mt-8 max-w-xl space-y-8 text-slate-600">
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-slate-900">
                Information Collection.
              </strong>{" "}
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent.
            </span>
          </li>
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-slate-900">
                Data Sharing.
              </strong>{" "}
              We don't share your personal information with anyone except to
              comply with the law, develop our products, or protect our rights.
            </span>
          </li>
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-slate-900">Storage.</strong>{" "}
              We don't store personal information on our servers unless required
              for the on-going operation of one of our services.
            </span>
          </li>
        </ul>
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900">
          Contact Us
        </h2>
        <p className="mt-6">
          If you have any questions about our Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:legal@ingotnordelta.com"
            className="text-amber-600 hover:text-amber-500"
          >
            legal@ingotnordelta.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
