
import { Server, Cpu } from "lucide-react";

const plans = [
  {
    name: "Tier 1",
    price: "1.99",
    ram: "1GB",
    cpu: "i5 CPU",
    features: ["Instant Setup", "24/7 Support", "DDoS Protection", "Control Panel"],
    icon: Server,
    patreonLink: "https://www.patreon.com/checkout/enzonic_com?rid=25112263"
  },
  {
    name: "Tier 2",
    price: "2.99",
    ram: "4GB",
    cpu: "i5 CPU",
    features: ["Instant Setup", "24/7 Support", "DDoS Protection", "Control Panel"],
    icon: Cpu,
    patreonLink: "https://www.patreon.com/checkout/enzonic_com?rid=25112270"
  },
  {
    name: "Tier 3",
    price: "4.99",
    ram: "6GB",
    cpu: "i5 CPU",
    features: ["Instant Setup", "24/7 Support", "DDoS Protection", "Control Panel"],
    icon: Server,
    patreonLink: "https://www.patreon.com/checkout/enzonic_com?rid=25112277"
  },
  {
    name: "Tier 4",
    price: "5.99",
    ram: "8GB",
    cpu: "i5 CPU",
    features: ["Instant Setup", "24/7 Support", "DDoS Protection", "Control Panel"],
    icon: Cpu,
    popular: true,
    patreonLink: "https://www.patreon.com/checkout/enzonic_com?rid=25112280"
  },
  {
    name: "Tier 5",
    price: "8.99",
    ram: "10GB",
    cpu: "i5 CPU",
    features: ["Instant Setup", "24/7 Support", "DDoS Protection", "Control Panel"],
    icon: Server,
    patreonLink: "https://www.patreon.com/checkout/enzonic_com?rid=25112287"
  },
  {
    name: "Tier 6",
    price: "10.99",
    ram: "12GB",
    cpu: "i5 CPU",
    features: ["Instant Setup", "24/7 Support", "DDoS Protection", "Control Panel"],
    icon: Cpu,
    patreonLink: "https://www.patreon.com/checkout/enzonic_com?rid=25112289"
  }
];

const PricingPlans = () => {
  return (
    <div className="py-24 bg-dark" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Server</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect Minecraft server plan for your needs. All plans include premium features and 24/7 support.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                  <div className="text-gray-400">{plan.cpu}</div>
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
                <a
                  href={plan.patreonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-block text-center ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-hover text-dark"
                      : "bg-dark-lighter hover:bg-dark text-white border border-white/10"
                  }`}
                >
                  Select Plan
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
