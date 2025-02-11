import { useState } from "react";
import { ArrowRight, Code2, Boxes, Zap } from "lucide-react";
import Navbar from "../components/Navbar";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Visual Programming Made{" "}
              <span className="text-primary">Simple</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Create programs visually using drag-and-drop blocks. Perfect for
              learning programming concepts in an interactive and engaging way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                className="group inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started
                <ArrowRight 
                  className={`ml-2 transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`} 
                  size={20} 
                />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose BlocklyCode?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Visual Programming",
                description:
                  "Drag and drop blocks to create programs without typing code.",
              },
              {
                icon: Boxes,
                title: "Multiple Languages",
                description:
                  "Generate code in PHP, JavaScript, and Python as you build.",
              },
              {
                icon: Zap,
                title: "Real-time Preview",
                description:
                  "See your code come to life instantly as you connect blocks.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Coding?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of learners who are discovering the joy of programming
            through BlocklyCode.
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Create Your First Project
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;