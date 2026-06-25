"use client";

const faqs = [
  {
    question: "How does the billing work for dynamic clusters?",
    answer:
      "We bill based on compute seconds utilized and total data egress. You only pay for what you actually use during your build and deployment cycles.",
  },
  {
    question: "Can I deploy stateful applications?",
    answer:
      "Yes. SHIP_AI supports persistent volume claims and seamless database orchestration across all supported cloud providers.",
  },
  {
    question: "What CI tools do you integrate with?",
    answer:
      "While we offer a native engine, we provide first-class CLI support for GitHub Actions, GitLab CI, and CircleCI for hybrid workflows.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 px-[var(--margin-mobile,16px)] md:px-[var(--margin-desktop,32px)] border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-white/10 p-6 bg-[#0c0f0f] rounded-lg"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-[18px] font-normal leading-[28px] text-white">
                  {faq.question}
                </span>
                <span className="material-symbols-outlined text-[#FFB4AC] group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-[16px] font-normal leading-[24px] text-[#d7c2bf] leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}