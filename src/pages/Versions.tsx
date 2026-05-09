/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Download, Calendar, Globe, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { translations, type Language } from "../i18n";
import { versions, type Version } from "../versions";

const Navbar = ({ lang, setLang, t }: { lang: Language; setLang: (lang: Language) => void; t: typeof translations.en }) => (
  <nav className="sticky top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-md border-b border-black/5">
    <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <Link to="/" className="text-2xl font-black tracking-tighter text-[#191c1e]">RRdis</Link>
      <div className="hidden md:flex items-center gap-8">
        <Link className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" to="/#features">{t.nav.features}</Link>
        <Link className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" to="/#demo">{t.nav.demo}</Link>
        <Link className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" to="/#tech">{t.nav.tech}</Link>
        <Link className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" to="/versions">{t.nav.versions}</Link>
        <Link className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" to="/purchase">{t.nav.purchase}</Link>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors px-3 py-2 rounded-lg hover:bg-black/5"
        >
          <Globe size={18} />
          {lang === 'en' ? 'EN' : '中文'}
        </button>
        <Link to="/#download" className="hero-gradient text-white px-6 py-2.5 rounded-lg font-semibold active:scale-95 duration-200 transition-all shadow-md">
          {t.nav.download}
        </Link>
      </div>
    </div>
  </nav>
);

const VersionCard = ({ version, lang, t }: { version: Version; lang: Language; t: typeof translations.en }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 20;
    const rotateYValue = (centerX - x) / 20;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getSupportedPlatforms = () => {
    const platforms: string[] = [];
    if (version.downloads.macOS) platforms.push('macOS');
    if (version.downloads.windows) platforms.push('Windows');
    if (version.downloads.linux) platforms.push('Linux');
    return platforms;
  };

  const supportedPlatforms = getSupportedPlatforms();
  const downloadUrl = `https://github.com/daichongdev/rrdis-web/releases/tag/v${version.version}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
      className="bg-white rounded-3xl shadow-sm border border-black/[0.03] hover:shadow-2xl hover:border-black/[0.08] transition-all duration-300 overflow-hidden relative group"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0040e0]/5 via-transparent to-[#2e5bff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>

      <div className="p-8 relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-3xl font-bold">v{version.version}</h3>
              {version.isPaid ? (
                <span className="bg-gradient-to-r from-[#0040e0] to-[#2e5bff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t.versions.paid}
                </span>
              ) : (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {lang === 'zh' ? '免费' : 'Free'}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-[#434656] mb-2">
              <Calendar size={16} />
              <span className="text-sm">{t.versions.releaseDate}: {formatDate(version.date)}</span>
            </div>
            {supportedPlatforms.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-[#434656]">{lang === 'zh' ? '支持系统:' : 'Platforms:'}</span>
                {supportedPlatforms.map((platform, idx) => (
                  <span key={idx} className="bg-[#f2f4f6] text-[#434656] px-3 py-1 rounded-lg text-xs font-medium">
                    {platform}
                  </span>
                ))}
              </div>
            )}
          </div>
          <motion.a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-[#0040e0] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0035c0] transition-all shadow-md hover:shadow-xl hover:shadow-primary/30 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <Download size={18} className="relative z-10" />
            <span className="relative z-10">{lang === 'zh' ? '前往下载' : 'Download'}</span>
            <ExternalLink size={16} className="relative z-10" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Versions() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'zh') ? saved : 'en';
  });
  const t = translations[lang];

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 bg-[#f7f9fb] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#0040e0]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#2e5bff]/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <Navbar lang={lang} setLang={handleSetLang} t={t} />

      <main className="py-20 px-8 relative z-10">
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
            <div className="mt-6 space-y-3">
              <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-lg px-6 py-3">
                <p className="text-blue-600 text-sm font-medium">💡 {t.versions.purchaseNotice}</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-6 py-4 max-w-3xl inline-block">
                <p className="text-amber-800 text-sm font-medium leading-relaxed mb-3">
                  {lang === 'zh' ? (
                    <>
                      🍎 <span className="font-semibold">macOS 安装提示：</span>如果提示
                      <span className="text-red-600 font-semibold">「文件已损坏」</span>或
                      <span className="text-red-600 font-semibold">「无法验证开发者」</span>，
                      请打开 <span className="text-blue-600 font-semibold">系统设置</span> →
                      <span className="text-blue-600 font-semibold"> 隐私与安全性</span> →
                      找到并点击<span className="text-green-600 font-semibold">「仍要打开」</span>按钮
                    </>
                  ) : (
                    <>
                      🍎 <span className="font-semibold">macOS Installation:</span> If you see
                      <span className="text-red-600 font-semibold"> "file is damaged"</span> or
                      <span className="text-red-600 font-semibold"> "cannot verify developer"</span>,
                      open <span className="text-blue-600 font-semibold">System Settings</span> →
                      <span className="text-blue-600 font-semibold"> Privacy & Security</span> →
                      find and click <span className="text-green-600 font-semibold">"Open Anyway"</span> button
                    </>
                  )}
                </p>
                <div className="bg-gray-900 rounded-lg px-4 py-3 font-mono text-xs text-green-400">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500 select-none">$</span>
                    <code className="flex-1">sudo xattr -cr /path/to/RRdis.app</code>
                  </div>
                  <p className="text-gray-400 text-[11px] mt-2 ml-4">
                    {lang === 'zh' ? '💡 如果上述方法无效，可在终端执行此命令移除隔离属性' : '💡 If the above method doesn\'t work, run this command in Terminal to remove quarantine attributes'}
                  </p>
                </div>
              </div>
            </div>
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
