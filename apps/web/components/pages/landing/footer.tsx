"use client";

export function Footer() {
  return (
    <footer className="border-t border-white/20 py-16 px-[var(--margin-mobile,16px)] md:px-[var(--margin-desktop,32px)] bg-black">
      <div className="max-w-[var(--container-max,1440px)] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <span className="text-[24px] font-semibold leading-[32px] text-white block mb-6">
            SHIP_AI
          </span>
          <p className="text-[16px] font-normal leading-[24px] text-[#d7c2bf] max-w-sm mb-6">
            Built for the next generation of software engineers who value speed,
            precision, and architectural purity.
          </p>
          <p className="text-[14px] font-medium leading-[20px] tracking-[0.02em] text-white/40 uppercase tracking-widest">
            &copy; 2024 SHIP_AI TERMINAL. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div>
          <h5 className="text-[14px] font-medium leading-[20px] tracking-[0.02em] text-white font-bold mb-6 uppercase tracking-widest">
            Resources
          </h5>
          <ul className="space-y-4">
            {["Documentation", "API Reference", "Status"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[14px] font-medium leading-[20px] tracking-[0.02em] text-[#d7c2bf] hover:text-[#FFB4AC] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-[14px] font-medium leading-[20px] tracking-[0.02em] text-white font-bold mb-6 uppercase tracking-widest">
            Legal
          </h5>
          <ul className="space-y-4">
            {["Security", "Privacy", "Terms of Service"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[14px] font-medium leading-[20px] tracking-[0.02em] text-[#d7c2bf] hover:text-[#FFB4AC] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}