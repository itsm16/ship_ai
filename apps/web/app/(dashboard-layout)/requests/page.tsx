"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function RequestsPage() {
  const requests = [
    {
      id: "SF-4092",
      title: "Predictive Port Congestion AI",
      description:
        "Implement a real-time machine learning model to predict dwell times at major global hubs based on historical throughput and current labor trends.",
      priority: "critical",
      createdAt: "2 days ago",
      avatarGroup: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAtj6xBh8ulfvQEMGyZS-q_rOuvgjpd2pIPS5zc7flMlhr85Ofhviz2Oheo9RC_Ycsxzexjnnqhe0U3c5as5gzhwUKvem5X_u32W9QOQyjJdoFI2ScCrhak1C09J_cn1uplrzQOgKrNlI4qem1DzatBbHwREzRi8D-9pM_L9Y-W-gPO050cvHWZB5IiQMHC9B5wO3ndeiTGklPzD3RHIWs_ib9ndTaRGAMDxRVffy5JpK1H1cMCFM5FtA-bKOimmXbYX741LCOESN4",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAYpQltgpTw0aj4oepykkjf1gl9zqJ0LwSSW1_Hr2B1oXw-xnb_1Eru5bGUBoQ99mzMrkiYnsvMTdRziZ_EkA4vM-dAAgXUpXp6OonthkySb9wkPCL4f7whNR1i_4WgiLODTWv0-zvLGQgRfv0SzDCFHLl8YcJUbwakobgWltfwowu0zBnorfDT6QVxNpBi-hwZBLnokzLR85HWDCdDIA9_SqpozvXskcfF63gkUyDxoihcONA8l1A3fM3XRTjSZeEMu4rt9bHlUxc",
        "+12",
      ],
    },
    {
      id: "SF-3981",
      title: "Multi-Cloud Cold Storage Integration",
      description:
        "Integrate legacy database archival with S3 and Azure Blob storage for multi-region redundancy in the logistics audit logs.",
      priority: "high",
      createdAt: "1 week ago",
      avatarGroup: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJRTO9vVHX4_Q5S3Rz82R3oY_05BIBvZU5qNgYCRVDDSa2AarAXzXbtV9UMOfvgEbC5cG7VUXmvq6nbyqacPW9CzgBvZQqL84P_Gisyc8KH9pJn4Vvr5eOZcfPHX-WxUOKBj6rCv4pvc6Qs03il4reKdnJJDizD3mBNoUBFScwrfkZKwJK3vTEcVyh5OTgc-rQ2lJnfilWjRmIOIjK1W0lhJWvi0dFIAIVWRCpwgoKVmKuSh_N9pOMPF6XBDr-rdTPCtRrBe7pAVY",
        "+4",
      ],
    },
    {
      id: "SF-3822",
      title: "Dark Mode Mobile Parity",
      description:
        "Ensure all crimson brand accents are consistent across Android and iOS deployments for high-contrast visibility.",
      priority: "low",
      createdAt: "Completed",
      avatarGroup: [],
    },
  ];

  const [filter, setFilter] = useState<
    "All" | "Discovery" | "Planning" | "In Development" | "Completed"
  >("All");

  const tabs = ["All", "Discovery", "Planning", "In Development", "Completed"] as const;

  const filteredRequests = requests;

  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black flex justify-between items-center h-16 w-full px-[var(--margin-desktop,48px)]">
        <div className="flex items-center gap-lg flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#d7c2bf] text-sm">search</span>
            <input
              className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:border-[#ffb4ac] focus:ring-1 focus:ring-[#ffb4ac] transition-all outline-none text-white placeholder:text-[#d7c2bf]"
              placeholder="Search feature requests..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-md">
          <button className="material-symbols-outlined p-2 text-[#d7c2bf] hover:bg-[#1a1c1e] rounded-full transition-all">notifications</button>
          <button className="material-symbols-outlined p-2 text-[#d7c2bf] hover:bg-[#1a1c1e] rounded-full transition-all">apps</button>
        </div>
      </header>

      <div className="flex-1 overflow-auto">
        <div className="p-[var(--margin-desktop,48px)] flex gap-[var(--gutter,24px)]">
          <div className="flex-grow max-w-[calc(100%-360px)]">
            <div className="flex justify-between items-end mb-xl">
              <div>
                <h2 className="text-[40px] font-semibold leading-[48px] tracking-tight text-white">Feature Requests</h2>
                <p className="text-[#d7c2bf] mt-1">
                  Manage and prioritize global logistics engine enhancements.
                </p>
              </div>
              <button className="bg-[#FFB4AC] text-black font-medium text-sm px-6 py-3 rounded-lg flex items-center gap-sm hover:opacity-90 active:scale-95 transition-all">
                <span className="material-symbols-outlined">add</span>
                New Request
              </button>
            </div>

            <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)} className="mb-lg">
              <TabsList className="!bg-transparent !p-0 !h-auto border-b border-white/10 gap-6 w-full justify-start rounded-none">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="!bg-transparent !border-0 !shadow-none px-0 pb-2 pt-0 text-sm data-[state=active]:text-[#ffb4ac] data-[state=active]:border-b-2 data-[state=active]:border-[#ffb4ac] rounded-none text-white hover:text-[#ffb4ac] transition-all !ring-0 !outline-none"
                  >
                    {tab === "All" ? "All Requests" : tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="space-y-md">
              {filteredRequests.map((req) => (
                <div
                  key={req.id}
                  className="group relative bg-black border border-white/10 p-6 rounded-lg hover:border-[#ffb4ac] transition-all hover:bg-[#0c0e10]"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ffb4ac] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-semibold text-[#ffb4ac] mb-1 block">{req.id}</span>
                      <h3 className="text-lg font-medium text-white">{req.title}</h3>
                      <p className="text-[#d7c2bf] text-sm mt-1 max-w-2xl">{req.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-sm">
                      <span
                        className={`${
                          req.priority === "critical"
                            ? "bg-[#690005] text-[#FFB4AC]"
                            : req.priority === "high"
                            ? "bg-[#1a1c1e] text-[#d7c2bf]"
                            : "bg-[#1a1c1e] text-[#d7c2bf]"
                        } px-3 py-0.5 rounded-full text-xs font-semibold`}
                      >
                        {req.priority === "critical"
                          ? "Critical Priority"
                          : req.priority === "high"
                          ? "High Priority"
                          : "Low Priority"}
                      </span>
                      <span className="text-[#d7c2bf] text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          {req.createdAt === "Completed" ? "done_all" : "schedule"}
                        </span>
                        {req.createdAt}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-xl">
                    <div className="flex -space-x-2">
                      {req.avatarGroup.map((src, idx) => (
                        typeof src === "string" && src.startsWith("http") ? (
                          <div key={idx} className="w-6 h-6 rounded-full border border-black bg-[#282a2c] overflow-hidden">
                            <img className="w-full h-full object-cover" src={src} alt="avatar" />
                          </div>
                        ) : (
                          <div key={idx} className="w-6 h-6 rounded-full border border-black bg-[#282a2c] flex items-center justify-center text-[10px] text-[#d7c2bf]">
                            {src}
                          </div>
                        )
                      ))}
                    </div>
                    <div className="flex items-center gap-md">
                      <span className="text-[#d7c2bf] text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-[#ffb4ac]">thumb_up</span> 142
                      </span>
                      <span className="text-[#d7c2bf] text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">chat_bubble</span> 24
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="w-80 flex flex-col gap-lg">
            <div className="border border-white/10 rounded-lg p-6 bg-black">
              <div className="flex justify-between items-center mb-md">
                <h4 className="text-sm font-medium text-white">Workspace Velocity</h4>
                <span className="text-[#ffb4ac] text-xs">+12%</span>
              </div>
              <div className="h-24 w-full flex items-end gap-1">
                <div className="bg-[#1a1c1e] w-full h-[40%] rounded-t-sm"></div>
                <div className="bg-[#1a1c1e] w-full h-[60%] rounded-t-sm"></div>
                <div className="bg-[#ffb4ac] w-full h-[80%] rounded-t-sm"></div>
                <div className="bg-[#1a1c1e] w-full h-[50%] rounded-t-sm"></div>
                <div className="bg-[#ffb4ac] w-full h-[90%] rounded-t-sm"></div>
                <div className="bg-[#1a1c1e] w-full h-[70%] rounded-t-sm"></div>
                <div className="bg-[#FFB4AC] w-full h-[95%] rounded-t-sm"></div>
              </div>
              <p className="text-xs text-[#d7c2bf] mt-md">Averaging 14 feature resolutions per sprint.</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 bg-black">
              <h4 className="text-sm font-medium text-white mb-md">Priority Heatmap</h4>
              <div className="grid grid-cols-4 gap-1 h-32">
                <div className="bg-[#690005] rounded-sm"></div>
                <div className="bg-[#93000A] rounded-sm"></div>
                <div className="bg-[#FFB4AC] rounded-sm"></div>
                <div className="bg-black border border-white/10 rounded-sm"></div>
                <div className="bg-[#93000A] rounded-sm"></div>
                <div className="bg-[#690005] rounded-sm"></div>
                <div className="bg-black border border-white/10 rounded-sm"></div>
                <div className="bg-[#93000A] rounded-sm"></div>
                <div className="bg-black border border-white/10 rounded-sm"></div>
                <div className="bg-black border border-white/10 rounded-sm"></div>
                <div className="bg-[#690005] rounded-sm"></div>
                <div className="bg-[#93000A] rounded-sm"></div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-[#d7c2bf] uppercase tracking-widest">
                <span>Low Density</span>
                <span>High Density</span>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6 bg-black">
              <h4 className="text-sm font-medium text-white mb-md">Active Collaborators</h4>
              <div className="space-y-md">
                <div className="flex items-center gap-md">
                  <div className="w-8 h-8 rounded-full border border-[#ffb4ac] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIXlEgCC29imzfRiR8FAMbvbJI0utnoHdlHrRTPZpguYnDKZcdN6ZAfLwAGs_a9EFPVmoowzs6UxJ66Lw-EO-KNoZ4dx76KYzOYlqEy5QBsPLMQFNtS9mviFTCTO9ebvzb-lMT4KTj5AC75Ts1aSS6Vs41dqIW5q9Zkc5AIMp3R_R-Dohv2WcK5tPZcU2JlOqU9qDZHpHpS1EHlEvFY9KT3ZOc4dxB5PlOhCCpAGhv_Lp8MrbXZf_i4WQ5XoSu52aIJJIr35MnV94"
                      alt="Elena Vance"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Elena Vance</p>
                    <p className="text-xs text-[#d7c2bf]">Lead Architect</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#ffb4ac]"></div>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvVcChjtVizMww2Ekk4_fZkEy7TziXit43NZwwpggnNcC_CzhdNPFfh-9xPfOwX5phVcCzEG0OWDGkFYtfwPSU48f6Qx1406WYgPjPwYiSN6AbDmp2oRyJPra6vfCJnHRZv-3o8E7iqYcVD6rCtqVvCxcOGbNBEbtaUxHZt1HHSyzr4uPq7L1ozBJW63nuo4myDqRG3YPlH2Uqobjvw-LlEw_xC9TJrIH6K3ScEhaDl_jKy6UllpFGJZx2Q3UattjizP9I-X9dDX4"
                      alt="Marcus Chen"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Marcus Chen</p>
                    <p className="text-xs text-[#d7c2bf]">Data Scientist</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#1a1c1e]"></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
