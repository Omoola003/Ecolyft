"use client";

import Image from "next/image";

export default function PartnerImageSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Half */}
        <div className="relative h-64 sm:h-80 md:h-[300px]">
          <Image
            src="/images/imageheader-left.png"
            alt="Eco partnership left"
            fill
            className="object-cover-center"
            priority
          />
        </div>

        {/* Right Half */}
        <div className="relative h-64 sm:h-80 md:h-[300px]">
          <Image
            src="/images/imageheader-right.png"
            alt="Eco partnership right"
            fill
            className="object-cover-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
