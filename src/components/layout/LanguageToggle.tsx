import { useLanguage } from "../../i18n/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed right-6 top-6 z-[9999] flex rounded-full border border-cyan-300/30 bg-slate-950/90 p-1 text-sm font-semibold shadow-2xl shadow-cyan-950/50 backdrop-blur">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-4 py-2 transition ${
          language === "en"
            ? "bg-cyan-300 text-slate-950"
            : "text-slate-300 hover:text-white"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("de")}
        className={`rounded-full px-4 py-2 transition ${
          language === "de"
            ? "bg-cyan-300 text-slate-950"
            : "text-slate-300 hover:text-white"
        }`}
      >
        DE
      </button>
    </div>
  );
}