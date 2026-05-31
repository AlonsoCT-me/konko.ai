'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';

export function TalkToKoraSection() {
  const { t } = useTranslation();

  const chatMessages = [
    { from: 'user', text: t('Hi, I want to schedule an appointment with Dr. García') },
    { from: 'kora', text: t('Hello! Sure, I can help you. What is your availability this week?') },
    { from: 'user', text: t('Tuesday or Wednesday afternoon') },
    { from: 'kora', text: t('Perfect! I have Tuesday the 14th at 3:30 PM or Wednesday the 15th at 4:00 PM available. Which do you prefer?') },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-700">
              <MessageCircle className="h-4 w-4" />
              {t('Native WhatsApp')}
            </div>
            <h2 className="text-3xl font-bold leading-tight text-neutral-950 lg:text-5xl">
              {t('Talk to Kora!')}
              <br />
              <span className="text-neutral-400">{t('A clinical assistant you could offer your patients')}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-500">
              {t('Kora responds 24/7 on WhatsApp, understands medical context, and schedules appointments like your best receptionist — but without interruptions and without errors.')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" variant="default" asChild>
                <Link href="#demo">
                  <MessageCircle className="h-4 w-4" />
                  {t('Try Kora now')}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-neutral-950 p-1">
              <div className="overflow-hidden rounded-2xl bg-[#0B141A]">
                <div className="flex items-center gap-3 bg-[#1F2C34] px-4 py-3">
                  <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Kora"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t('Kora · Clínica García')}</p>
                    <p className="text-xs text-green-400">{t('online')}</p>
                  </div>
                </div>

                <div className="min-h-[280px] space-y-3 p-4">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={
                          msg.from === 'user'
                            ? 'max-w-[75%] rounded-2xl rounded-tr-sm bg-[#005C4B] px-3 py-2 text-xs leading-relaxed text-white'
                            : 'max-w-[75%] rounded-2xl rounded-tl-sm bg-[#1F2C34] px-3 py-2 text-xs leading-relaxed text-white'
                        }
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F2C34]">
                      <div className="flex gap-0.5">
                        {[0, 0.15, 0.3].map((delay, i) => (
                          <span key={i} className="h-1 w-1 animate-bounce rounded-full bg-neutral-400" style={{ animationDelay: `${delay}s` }} />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500">{t('Kora is typing...')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#1F2C34] px-4 py-3">
                  <div className="flex-1 rounded-full bg-[#2A3942] px-4 py-2">
                    <span className="text-xs text-neutral-500">{t('Write a message...')}</span>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A884]">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 flex items-center gap-2 rounded-2xl bg-brand-gold p-3 shadow-gold">
              <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-sm font-semibold text-white">{t('WhatsApp')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
