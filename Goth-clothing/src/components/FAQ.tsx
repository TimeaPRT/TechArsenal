import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unworn items with original tags attached. Custom or sale items are final sale. Returns must be in original condition."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is 1-2 business days. International shipping varies by location but typically takes 7-14 business days."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. International shipping costs and delivery times vary by location. Customs fees may apply and are the responsibility of the customer."
    },
    {
      question: "How do I know what size to order?",
      answer: "We provide detailed size charts for each product. If you're between sizes, we recommend sizing up. For specific fit questions, contact our customer service team."
    },
    {
      question: "Are your products ethically made?",
      answer: "Yes, we work with ethical manufacturers who provide fair wages and safe working conditions. All our materials are sourced responsibly and we prioritize quality craftsmanship."
    },
    {
      question: "Do you restock sold-out items?",
      answer: "We regularly restock popular items. Sign up for our newsletter or enable stock notifications on product pages to be notified when items are back in stock."
    },
    {
      question: "How do I care for my gothic clothing?",
      answer: "Follow the care instructions on each garment's label. Generally, we recommend hand washing dark colors in cold water and hanging to dry to maintain color and fabric quality."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After that, orders enter our processing system and cannot be changed. Contact us immediately if you need assistance."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactSupport = () => {
    setShowContactModal(true);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent("Support Request - Goth Clothing");
    const body = encodeURIComponent("Hello, I have a question about...");
    window.location.href = `mailto:support@gothclothing.com?subject=${subject}&body=${body}`;
  };

  const handleSubmitContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setShowContactModal(false);
  };

  return (
    <>
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold text-red-500 mb-4"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              Frequently Asked Questions
            </h2>
            <p 
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Find answers to common questions about our dark fashion collection, shipping, and policies
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-zinc-900 border border-red-900/20 rounded-lg transition-all duration-300 hover:border-red-600/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h3 
                    className="text-lg font-semibold text-red-400 pr-4"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-red-400">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p 
                      className="text-gray-300 leading-relaxed"
                      style={{ fontFamily: 'Crimson Text, serif' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-zinc-900 border border-red-900/30 rounded-lg p-8">
              <h3 
                className="text-2xl font-bold text-red-500 mb-4"
                style={{ fontFamily: 'Creepster, cursive' }}
              >
                Still Have Questions?
              </h3>
              <p 
                className="text-gray-400 mb-6"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Our dark fashion experts are here to help you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleContactSupport}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Contact Support
                </button>
                <button 
                  onClick={handleSendEmail}
                  className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-red-600 rounded-lg max-w-md w-full p-6">
            <h3 
              className="text-2xl font-bold text-red-500 mb-4 text-center"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              Contact Support
            </h3>
            <form onSubmit={handleSubmitContactForm} className="space-y-4">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-red-400 mb-2"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-zinc-800 border border-red-900/30 rounded-lg px-4 py-2 text-white focus:border-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label 
                  htmlFor="email"
                  className="block text-red-400 mb-2"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-zinc-800 border border-red-900/30 rounded-lg px-4 py-2 text-white focus:border-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label 
                  htmlFor="message"
                  className="block text-red-400 mb-2"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-zinc-800 border border-red-900/30 rounded-lg px-4 py-2 text-white focus:border-red-500 focus:outline-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white py-2 rounded-lg font-semibold transition-colors duration-300"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FAQ;