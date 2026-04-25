/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Check, Sparkles, Clock, Calendar, Infinity, ExternalLink, Globe, Github } from "lucide-react";
import { translations, type Language } from "../i18n";

const Navbar = ({ lang, setLang, t, navigate }: { lang: Language; setLang: (lang: Language) => void; t: typeof translations.en; navigate: any }) => (
  <nav className="sticky top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-md border-b border-black/5">
    <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <Link to="/" className="text-2xl font-black tracking-tighter text-[#191c1e]">RRdis</Link>
      <div className="hidden md:flex items-center gap-8">
        <a className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" href="/#features">{t.nav.features}</a>
        <a className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" href="/#demo">{t.nav.demo}</a>
        <a className="text-[#191c1e]/70 hover:text-[#0040e0] font-medium transition-colors" href="/#tech">{t.nav.tech}</a>
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
        <a href="/#download" className="hero-gradient text-white px-6 py-2.5 rounded-lg font-semibold active:scale-95 duration-200 transition-all shadow-md" onClick={(e) => { e.preventDefault(); navigate('/versions'); }}>
          {t.nav.download}
        </a>
      </div>
    </div>
  </nav>
);

const PricingCard = ({
  icon: Icon,
  title,
  price,
  period,
  features,
  badge,
  highlight = false
}: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-white p-8 rounded-3xl shadow-sm border transition-all duration-300 ${
        highlight
          ? 'border-[#0040e0] shadow-xl shadow-primary/10'
          : 'border-black/[0.03] hover:shadow-xl hover:border-black/[0.08]'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0040e0] to-[#2e5bff] text-white text-sm font-bold shadow-lg">
          {badge}
        </div>
      )}

      <div className={`w-16 h-16 rounded-2xl ${highlight ? 'bg-[#0040e0]' : 'bg-[#eceef0]'} flex items-center justify-center mb-6 mx-auto`}>
        <Icon size={32} className={highlight ? 'text-white' : 'text-[#0040e0]'} />
      </div>

      <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>

      <div className="text-center mb-6">
        <span className="text-5xl font-black text-[#0040e0]">¥{price}</span>
        <span className="text-[#434656] ml-2">/ {period}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <Check size={20} className="text-[#0040e0] flex-shrink-0 mt-0.5" />
            <span className="text-[#434656]">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function Purchase() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'zh') ? saved : 'en';
  });
  const t = translations[lang];
  const navigate = useNavigate();

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  const pricingPlans = [
    {
      icon: Sparkles,
      title: t.purchase.newUser,
      price: "0.5",
      period: t.purchase.week,
      badge: t.purchase.newUserBadge,
      features: [
        t.purchase.features.fullAccess,
        t.purchase.features.days7,
        t.purchase.features.support,
        t.purchase.features.updates
      ],
      highlight: false
    },
    {
      icon: Clock,
      title: t.purchase.quarterly,
      price: "9.9",
      period: t.purchase.months3,
      features: [
        t.purchase.features.fullAccess,
        t.purchase.features.days90,
        t.purchase.features.prioritySupport,
        t.purchase.features.updates
      ],
      highlight: false
    },
    {
      icon: Calendar,
      title: t.purchase.yearly,
      price: "39.9",
      period: t.purchase.year,
      badge: t.purchase.bestValue,
      features: [
        t.purchase.features.fullAccess,
        t.purchase.features.days365,
        t.purchase.features.prioritySupport,
        t.purchase.features.updates,
        t.purchase.features.dedicatedService
      ],
      highlight: true
    },
    {
      icon: Infinity,
      title: t.purchase.lifetime,
      price: "299",
      period: t.purchase.forever,
      features: [
        t.purchase.features.fullAccess,
        t.purchase.features.lifetimeAccess,
        t.purchase.features.lifetimeSupport,
        t.purchase.features.lifetimeUpdates,
        t.purchase.features.dedicatedService,
        t.purchase.features.earlyAccess
      ],
      highlight: false
    }
  ];

  const handlePurchase = () => {
    window.open('https://m.tb.cn/h.iuZtD49?tk=qZca5jF7Cqv', '_blank');
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20">
      <Navbar lang={lang} setLang={handleSetLang} t={t} navigate={navigate} />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#dde1ff] text-[#001356] text-sm font-semibold tracking-wide mb-8"
            >
              🎉 {t.purchase.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold text-[#191c1e] tracking-tight leading-[1.05] mb-6 max-w-4xl mx-auto"
            >
              {t.purchase.title}<span className="text-[#0040e0]">{t.purchase.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#434656] max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              {t.purchase.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-8 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>

            {/* Purchase Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <button
                onClick={handlePurchase}
                className="hero-gradient text-white px-12 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl active:scale-95 hover:shadow-primary/30 transition-all mx-auto"
              >
                <ShoppingCart size={24} />
                {t.purchase.buyButton}
                <ExternalLink size={20} />
              </button>
              <p className="text-[#434656] mt-4 text-sm">
                {t.purchase.buyHint}
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">{t.purchase.faq.title}</h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-black/[0.03]"
              >
                <h3 className="text-xl font-bold mb-3">{t.purchase.faq.q1.question}</h3>
                <p className="text-[#434656] leading-relaxed">
                  {t.purchase.faq.q1.answer}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-black/[0.03]"
              >
                <h3 className="text-xl font-bold mb-3">{t.purchase.faq.q2.question}</h3>
                <p className="text-[#434656] leading-relaxed">
                  {t.purchase.faq.q2.answer}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-black/[0.03]"
              >
                <h3 className="text-xl font-bold mb-3">{t.purchase.faq.q3.question}</h3>
                <p className="text-[#434656] leading-relaxed">
                  {t.purchase.faq.q3.answer}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-black/[0.03]"
              >
                <h3 className="text-xl font-bold mb-3">{t.purchase.faq.q4.question}</h3>
                <p className="text-[#434656] leading-relaxed">
                  {t.purchase.faq.q4.answer}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-8 bg-[#f7f9fb] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <Link to="/" className="text-2xl font-black text-[#191c1e]">RRdis</Link>
            <div className="flex gap-8">
              <a href="/#features" className="text-[#191c1e]/60 hover:text-[#0040e0] font-medium transition-colors cursor-pointer">
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
