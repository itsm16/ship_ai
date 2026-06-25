"use client";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-[var(--margin-mobile,16px)] md:px-[var(--margin-desktop,32px)]">
      <div className="max-w-[var(--container-max,1440px)] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 border border-[#FFB4AC]/40 bg-[#FFB4AC]/5 px-3 py-1 text-[#FFB4AC]">
            <span className="material-symbols-outlined text-[14px]">terminal</span>
            <span className="text-[12px] font-medium leading-[20px] tracking-[0.02em] uppercase tracking-widest font-bold">
              Terminal v4.2.0-Alpha
            </span>
          </div>

          <h1 className="text-[48px] md:text-[64px] font-bold leading-[56px] md:leading-[72px] tracking-[-0.02em] md:tracking-[-0.04em] text-white max-w-xl">
            Build fast.{" "}
            <br />
            <span className="text-[#FFB4AC]">Deploy faster.</span>
          </h1>

          <p className="text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[28px] text-[#d7c2bf] max-w-lg leading-relaxed">
            The world&apos;s most aggressive CI/CD engine for AI-native
            engineering teams. Strip away the noise and ship code at the speed
            of thought.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#FFB4AC] text-black px-10 py-4 text-[14px] font-medium leading-[20px] tracking-[0.02em] font-bold text-lg active:scale-95 transition-all rounded-lg">
              Start Building Free
            </button>
            <button className="border border-white/20 hover:border-white text-white px-10 py-4 text-[14px] font-medium leading-[20px] tracking-[0.02em] font-bold text-lg active:scale-95 transition-all rounded-lg">
              View Architecture
            </button>
          </div>
        </div>

        {/* Terminal Mockup */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-[#FFB4AC]/20 blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black border border-white/10 overflow-hidden shadow-2xl rounded-lg">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#0c0c0c]">
              <div className="w-3 h-3 rounded-full bg-white/10"></div>
              <div className="w-3 h-3 rounded-full bg-white/10"></div>
              <div className="w-3 h-3 rounded-full bg-white/10"></div>
              <span className="ml-4 text-[13px] font-normal leading-[18px] text-white/40">
                ship-ai &mdash; deploy &mdash; --production
              </span>
            </div>
            <div className="p-6 text-[13px] font-normal leading-[18px] leading-relaxed min-h-[320px] font-mono">
              <div className="text-white/40 mb-2">
                $ ship deploy --cluster=east-1
              </div>
              <div className="text-[#FFB4AC] mb-1">
                ✔ Analyzing local environment...
              </div>
              <div className="text-[#FFB4AC] mb-1">
                ✔ Resolving dependencies...
              </div>
              <div className="text-[#FFB4AC] mb-4">
                ✔ Architecting deployment graph...
              </div>
              <div className="space-y-1 mb-4">
                <div className="flex justify-between w-full text-white">
                  <span>Compiling core logic</span>
                  <span>[85%]</span>
                </div>
                <div className="w-full bg-white/5 h-1">
                  <div className="bg-[#FFB4AC] h-full w-[85%]"></div>
                </div>
              </div>
              <div className="text-white/60">
                <span className="text-[#FFB4AC] font-bold">INFO:</span> Cluster
                node 04-B online.
                <br />
                <span className="text-[#FFB4AC] font-bold">SUCCESS:</span>{" "}
                Production build verified in 1.84s.
                <br />
                <span className="text-white">Waiting for input</span>
                <span className="inline-block w-2 h-[18px] bg-[#FFB4AC] animate-pulse ml-1 align-middle"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}