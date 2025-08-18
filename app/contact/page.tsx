'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Home, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  User
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyInterest: string;
}

interface Office {
  city: string;
  address: string;
  phone: string;
  hours: string;
}

interface Agent {
  name: string;
  role: string;
  phone: string;
  email: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        propertyInterest: ''
      });
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      setSubmitStatus('error');
      toast({
        title: "Error",
        description: "There was an error submitting your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Sample office locations
  const offices: Office[] = [
    {
      city: "New York",
      address: "123 Real Estate Avenue, Suite 456",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 9am-6pm | Sat: 10am-4pm"
    },
    {
      city: "Los Angeles",
      address: "456 Property Blvd, Suite 101",
      phone: "(555) 987-6543",
      hours: "Mon-Fri: 8am-5pm | Sat: 9am-3pm"
    },
    {
      city: "Chicago",
      address: "789 Lakeview Drive, Floor 5",
      phone: "(555) 456-7890",
      hours: "Mon-Fri: 9am-5pm | Sat: 10am-2pm"
    }
  ];

  // Sample team members
  const agents: Agent[] = [
    { name: "Sarah Johnson", role: "Senior Agent", phone: "(555) 123-4567", email: "sarah@premiumhomes.com" },
    { name: "Michael Chen", role: "Luxury Specialist", phone: "(555) 234-5678", email: "michael@premiumhomes.com" },
    { name: "Emily Rodriguez", role: "Investment Advisor", phone: "(555) 345-6789", email: "emily@premiumhomes.com" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-gray-900">
                Contact <span className="text-blue-600">Premium Homes</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Our team of real estate experts is ready to assist you with buying, selling, or renting properties.
                Reach out today for personalized service.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-6 font-serif text-gray-900">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-100">
                    Thank you for your message! Our team will contact you within 24 hours.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-100">
                    There was an error submitting your message. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="propertyInterest" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Interest
                    </label>
                    <select
                      id="propertyInterest"
                      name="propertyInterest"
                      value={formData.propertyInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="buying">Buying a Home</option>
                      <option value="selling">Selling a Home</option>
                      <option value="renting">Renting a Property</option>
                      <option value="investment">Real Estate Investment</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information & Map */}
              <div className="space-y-8">
                {/* Office Locations */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold mb-6 font-serif text-gray-900">Our Offices</h3>
                  
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                        <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-blue-600" />
                          {office.city} Office
                        </h4>
                        <div className="space-y-2 text-gray-600">
                          <p className="flex items-start gap-2">
                            <Home className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            <span>{office.address}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-gray-400" />
                            <span>{office.phone}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-gray-400" />
                            <span>{office.hours}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Embed */}
                <div className="rounded-2xl overflow-hidden border border-gray-200 h-64 md:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256064345!2d-73.98784492416492!3d40.74844097138982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623251234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Our Office Locations"
                  ></iframe>
                </div>

                {/* Social Media */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect With Us</h3>
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-serif text-gray-900">Meet Our Team</h2>
              <p className="text-gray-600">
                Our experienced agents are ready to help you with all your real estate needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {agents.map((agent, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                      <User className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{agent.name}</h3>
                  <p className="text-blue-600 mb-4">{agent.role}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{agent.phone}</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{agent.email}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}