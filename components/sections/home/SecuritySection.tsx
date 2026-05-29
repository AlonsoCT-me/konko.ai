'use client';

import { Shield, Lock, CircleCheck as CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const certIcons = [
  <svg key="soc2" className="h-8 w-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 3l10.5 5.25v9.5C26.5 23.5 21.75 28 16 29 10.25 28 5.5 23.5 5.5 17.75v-9.5L16 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M11 16l3.5 3.5 6.5-6.5" /></svg>,
  <svg key="gdpr" className="h-8 w-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}><rect x="6" y="10" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M10 10V7a6 6 0 0112 0v3" /><circle cx="16" cy="18" r="2" /></svg>,
  <svg key="iso" className="h-8 w-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}><circle cx="16" cy="16" r="11" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 9v7l4 3" /></svg>,
  <svg key="liveness" className="h-8 w-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}><circle cx="16" cy="12" r="5" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 26c0-5.523 4.477-10 10-10s10 4.477 10 10" /></svg>,
  <svg key="hl7" className="h-8 w-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16h6M22 16h6M16 4v6M16 22v6" /><circle cx="16" cy="16" r="5" /></svg>,
  <svg key="fhir" className="h-8 w-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 6h16M8 12h10M8 18h12M8 24h8" /></svg>,
];

export function SecuritySection() {
  const { t } = useTranslation();

  const certs = [
    { name: t('SOC 2'), description: t('Security and availability audit') },
    { name: t('GDPR'), description: t('European data protection compliance') },
    { name: t('ISO 27001'), description: t('Information security management') },
    { name: t('Liveness'), description: t('Real-time identity verification') },
    { name: t('HL7'), description: t('Health interoperability standards') },
    { name: t('HL7 FHIR'), description: t('Modern medical data interoperability') },
  ];

  const bottomItems = [
    { icon: <Lock className="h-5 w-5" />, title: t('End-to-end encryption'), description: t('All conversations are encrypted with AES-256.') },
    { icon: <Shield className="h-5 w-5" />, title: t('No data retention'), description: t('Medical data is never used to train models.') },
    { icon: <CheckCircle className="h-5 w-5" />, title: t('Regular audits'), description: t('Quarterly pentesting by independent firms.') },
  ];

  return (
    <section id="seguridad" className="bg-neutral-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl [background-color:rgba(201,168,76,0.1)]">
            <Shield className="h-7 w-7 text-brand-gold" />
          </div>
          <h2 className="text-3xl font-bold leading-tight text-white lg:text-5xl">
            {t('Security in every conversation')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-neutral-400">
            {t("Your patients' information is protected with the highest industry security standards.")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {certs.map((cert, i) => (
            <div
              key={cert.name}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition-all duration-300 hover:[background-color:rgba(38,38,38,0.5)] hover:border-[rgba(201,168,76,0.3)]"
            >
              <div className="mb-4 text-neutral-400 transition-colors duration-300 group-hover:text-brand-gold">
                {certIcons[i]}
              </div>
              <h3 className="mb-1 text-base font-bold text-white">{cert.name}</h3>
              <p className="text-xs leading-relaxed text-neutral-500">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-neutral-800 bg-neutral-900 p-6 lg:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            {bottomItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-brand-gold [background-color:rgba(201,168,76,0.1)]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-white">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
