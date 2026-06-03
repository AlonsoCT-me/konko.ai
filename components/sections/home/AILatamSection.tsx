"use client";

import { useTranslation } from "react-i18next";

export function AILatamSection() {
  const { t } = useTranslation();

  return (
    <section data-navbar-theme="dark" className="w-full bg-white md:py-16">
      <div className="relative w-full overflow-hidden bg-[url('/images/bg-IA-section.jpg')] bg-cover bg-center bg-no-repeat after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:z-[1] after:h-[42vh] after:w-[42vh] after:bg-[url('/images/world.svg')] after:bg-contain after:bg-no-repeat after:[background-position:right_bottom] after:content-[''] md:after:bottom-0 md:after:right-0 md:after:top-0 md:after:h-[430px] md:after:w-[230px]">
        {/* overlay oscuro */}
        <div className="absolute inset-0 z-0 bg-neutral-950/15" />

        {/* contenido alineado con RevolutionSection */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 min-h-screen md:flex md:min-h-[380px] md:flex-col md:justify-center md:py-0 lg:min-h-[400px] lg:px-8">
          <div className="max-w-[680px] md:max-w-[720px]">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-brand-gold lg:text-[48px] lg:leading-[1.05]">
              {t("AI for clinics in Latam")}
            </h2>

            <p className="mt-7 text-lg leading-relaxed tracking-[-0.01em] text-white md:mt-5 lg:text-[22px] lg:leading-[1.4]">
              {t(
                "Kora is not a generic AI, it was trained with millions of conversations to understand clinical complexity.",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
