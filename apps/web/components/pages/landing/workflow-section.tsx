"use client";

const workflowSteps = [
  {
    number: "01",
    title: "Commit",
    description:
      "Push your code to any git provider. We detect changes instantly.",
  },
  {
    number: "02",
    title: "Synthesize",
    description:
      "Our engine optimizes build layers and containerizes assets.",
  },
  {
    number: "03",
    title: "Validate",
    description:
      "Heuristic testing and security scanning run in parallel.",
  },
  {
    number: "04",
    title: "Ship",
    description:
      "Production traffic shifts globally with sub-millisecond downtime.",
  },
];

export function WorkflowSection() {
  return (
    <section className="py-24 px-[var(--margin-mobile,16px)] md:px-[var(--margin-desktop,32px)] bg-[#0c0f0f]">
      <div className="max-w-[var(--container-max,1440px)] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-white mb-4">
            From Concept to PR
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#d7c2bf] mx-auto max-w-xl">
            A seamless workflow designed for high-performance engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center p-6 border border-white/5 bg-black hover:border-[#FFB4AC]/40 transition-colors rounded-lg"
            >
              {index < workflowSteps.length - 1 && (
                <div className="hidden md:block absolute left-full top-1/2 h-[1px] w-8 bg-white/20 -translate-y-1/2"></div>
              )}
              <div className="w-12 h-12 flex items-center justify-center border border-[#FFB4AC] text-[#FFB4AC] font-bold mb-6 rounded-lg">
                {step.number}
              </div>
              <h4 className="text-[14px] font-medium leading-[20px] tracking-[0.02em] text-white uppercase tracking-wider mb-2">
                {step.title}
              </h4>
              <p className="text-[14px] font-normal leading-[20px] text-[#d7c2bf]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}