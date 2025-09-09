import { service_list } from "../constant/service_list";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Titles */}
        <h2 className="text-4xl text-left font-bold text-prussian-blue">Services We Offer</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {service_list.map((service, index) => (
            // The Card
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <Image
                src={`/services/${service.icon}`}
                alt={`${service.name} icon`}
                width={64}
                height={64}
                className="h-16 w-16"
              />
              {/* Service Name */}
              <h3 className="text-lg font-bold text-prussian-blue mt-4">
                {service.name}
              </h3>
              {/* Service Description */}
              <p className="text-sm text-gray-600 mt-2">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
