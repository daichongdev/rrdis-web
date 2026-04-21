/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";
import {
  Download,
  Star,
  Terminal,
  Database,
  Zap,
  Layout,
  Palette,
  Languages as LanguagesIcon,
  Monitor,
  Users,
  Heart,
  ChevronRight,
  ExternalLink,
  Github,
  Globe
} from "lucide-react";
import { translations, type Language } from "./i18n";

const Navbar = ({ lang, setLang, t }: { lang: Language; setLang: (lang: Language) => void; t: typeof translations.en }) => (
  <nav className="sticky top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-md border-b border-black/5">
    <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-black tracking-tighter text-[#191c1e]">RRdis</div>
      <div className="hidden md:flex items-center gap-8">
        <a className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" href="#features">{t.nav.features}</a>
        <a className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" href="#demo">{t.nav.demo}</a>
        <a className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" href="#tech">{t.nav.tech}</a>
        <a className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" href="#docs">{t.nav.docs}</a>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors px-3 py-2 rounded-lg hover:bg-black/5"
        >
          <Globe size={18} />
          {lang === 'en' ? '中文' : 'EN'}
        </button>
        <button className="hero-gradient text-white px-6 py-2.5 rounded-lg font-semibold active:scale-95 duration-200 transition-all shadow-md">
          {t.nav.download}
        </button>
      </div>
    </div>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, description, className = "", iconBg = "bg-primary/10", iconColor = "text-primary" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white p-8 rounded-3xl shadow-sm border border-black/[0.03] hover:shadow-xl hover:border-black/[0.08] transition-all duration-300 ${className}`}
  >
    <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-6`}>
      <Icon size={24} className={iconColor} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-[#434656] leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20">
      <Navbar lang={lang} setLang={setLang} t={t} />

      <main>
        {/* --- Hero Section --- */}
        <section className="relative pt-20 pb-32 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#dde1ff] text-[#001356] text-sm font-semibold tracking-wide mb-8"
            >
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-[#191c1e] tracking-tight leading-[1.05] mb-8 max-w-4xl mx-auto text-balance"
            >
              {t.hero.title}<span className="text-[#0040e0]">{t.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#434656] max-w-2xl mx-auto mb-12 leading-relaxed text-balance"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
            >
              <a href="pkg/RRdis_1.0.0_aarch64.dmg" download className="hero-gradient text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl active:scale-95 hover:shadow-primary/30 transition-all">
                <Download size={20} />
                {t.hero.downloadMac}
              </a>
              <a href="https://github.com/daichongdev/rrdis-web" target="_blank" rel="noopener noreferrer" className="bg-white text-[#191c1e] border border-black/5 hover:bg-black/5 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-all">
                <Github size={20} />
                {t.hero.starGithub}
              </a>
            </motion.div>

            {/* --- Hero Image --- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative max-w-6xl mx-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0040e0] to-[#2e5bff] blur-[120px] opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-2 md:p-3 overflow-hidden border border-black/5">
                <img
                  alt="RRdis Interface"
                  className="rounded-xl w-full"
                  src="assets/1.png"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Features Grid --- */}
        <section className="py-24 px-8 bg-[#f2f4f6]" id="features">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">{t.features.title}</h2>
              <p className="text-[#434656] text-lg max-w-xl">{t.features.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={Layout}
                title={t.features.multiTab.title}
                description={t.features.multiTab.desc}
                className="lg:col-span-1"
              />
              <FeatureCard
                icon={Database}
                title={t.features.dataSupport.title}
                description={t.features.dataSupport.desc}
                iconBg="bg-orange-100"
                iconColor="text-orange-600"
              />
              <FeatureCard
                icon={Zap}
                title={t.features.fast.title}
                description={t.features.fast.desc}
                iconBg="bg-blue-100"
                iconColor="text-blue-600"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-[#2d3133] p-10 rounded-3xl shadow-xl flex flex-col md:flex-row gap-8 items-center text-white"
              >
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white">
                    <Terminal size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{t.features.cli.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {t.features.cli.desc}
                  </p>
                  <button className="flex items-center gap-2 text-[#0040e0] font-bold hover:underline">
                    {t.features.cli.learnMore} <ChevronRight size={16} />
                  </button>
                </div>
                <div className="flex-2 font-mono text-sm bg-black/40 p-6 rounded-2xl w-full border border-white/5">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#ba1a1a]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffb4aa]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#0040e0]"></div>
                  </div>
                  <p className="text-emerald-400">$ redis-cli</p>
                  <p className="text-white/60 mb-1">&gt; GET user:1024</p>
                  <p className="text-sky-300">"Alice Freeman"</p>
                </div>
              </motion.div>

              <FeatureCard
                icon={LanguagesIcon}
                title={t.features.multiLang.title}
                description={t.features.multiLang.desc}
                iconBg="bg-indigo-100"
                iconColor="text-indigo-600"
              />
              <FeatureCard
                icon={Palette}
                title={t.features.modernUI.title}
                description={t.features.modernUI.desc}
                iconBg="bg-purple-100"
                iconColor="text-purple-600"
              />
            </div>
          </div>
        </section>

        {/* --- Workflow Section --- */}
        <section className="py-32 px-8 overflow-hidden" id="demo">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black mb-12 tracking-tight text-balance"
                >
                  {t.workflow.title}
                </motion.h2>

                <div className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#0040e0] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/20">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{t.workflow.step1.title}</h4>
                      <p className="text-[#434656] leading-relaxed">{t.workflow.step1.desc}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#eceef0] text-[#0040e0] flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{t.workflow.step2.title}</h4>
                      <p className="text-[#434656] leading-relaxed">{t.workflow.step2.desc}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 relative">
                <div className="space-y-4 lg:pt-16">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-3xl shadow-2xl border border-black/5"
                    referrerPolicy="no-referrer"
                    src="assets/5.png"
                  />
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-3xl shadow-2xl border border-black/5"
                    referrerPolicy="no-referrer"
                    src="assets/3.png"
                  />
                </div>
                <div className="space-y-4">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="rounded-3xl shadow-2xl border border-black/5"
                    referrerPolicy="no-referrer"
                    src="assets/4.png"
                  />

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Tech Stack --- */}
        <section className="py-24 px-8 bg-white border-y border-black/5" id="tech">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-sm font-bold text-[#0040e0] tracking-widest uppercase mb-16">{t.tech.title}</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              <TechIcon color="bg-[#61dafb]" label="React 19" />
              <TechIcon color="bg-[#3178c6]" label="TypeScript" />
              <TechIcon color="bg-[#dea584]" label="Rust" />
              <TechIcon color="bg-[#24c8db]" label="Tauri 2" />
            </div>
          </div>
        </section>

        {/* --- Download Section --- */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t.download.title}</h2>
            <p className="text-xl text-[#434656] mb-16">{t.download.subtitle}</p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <DownloadCard
                icon={Monitor}
                platform={t.download.macOS}
                details={t.download.macDetails}
                version="v1.0 .dmg"
                downloadUrl="pkg/RRdis_1.0.0_aarch64.dmg"
                primary
              />
              <DownloadCard
                icon={Monitor}
                platform={t.download.windows}
                details={t.download.winDetails}
                version="v1.0 .msi"
                downloadUrl="pkg/RRdis_1.0.0_x64.msi"
              />
              <DownloadCard
                icon={Terminal}
                platform={t.download.linux}
                details={t.download.linuxDetails}
                version={t.download.comingSoon}
              />
            </div>
          </div>
        </section>

        {/* --- Open Source Section --- */}
        <section className="py-24 px-8 bg-[#191c1e] text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-5 translate-x-1/4 translate-y-1/4">
            <Star size={400} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black mb-6 tracking-tight">{t.openSource.title}</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-10">
                {t.openSource.desc}
              </p>
              <div className="flex flex-wrap gap-6">
                <a className="flex items-center gap-3 text-lg font-bold hover:text-[#0040e0] transition-colors" href="#">
                  <Users size={24} /> {t.openSource.community}
                </a>
                <a className="flex items-center gap-3 text-lg font-bold hover:text-[#0040e0] transition-colors" href="#">
                  <Heart size={24} /> {t.openSource.donate}
                </a>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/10 text-center min-w-[280px]"
            >
              <h3 className="text-6xl font-black mb-2 text-[#0040e0]">3</h3>
              <p className="text-sm uppercase tracking-[0.2em] font-bold text-white/50">{t.openSource.stars}</p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="w-full py-16 px-8 bg-[#f7f9fb] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-2xl font-black text-[#191c1e]">RRdis</div>
            <div className="flex gap-8">
              <a className="text-[#191c1e]/60 hover:text-[#0040e0] font-medium transition-colors cursor-pointer">
                {t.footer.features}
              </a>
              <a className="text-[#191c1e]/60 hover:text-[#0040e0] font-medium transition-colors cursor-pointer">
                {t.footer.privacy}
              </a>
              <a className="text-[#191c1e]/60 hover:text-[#0040e0] font-medium transition-colors cursor-pointer">
                {t.footer.terms}
              </a>
              <a className="text-[#191c1e]/60 hover:text-[#0040e0] font-medium transition-colors cursor-pointer">
                {t.footer.support}
              </a>
              <a href="https://github.com/daichongdev/rrdis-web" target="_blank" rel="noopener noreferrer" className="text-[#191c1e]/60 hover:text-[#0040e0] font-medium transition-colors cursor-pointer">
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

const TechIcon = ({ color, label }: any) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="flex items-center gap-4 group cursor-default"
  >
    <div className={`w-12 h-12 ${color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform`} />
    <span className="font-extrabold text-2xl text-[#191c1e]/40 group-hover:text-[#191c1e] transition-colors">{label}</span>
  </motion.div>
);

const DownloadCard = ({ icon: Icon, platform, details, version, downloadUrl, primary }: any) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-sm hover:shadow-2xl transition-all"
  >
    <div className="w-20 h-20 bg-[#eceef0] rounded-3xl flex items-center justify-center mx-auto mb-8 text-[#191c1e]">
      <Icon size={32} />
    </div>
    <h4 className="text-2xl font-bold mb-2">{platform}</h4>
    <p className="text-[#434656] text-sm mb-10">{details}</p>
    <a
      href={downloadUrl}
      download
      className={`w-full py-4 rounded-xl font-bold transition-all block text-center ${primary
        ? "hero-gradient text-white shadow-lg shadow-primary/30"
        : "bg-[#f2f4f6] text-[#191c1e] hover:bg-[#eceef0]"
        }`}>
      {version}
    </a>
  </motion.div>
);

