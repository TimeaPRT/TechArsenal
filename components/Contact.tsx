'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';

type ProcedureType = 
  | 'rhinoplasty' 
  | 'breast-aug' 
  | 'facelift' 
  | 'tummy-tuck' 
  | 'liposuction' 
  | 'botox' 
  | 'mommy-makeover' 
  | 'other';

interface FormData {
  name: string;
  email: string;
  phone: string;
  procedure: ProcedureType;
  message: string;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string[];
  action: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    procedure: 'rhinoplasty',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', '24/7 Emergency Line'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@eliteaesthetics.com', 'consultations@eliteaesthetics.com'],
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Medical Plaza Drive', 'Beverly Hills, CA 90210'],
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      action: 'View Schedule'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Begin Your <span className="text-rose-gold">Journey?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your transformation. Schedule a consultation 
            with our expert team to discuss your goals and create a personalized treatment plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-2xl border-0">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-navy-900 text-center">
                Schedule Your Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-cream-300 focus:border-rose-gold focus:ring-rose-gold"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-cream-300 focus:border-rose-gold focus:ring-rose-gold"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">
                    Email Address *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-cream-300 focus:border-rose-gold focus:ring-rose-gold"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">
                    Procedure of Interest
                  </label>
                  <Select 
                    value={formData.procedure}
                    onValueChange={(value: ProcedureType) => setFormData({ ...formData, procedure: value })}
                  >
                    <SelectTrigger className="border-cream-300 focus:border-rose-gold focus:ring-rose-gold">
                      <SelectValue placeholder="Select a procedure" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rhinoplasty">Rhinoplasty</SelectItem>
                      <SelectItem value="breast-aug">Breast Augmentation</SelectItem>
                      <SelectItem value="facelift">Facelift</SelectItem>
                      <SelectItem value="tummy-tuck">Tummy Tuck</SelectItem>
                      <SelectItem value="liposuction">Liposuction</SelectItem>
                      <SelectItem value="botox">Botox/Fillers</SelectItem>
                      <SelectItem value="mommy-makeover">Mommy Makeover</SelectItem>
                      <SelectItem value="other">Other/Multiple Procedures</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">
                    Tell us about your goals
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-cream-300 focus:border-rose-gold focus:ring-rose-gold min-h-[120px]"
                    placeholder="Share your aesthetic goals and any questions you have..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-rose-gold hover:bg-rose-gold/90 text-white py-4 rounded-full font-semibold text-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule My Consultation
                </Button>

                <p className="text-center text-sm text-navy-600">
                  By submitting this form, you agree to our privacy policy and consent to be contacted.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-rose-gold p-3 rounded-full">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/80 mb-1">{detail}</p>
                      ))}
                      <button 
                        className="text-rose-gold hover:text-rose-gold/80 p-0 h-auto font-semibold text-left"
                      >
                        {info.action}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Contact CTA */}
            <Card className="bg-rose-gold border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Prefer to Talk Directly?
                </h3>
                <p className="text-white/90 mb-6">
                  Our patient coordinators are available to answer questions and help schedule your consultation.
                </p>
                <Button 
                  className="bg-white text-rose-gold hover:bg-cream-50 px-8 py-4 rounded-full font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;