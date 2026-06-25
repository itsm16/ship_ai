"use client";

export function CtaSection() {
  return (
    <section className="py-24 px-[var(--margin-mobile,16px)] md:px-[var(--margin-desktop,32px)]">
      <div className="max-w-[var(--container-max,1440px)] mx-auto border border-[#FFB4AC] p-16 text-center relative overflow-hidden rounded-lg">
        <div className="relative z-10">
          <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-white mb-6">
            Stop waiting. Start shipping.
          </h2>
          <p className="text-[18px] font-normal leading-[28px] text-[#d7c2bf] mb-10 max-w-xl mx-auto">
            Join 10,000+ developers engineering the future on SHIP_AI.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-[#FFB4AC] text-black px-12 py-4 font-bold active:scale-95 transition-transform rounded-lg">
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}