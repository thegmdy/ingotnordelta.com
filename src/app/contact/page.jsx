import { useForm } from "react-hook-form";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

  const onSubmit = async (data) => {
    setFormStatus("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setFormStatus("success");
    reset();
  };

  // Coordinates for Nordelta, Buenos Aires (approx)
  const position = { lat: -34.4224, lng: -58.6445 };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative bg-slate-900 px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Get in touch
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Our team is available 24/7 to discuss your security needs.
                  Reach out to us for a confidential consultation.
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-slate-300">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <MapPin
                        className="h-7 w-6 text-slate-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      Ingōt Nordelta
                      <br />
                      Av del, Calle del Caminante 20
                      <br />
                      1670 Buenos Aires, Argentina
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <Phone
                        className="h-7 w-6 text-slate-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a className="hover:text-white" href="tel:+541112345678">
                        +54 11 1234-5678
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <Mail
                        className="h-7 w-6 text-slate-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-white"
                        href="mailto:security@ingotnordelta.com"
                      >
                        security@ingotnordelta.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-slate-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="first-name"
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                      {errors.firstName && (
                        <span className="text-red-600 text-sm">
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-slate-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="last-name"
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                      {errors.lastName && (
                        <span className="text-red-600 text-sm">
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-slate-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                      {errors.email && (
                        <span className="text-red-600 text-sm">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-slate-900"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        rows={4}
                        {...register("message", {
                          required: "Message is required",
                        })}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                      {errors.message && (
                        <span className="text-red-600 text-sm">
                          {errors.message.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="rounded-md bg-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 disabled:opacity-50"
                  >
                    {formStatus === "submitting"
                      ? "Sending..."
                      : "Send message"}
                  </button>
                </div>
                {formStatus === "success" && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
                    Message sent successfully. We will contact you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
          {/* Map Section */}
          <div className="h-96 w-full bg-slate-200">
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <Map
                defaultCenter={position}
                defaultZoom={14}
                mapId="DEMO_MAP_ID"
                className="w-full h-full"
              >
                <AdvancedMarker position={position} />
              </Map>
            </APIProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
