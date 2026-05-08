'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Most businesses are fully configured and running within 5 to 7 business days from payment.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees on any plan. You pay the monthly rate and we handle everything from day one.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Monthly contracts with 30 days notice required. No long-term lock-ins and no cancellation penalties.",
  },
  {
    question: "What platforms do you automate?",
    answer: "Instagram, TikTok, Facebook, LinkedIn, YouTube, X, Pinterest, WhatsApp, SMS, email, and voice agents.",
  },
  {
    question: "Do I need to provide content or do you create it?",
    answer: "We create all content. You approve the first month and then the system runs automatically from that point forward.",
  },
  {
    question: "What makes this different from hiring a VA?",
    answer: "A VA works 8 hours a day and handles one task at a time. Corteron runs 24 hours a day across every business function simultaneously without sick days or holidays.",
  },
]

export function PricingFAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(faqs.length).fill(false)
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(new Array(faqs.length).fill(true))
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef}>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-0 rounded-xl overflow-hidden"
            style={{
              background: '#0D0D1F',
              border: '1px solid rgba(255,255,255,0.05)',
              opacity: visibleItems[index] ? 1 : 0,
              transform: visibleItems[index] ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.4s ease ${index * 0.08}s, transform 0.4s ease ${index * 0.08}s`,
            }}
          >
            <AccordionTrigger
              className="px-6 py-5 text-[16px] font-medium text-white hover:no-underline hover:text-white flex items-center justify-between [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#4F46E5] [&>svg]:transition-transform [&>svg]:duration-300"
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 pt-0">
              <p
                className="text-[15px] text-[#9CA3AF]"
                style={{ lineHeight: 1.8 }}
              >
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
