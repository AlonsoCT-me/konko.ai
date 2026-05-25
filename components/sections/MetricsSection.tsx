'use client';

import { useLocale } from '@/lib/locale-context';
import s from './styles/MetricsSection.module.css';

export function MetricsSection() {
  const { t } = useLocale();
  const section = t.metrics;
  const stats = [section.stats.consultations, section.stats.responseTime, section.stats.satisfaction, section.stats.nps];

  return (
    <section className={s.metricsSection}>
      <div className={s.metricsContainer}>
        <div className={s.metricsGrid}>
          <div>
            <p className={s.heroValue}>{section.heroValue}</p>
            <p className={s.heroLabel}>{section.heroLabel}</p>
          </div>

          <div className={s.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i}>
                <div className={s.statDivider} />
                <p className={s.statValue}>{stat.value}</p>
                <p className={s.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={s.progressWrap}>
          <div className={s.progressBar} style={{ width: '78%' }} />
        </div>
      </div>
    </section>
  );
}
