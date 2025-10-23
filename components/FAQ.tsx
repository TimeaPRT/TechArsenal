'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: "How do I know if I'm a good candidate for plastic surgery?",
      answer: "Good candidates are in good overall health, have realistic expectations, and are seeking enhancement rather than perfection. During your consultation, we'll evaluate your medical history, discuss your goals, and determine the best approach for your unique situation."
    },
    {
      question: "What should I expect during the consultation process?",
      answer: "Your consultation includes a comprehensive evaluation, discussion of your goals, examination of the treatment area, explanation of procedure options, review of before/after photos, and a detailed treatment plan with pricing. This typically takes 60-90 minutes."
    },
    {
      question: "How long is the recovery period for most procedures?",
      answer: "Recovery varies by procedure. Non-surgical treatments have minimal downtime, while surgical procedures range from 1-2 weeks for facial surgeries to 4-6 weeks for major body contouring. We provide detailed recovery instructions and support throughout your healing process."
    },
    {
      question: "What financing options are available?",
      answer: "We offer various financing options including payment plans, medical credit cards, and partnerships with healthcare financing companies. Our team will work with you to find a solution that fits your budget."
    },
    {
      question: "How do I prepare for my procedure?",
      answer: "Pre-operative instructions vary by procedure but typically include avoiding certain medications, stopping smoking, arranging for post-operative care, and following specific dietary guidelines. We provide a comprehensive pre-operative checklist."
    },
    {
      question: "What makes Elite Aesthetics different from other practices?",
      answer: "Our commitment to natural-looking results, board-certified surgeons, state-of-the-art facility, personalized care, comprehensive aftercare, and 20+ years of combined experience set us apart. We prioritize patient safety and satisfaction above all else."
    },
    {
      question: "Do you offer non-surgical alternatives?",
      answer: "Yes, we offer a full range of non-surgical treatments including Botox, dermal fillers, laser treatments, chemical peels, and advanced skincare. Our team can help determine if non-surgical options can achieve your goals."
    },
    {
      question: "What if I'm not satisfied with my results?",
      answer: "Patient satisfaction is our top priority. We provide detailed pre-operative consultations to ensure realistic expectations. In the rare case of dissatisfaction, we work closely with patients to address concerns and explore appropriate solutions."
    }
  ];

  return (
    <section className="py-24 bg-navy-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Frequently Asked <span className="text-rose-gold">Questions</span>
          </h2>
          <p className="text-xl text-navy-600 leading-relaxed">
            Find answers to common questions about our procedures, process, and what to expect.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-cream-200 rounded-lg px-6 data-[state=open]:border-rose-gold transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-navy-900 font-semibold hover:text-rose-gold transition-colors duration-200 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-navy-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-navy-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <Button 
            className="bg-rose-gold hover:bg-rose-gold/90 text-white px-8 py-4 rounded-full font-semibold text-lg"
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;