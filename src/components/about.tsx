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
              <h3 className="text-2xl font-bold text-prussian-blue">Heading</h3>
              <h4 className="text-lg text-gray-500 mb-2">Subheading</h4>
              <p className="text-gray-700 text-sm">
                Body text for your whole article or post. Well put in some lorem
                ipsum to show how a filled-out page might look. Excepteur
                efficient emerging, minim veniam enim aute carefully curated.
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
              <h3 className="text-2xl font-bold text-prussian-blue">Heading</h3>
              <h4 className="text-lg text-gray-500 mb-2">Subheading</h4>
              <p className="text-gray-700 text-sm">
                Body text for your whole article or post. Well put in some lorem
                ipsum to show how a filled-out page might look. Excepteur
                efficient emerging, minim veniam enim aute carefully curated.
              </p>
            </div>
            <div className="w-full md:w-1/3 h-48 bg-gray-300 rounded-lg flex-shrink-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
