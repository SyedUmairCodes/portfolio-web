import Image from "next/image";
import ClientImage from "@/public/assets/images/client.png";
export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-secondary sm:text-2xl sm:leading-9">
            <p>
              “Delivers all requirements on schedule and sometimes even earlier,
              also explains how every thing works and fits together very well.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              src={ClientImage}
              alt="Emoji of the client"
              className="align-center mx-auto size-[100px]"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-medium text-white">
                Aasim Khan - SafeGenZs
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
