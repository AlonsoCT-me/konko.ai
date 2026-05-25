'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale-context';
import s from './styles/TalkToKoraSection.module.css';

export function TalkToKoraSection() {
  const { t } = useLocale();
  const section = t.talkToKora;
  const chat = section.chat;

  const chatMessages = [
    { from: 'user', text: chat.messages.user1 },
    { from: 'kora', text: chat.messages.kora1 },
    { from: 'user', text: chat.messages.user2 },
    { from: 'kora', text: chat.messages.kora2 },
  ];

  return (
    <section className={s.talkSection}>
      <div className={s.talkContainer}>
        <div className={s.talkGrid}>
          <div>
            <div className={s.talkBadge}>
              <MessageCircle className="w-4 h-4" />
              {section.badge}
            </div>
            <h2 className={s.talkHeading}>
              {section.heading.line1}
              <br />
              <span className={s.headingMuted}>{section.heading.line2}</span>
            </h2>
            <p className={s.talkDescription}>{section.description}</p>
            <div className={s.ctas}>
              <Button size="lg" variant="default" asChild>
                <Link href="#demo">
                  <MessageCircle className="w-4 h-4" />
                  {section.cta}
                </Link>
              </Button>
            </div>
          </div>

          <div className={s.phoneCol}>
            <div className={s.phoneWrap}>
              <div className={s.phoneInner}>
                <div className={s.phoneHeader}>
                  <div className={s.phoneHeaderAvatar}>
                    <Image
                      src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Kora"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className={s.phoneHeaderName}>{chat.phoneHeader}</p>
                    <p className={s.phoneHeaderStatus}>{chat.online}</p>
                  </div>
                </div>

                <div className={s.messages}>
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={msg.from === 'user' ? s.bubbleUser : s.bubbleKora}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div className={s.typingRow}>
                    <div className={s.typingBubble}>
                      <div className={s.typingDots}>
                        {[0, 0.15, 0.3].map((delay, i) => (
                          <span key={i} className={s.typingDot} style={{ animationDelay: `${delay}s` }} />
                        ))}
                      </div>
                    </div>
                    <span className={s.typingLabel}>{chat.typing}</span>
                  </div>
                </div>

                <div className={s.phoneFooter}>
                  <div className={s.phoneInputWrap}>
                    <span className={s.phoneInputPlaceholder}>{chat.inputPlaceholder}</span>
                  </div>
                  <div className={s.phoneSend}>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className={s.whatsappBadge}>
              <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className={s.whatsappBadgeText}>{chat.whatsappBadge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
