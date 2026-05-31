"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type CountUpProps = {
  end: number;
  suffix?: string;
  decimals?: number;
  delay?: number;
  duration?: number;
};

function CountUp({
  end,
  suffix = "",
  decimals = 0,
  delay = 0,
  duration = 900,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frameId: number;
    let startTime: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout>;

    timeoutId = setTimeout(() => {
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;

        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setValue(end * easedProgress);

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        }
      };

      frameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [started, end, delay, duration]);

  const formattedValue = value.toLocaleString("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      {formattedValue}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 120000,
    suffix: "+",
    label: "Scheduled appointments",
  },
  {
    value: 30,
    suffix: " sec",
    label: "Average response time",
  },
  {
    value: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Uptime / Availability",
  },
  {
    value: 9,
    suffix: "/10",
    label: "Patient NPS",
  },
];

export function MetricsSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[url('/images/bg-graphic-stats-mobile.png')] bg-cover bg-bottom bg-no-repeat md:bg-[url('/images/bg-graphic-stats-desktop.png')]" />

      <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl flex-col justify-center px-8 py-20 md:min-h-[760px] md:px-20 lg:py-28">
        <div className="max-w-[720px]">
          <p className="text-[48px] font-semibold leading-[58px] text-brand-black md:text-[128px] md:leading-[155px]">
            <CountUp end={2000000} duration={1100} />
          </p>

          <p className="mt-2 max-w-[520px] text-base font-normal leading-5 text-neutral-500 md:text-[28px] md:leading-[35px]">
            {t("patient interactions managed by Kora")}
          </p>
        </div>

        <div className="mb-20 mt-20 grid max-w-[620px] grid-cols-1 gap-y-10 md:mb-24 md:mt-24 md:grid-cols-2 md:gap-x-20 md:gap-y-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-8">
              <span className="bg-brand-granade h-12 w-[3px] shrink-0" />

              <div>
                <p className="text-[40px] font-medium leading-[48px] text-brand-black">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    delay={index * 90}
                  />
                </p>

                <p className="mt-2 text-[20px] font-normal leading-[25px] text-neutral-500">
                  {t(stat.label)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
