import Terminal from "../terminal/Terminal";

export default function RetroComputer() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] animate-[float_6s_ease-in-out_infinite]">
      {/* Glow behind computer */}
      <div className="absolute inset-x-10 top-10 h-72 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Whole computer */}
      <div className="relative">
        {/* Monitor body */}
        <div className="relative mx-auto w-full rounded-[2rem] border border-slate-700 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-600 p-5 shadow-2xl shadow-cyan-950/50">
          {/* Top plastic highlight */}
          <div className="pointer-events-none absolute inset-x-8 top-3 h-3 rounded-full bg-white/25 blur-sm" />

          {/* Inner monitor bevel */}
          <div className="rounded-[1.5rem] border border-slate-700 bg-gradient-to-br from-slate-800 via-slate-900 to-black p-4 shadow-inner">
            {/* Screen frame */}
            <div className="relative overflow-hidden rounded-2xl border-4 border-slate-950 bg-black p-3 shadow-inner shadow-black">
              {/* CRT glass effects */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]" />
              <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:100%_4px]" />
              <div className="pointer-events-none absolute inset-0 z-20 rounded-xl ring-1 ring-cyan-300/20" />
              <div className="pointer-events-none absolute inset-0 z-30 animate-[crtFlicker_3s_infinite] bg-cyan-300/5" />

              {/* Terminal screen */}
              <div className="relative z-10 h-[420px] rounded-xl bg-[#020617] shadow-[inset_0_0_35px_rgba(34,211,238,0.16)] md:h-[500px]">
                <Terminal embedded compact />
              </div>
            </div>

            {/* Monitor labels/buttons */}
            <div className="mt-4 flex items-center justify-between px-2">
              <div>
                <p className="text-xs font-bold tracking-[0.35em] text-slate-400">
                  AMINCI LAB TERMINAL
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Robotics · Vision · ML · Control
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                <div className="h-5 w-5 rounded-full border-2 border-slate-600 bg-slate-900" />
                <div className="h-5 w-5 rounded-full border-2 border-slate-600 bg-slate-900" />
              </div>
            </div>
          </div>

          {/* Lower monitor chin */}
          <div className="mx-auto mt-5 h-5 w-2/3 rounded-b-2xl bg-slate-700/80 shadow-inner" />
        </div>

        {/* Neck / stand */}
        <div className="mx-auto h-10 w-28 bg-gradient-to-b from-slate-500 to-slate-700 shadow-lg" />

        {/* Computer base */}
        <div className="relative mx-auto w-[92%] rounded-b-[2rem] rounded-t-xl border border-slate-700 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-700 p-5 shadow-2xl shadow-black/40">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            {/* Keyboard */}
            <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 shadow-inner">
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 48 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-3 rounded-[3px] bg-slate-600 shadow-sm shadow-black md:h-4"
                  />
                ))}
              </div>

              <div className="mx-auto mt-2 h-3 w-1/2 rounded-[3px] bg-slate-600 md:h-4" />
            </div>

            {/* Disk drive / badge */}
            <div className="hidden min-w-32 rounded-xl border border-slate-700 bg-slate-800 p-3 md:block">
              <div className="h-4 rounded-sm bg-black" />
              <p className="mt-3 text-center text-[10px] font-bold tracking-[0.25em] text-slate-400">
                PORTFOLIO OS
              </p>
            </div>
          </div>
        </div>

        {/* Desk shadow */}
        <div className="mx-auto mt-6 h-8 w-4/5 rounded-full bg-black/40 blur-xl" />
      </div>
    </div>
  );
}