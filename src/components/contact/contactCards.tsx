import {contact_list} from "../../constant/contact_list.ts"

export default function ContactCard(){
  return(
    <section id="contacts" className=" bg-gray-100 py-24">
        <div className="container mx-auto px-4 text-center">
          {/* Contact Title */}
          <h2 className="text-4xl text-left font-bold text-prussian-blue">How to get in touch with us.</h2>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {contact_list.map((contact, index) => (
              /* Card Styling */
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >

                {/* Name */}
                <h3 className="text-lg font-bold text-prussian-blue mt-4">
                  {contact.name}
                </h3>

                {/* Email */}
                <p className="text-sm text-gray-600 mt-2">
                  {contact.email}
                </p>

              </div>
            ))}

          </div>
        </div>
    </section>
  );
}
