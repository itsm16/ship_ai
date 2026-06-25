"use client";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Developer",
    price: "$0",
    period: "/forever",
    description: "",
    features: [
      "5 Monthly Deployments",
      "Basic CI/CD Pipeline",
      "Public Repositories",
    ],
    cta: "Start Free",
  },
  {
    name: "Scale",
    price: "$79",
    period: "/month",
    description: "Most Popular",
    features: [
      "Unlimited Deployments",
      "Priority Build Queue",
      "Advanced Analytics",
      "24/7 Slack Support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "",
    features: [
      "Dedicated Clusters",
      "On-Premise Options",
      "Strategic Account Manager",
    ],
    cta: "Contact Sales",
  },
];

export function PricingSection() {
  return (
    <section className="py-24 px-[var(--margin-mobile,16px)] md:px-[var(--margin-desktop,32px)]">
      <div className="max-w-[var(--container-max,1440px)] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-white mb-4">
            Pricing
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#d7c2bf]">
            Scalable plans for teams of any size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`border p-10 flex flex-col bg-black group hover:border-white/40 transition-colors rounded-lg relative ${
                tier.highlighted
                  ? "border-[#FFB4AC]"
                  : "border-white/10"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-0 bg-[#FFB4AC] text-black px-3 py-1 font-bold text-[10px] uppercase tracking-tighter">
                  Most Popular
                </div>
              )}

              <h3
                className={`text-[14px] font-medium leading-[20px] tracking-[0.02em] uppercase tracking-widest mb-2 ${
                  tier.highlighted ? "text-[#FFB4AC]" : "text-white"
                }`}
              >
                {tier.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-white">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-[#d7c2bf] text-[14px] font-medium leading-[20px] tracking-[0.02em]">
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[14px] font-normal leading-[20px]"
                  >
                    <span
                      className="material-symbols-outlined text-[#FFB4AC]"
                      style={{ fontSize: 18 }}
                    >
                      check
                    </span>
                    <span
                      className={
                        tier.highlighted
                          ? "text-white"
                          : "text-[#d7c2bf]"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 font-bold transition-all rounded-lg ${
                  tier.highlighted
                    ? "bg-[#FFB4AC] text-black active:scale-[0.98]"
                    : "border border-white/20 text-white group-hover:border-[#FFB4AC] group-hover:text-[#FFB4AC]"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}