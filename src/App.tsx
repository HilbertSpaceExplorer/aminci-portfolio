import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import LanguageToggle from "./components/layout/LanguageToggle";

export default function App() {
  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <LanguageToggle />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>

        <footer className="border-t border-white/10 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Aminci Gana. Built with React, Vite,
          TypeScript, and Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}