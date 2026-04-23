/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Download, Calendar, ChevronDown, ChevronUp, Monitor, Github, Globe } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { versions } from "../versions";
import { translations, type Language } from "../i18n";

const Navbar = ({ lang, setLang, t }: { lang: Language; setLang: (lang: Language) => void; t: typeof translations.en }) => (
  <nav className="sticky top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-md border-b border-black/5">
    <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <Link to="/" className="text-2xl font-black tracking-tighter text-[#191c1e]">RRdis</Link>
      <div className="hidden md:flex items-center gap-8">
        <Link className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" to="/#features">{t.nav.features}</Link>
        <Link className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" to="/#demo">{t.nav.demo}</Link>
        <Link className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" to="/#tech">{t.nav.tech}</Link>
        <Link className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" to="/versions">{t.nav.versions}</Link>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors px-3 py-2 rounded-lg hover:bg-black/5"
        >
          <Globe size={18} />
          {lang === 'en' ? '中文' : 'EN'}
        </button>
        <Link to="/#download" className="hero-gradient text-white px-6 py-2.5 rounded-lg font-semibold active:scale-95 duration-200 transition-all shadow-md">
          {t.nav.download}
        </Link>
      </div>
    </div>
  </nav>
);

const VersionCard = ({ version, lang, t }: { version: typeof versions[0]; lang: Language; t: typeof translations.en }) => {
  const [expanded, setExpanded] = useState(false);
  const changelog = version.changelog[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl shadow-sm border border-black/[0.03] hover:shadow-xl hover:border-black/[0.08] transition-all duration-300 overflow-hidden"
    >
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-3xl font-bold">v{version.version}</h3>
              {version.isPaid ? (
                <span className="bg-gradient-to-r from-[#0040e0] to-[#2e5bff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t.versions.paid}
                </span>
              ) : (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t.versions.free}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-[#434656]">
              <Calendar size={16} />
              <span className="text-sm">{t.versions.releaseDate}: {version.date}</span>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-[#0040e0] font-semibold hover:underline"
          >
            {t.versions.changelog}
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-6 bg-[#f2f4f6] rounded-2xl p-6"
          >
            <ul className="space-y-2">
              {changelog.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#0040e0] mt-1">•</span>
                  <span className="text-[#434656]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-4">
          {version.downloads.macOS && (
            <DownloadButton
              platform="macOS"
              url={version.downloads.macOS.arm64 || version.downloads.macOS.x64}
              t={t}
            />
          )}
          {version.downloads.windows && (
            <DownloadButton
              platform="Windows"
              url={version.downloads.windows.x64}
              t={t}
            />
          )}
          {version.downloads.linux ? (
            <DownloadButton
              platform="Linux"
              url={version.downloads.linux.x64 || version.downloads.linux.arm64}
              t={t}
            />
          ) : (
            <div className="bg-[#f2f4f6] p-4 rounded-xl text-center text-[#434656] text-sm">
              {t.versions.noDownload}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const DownloadButton = ({ platform, url, t }: { platform: string; url?: string; t: typeof translations.en }) => {
  if (!url) {
    return (
      <div className="bg-[#f2f4f6] p-4 rounded-xl text-center text-[#434656] text-sm">
        {t.versions.noDownload}
      </div>
    );
  }

  return (
    <a
      href={url}
      download
      className="flex items-center justify-center gap-2 bg-[#0040e0] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#0035c0] active:scale-95 transition-all shadow-md"
    >
      <Download size={18} />
      {t.versions.downloadFor} {platform}
    </a>
  );
};

export default function Versions() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 bg-[#f7f9fb]">
      <Navbar lang={lang} setLang={setLang} t={t} />

      <main className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#191c1e] tracking-tight mb-4">
              {t.versions.title}
            </h1>
            <p className="text-xl text-[#434656] max-w-2xl mx-auto">
              {t.versions.subtitle}
            </p>
          </motion.div>

          <div className="space-y-6">
            {versions.map((version, idx) => (
              <VersionCard key={idx} version={version} lang={lang} t={t} />
            ))}
          </div>
        </div>
      </main>

      <footer className="w-full py-16 px-8 bg-white border-t border-black/5 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <Link to="/" className="text-2xl font-black text-[#191c1e]">RRdis</Link>
            <div className="flex gap-8">
              <Link to="/#features" className="text-[#191c1e]/60 hover:text-[#0040e0] font-medium transition-colors">
                {t.footer.features}
              </Link>
              <a className="text-[#191c1e]/60 hover:text-[#0040e0] font-medium transition-colors cursor-pointer">
                {t.footer.privacy}
              </a>
              <a className="text-[#191c1e]/60 hover:text-[#0040e0] font-medium transition-colors cursor-pointer">
                {t.footer.terms}
              </a>
              <a className="text-[#191c1e]/60 hover:text-[#0040e0] font-medium transition-colors cursor-pointer">
                {t.footer.support}
              </a>
              <a href="https://github.com/daichongdev/rrdis-web" target="_blank" rel="noopener noreferrer" className="text-[#191c1e]/60 hover:text-[#0040e0] font-medium transition-colors">
                {t.footer.github}
              </a>
            </div>
          </div>
          <div className="text-center text-[#191c1e]/40 text-sm">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
