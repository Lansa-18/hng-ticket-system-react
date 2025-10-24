import { ClipboardList, Clock, BarChart3, Shield } from "lucide-react";

const features = [
  {
    title: "Easy Ticket Management",
    description:
      "Create, update, and track support tickets with an intuitive interface",
    icon: ClipboardList,
  },
  {
    title: "Real-time Updates",
    description: "Stay informed with instant notifications and status changes",
    icon: Clock,
  },
  {
    title: "Detailed Analytics",
    description:
      "Get insights into your support performance with comprehensive statistics",
    icon: BarChart3,
  },
  {
    title: "Secure & Reliable",
    description:
      "Your data is protected with enterprise-grade security measures",
    icon: Shield,
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything you need to manage support
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
