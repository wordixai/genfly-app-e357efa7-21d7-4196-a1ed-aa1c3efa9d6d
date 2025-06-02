export default function FeaturesSection() {
  const features = [
    {
      title: "Idea to Reality in Minutes",
      description: "Our AI turns your product requirements into beautiful, professional designs in minutes.",
      image: "https://framerusercontent.com/images/64hfUGNuxUfqHugBD4UTWJGrQ.png"
    },
    {
      title: "Design through Conversation",
      description: "No design skills? No problem! Just describe your vision in natural language to create and refine designs.",
      image: "https://framerusercontent.com/images/QGxBUwxWWJySVV2vTWyW4jfW9uU.png"
    },
    {
      title: "Ready-to-Use Code",
      description: "Deploy faster. Get production-ready front-end interface code, perfectly aligned with your designs.",
      image: "https://framerusercontent.com/images/uJqvV3bLnzuLOhsetdj9RllsisU.png"
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-poppins text-xl font-medium text-[rgb(12,12,13)] mb-4">
                  <strong>{feature.title}</strong>
                </h3>
                <p className="font-manrope text-lg text-[rgb(51,51,51)] leading-relaxed tracking-wide">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}