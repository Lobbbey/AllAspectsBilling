export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Responsive 2x2 Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Top-Left Card (Image + Text) */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 h-48 bg-gray-300 rounded-lg flex-shrink-0"></div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-prussian-blue">
                Background
              </h3>
              {/* <h4 className="text-lg text-gray-500 mb-2">Subheading</h4> */}
              <p className="text-gray-700 text-sm">
                Over 30 years combined expierience with medical billing and
                collections. We have on staff certified coders and certified
                medical billers. Our staff is HIIPA trained and compliant.
              </p>
            </div>
          </div>

          {/* 2. Top-Right Card (Image Only) */}
          <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center">
            <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
          </div>

          {/* 3. Bottom-Left Card (Image Only) */}
          <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center">
            <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
          </div>

          {/* 4. Bottom-Right Card (Text + Image) */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-prussian-blue">Experience</h3>
              {/* <h4 className="text-lg text-gray-500 mb-2">Subheading</h4> */}
              <p className="text-gray-700 text-sm">
                ASC, Workers Comp, Auto, IOP,residential, hospital psych,
                hospital detox, IP, outpatient, ABA, Medical outpatient and
                chiropractic claim submission.
              </p>
            </div>
            <div className="w-full md:w-1/3 h-48 bg-gray-300 rounded-lg flex-shrink-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
