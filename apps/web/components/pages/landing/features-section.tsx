"use client";

const features = [
  {
    icon: "bolt",
    title: "Zero-Latency Builds",
    description:
      "Our distributed caching layer ensures your builds start in milliseconds, not minutes. Incremental updates are pushed directly to the edge.",
    size: "large" as const,
    hasGraphic: true,
  },
  {
    icon: "security",
    title: "Fortified Security",
    description:
      "SOC2 Type II, HIPAA, and GDPR compliance baked into every deployment pipeline by default.",
    size: "small" as const,
  },
  {
    icon: "hub",
    title: "Multi-Cloud Mesh",
    description:
      "Deploy across AWS, GCP, and Azure simultaneously with a single command.",
    size: "small" as const,
  },
  {
    icon: "monitoring",
    title: "Hyper-Scale Monitoring",
    description:
      "Real-time observability into billions of requests with automated anomaly detection and self-healing rollbacks.",
    size: "large" as const,
    hasChart: true,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-[var(--margin-mobile,16px)] md:px-[var(--margin-desktop,32px)] border-t border-white/10">
      <div className="max-w-[var(--container-max,1440px)] mx-auto">
        <div className="mb-16">
          <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-white mb-4">
            Engineered for Velocity
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#d7c2bf] max-w-2xl">
            Traditional tools were built for a different era. SHIP_AI is
            architected for the sheer scale and speed of modern AI applications.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`col-span-12 ${
                feature.size === "large" ? "md:col-span-8" : "md:col-span-4"
              } border border-white/10 p-8 group hover:border-[#FFB4AC]/60 transition-colors rounded-lg ${
                feature.hasChart ? "flex flex-col md:flex-row gap-8 items-center" : ""
              }`}
            >
              {/* Large feature with image graphic */}
              {feature.hasGraphic && (
                <div className="h-48 mb-6 overflow-hidden bg-[#080808] flex items-center justify-center rounded-lg">
                  <div className="relative w-full h-full">
                    <div className="w-full h-full bg-gradient-to-br from-[#FFB4AC]/5 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        width="200"
                        height="120"
                        viewBox="0 0 200 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-40"
                      >
                        <path
                          d="M10 60 L60 20 L100 80 L140 30 L190 70"
                          stroke="#FFB4AC"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                        />
                        <circle cx="60" cy="20" r="4" fill="#FFB4AC" />
                        <circle cx="100" cy="80" r="4" fill="#FFB4AC" />
                        <circle cx="140" cy="30" r="4" fill="#FFB4AC" />
                        <path
                          d="M20 90 L50 70 L80 100 L110 60 L140 95 L170 50 L190 75"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                </div>
              )}

              <span
                className="material-symbols-outlined text-[#FFB4AC] mb-4 inline-block"
                style={{ fontSize: 32 }}
              >
                {feature.icon}
              </span>

              <div className={feature.hasChart ? "flex-1" : ""}>
                <h3 className="text-[24px] font-semibold leading-[32px] text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[16px] font-normal leading-[24px] text-[#d7c2bf]">
                  {feature.description}
                </p>
              </div>

              {/* Chart graphic for last feature */}
              {feature.hasChart && (
                <div className="w-full md:w-64 h-32 bg-[#0c0c0c] border border-white/5 flex items-end px-4 overflow-hidden rounded-lg">
                  {[30, 45, 35, 70, 25, 100, 85].map((height, i) => (
                    <div
                      key={i}
                      className={`flex-1 mx-0.5 transition-all duration-500 ${
                        i === 5
                          ? "bg-[#FFB4AC]"
                          : i === 6
                            ? "bg-[#FFB4AC]/80"
                            : "bg-[#FFB4AC]/20"
                      }`}
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}