
import { Server, Cpu, Shield } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "5.99",
    ram: "2GB",
    storage: "20GB SSD",
    features: ["1 vCPU Core", "Unlimited Players", "24/7 Support", "Instant Setup"],
    icon: Server,
  },
  {
    name: "Premium",
    price: "12.99",
    ram: "4GB",
    storage: "50GB SSD",
    features: ["2 vCPU Cores", "Unlimited Players", "24/7 Priority Support", "DDoS Protection"],
    icon: Cpu,
    popular: true,
  },
  {
    name: "Ultimate",
    price: "24.99",
    ram: "8GB",
    storage: "100GB SSD",
    features: ["4 vCPU Cores", "Unlimited Players", "24/7 Priority Support", "Enterprise Protection"],
    icon: Shield,
  },
];

const PricingPlans = () => {
  return (
    <div className="py-24 bg-dark" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your Minecraft server. All plans include our premium features and 24/7 support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-dark-light border-2 border-primary"
                    : "bg-dark-light/50 border border-white/10"
                } backdrop-blur-lg hover:transform hover:-translate-y-1 transition-all duration-300`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-dark text-sm font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <Icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-6">
                  ${plan.price}
                  <span className="text-lg text-gray-400 font-normal">/mo</span>
                </div>
                <div className="mb-6">
                  <div className="text-xl font-semibold text-white mb-2">{plan.ram} RAM</div>
                  <div className="text-gray-400">{plan.storage}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-gray-300 flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-hover text-dark"
                      : "bg-dark-lighter hover:bg-dark text-white border border-white/10"
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
