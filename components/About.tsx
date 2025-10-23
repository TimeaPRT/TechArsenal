'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

interface Achievement {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const About = () => {
  const achievements: Achievement[] = [
    { icon: Award, title: 'Board Certified Surgeons', description: 'American Board of Plastic Surgery certified' },
    { icon: Users, title: '2,500+ Happy Patients', description: 'Trusted by thousands for exceptional results' },
    { icon: Clock, title: '20+ Years Experience', description: 'Two decades of surgical excellence' },
    { icon: CheckCircle, title: '98% Satisfaction Rate', description: 'Consistently exceeding patient expectations' }
  ];

  const features = [
    'State-of-the-art surgical facility',
    'Personalized treatment plans',
    'Comprehensive aftercare support',
    'Latest surgical techniques',
    'Patient safety first approach',
    'Natural-looking results'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Excellence in <span className="text-rose-gold">Plastic Surgery</span>
            </h2>

            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              At Elite Aesthetics, we believe that beauty is deeply personal. Our mission is to help you 
              achieve your aesthetic goals while maintaining the highest standards of safety, artistry, 
              and patient care. With over two decades of experience, our board-certified surgeons combine 
              cutting-edge techniques with an artistic eye to deliver results that look natural and feel authentic to you.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-gold flex-shrink-0" />
                  <span className="text-navy-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="bg-rose-gold hover:bg-rose-gold/90 text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              Learn About Our Philosophy
            </Button>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg"
                alt="Dr. performing consultation"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border-0 bg-navy-900/80 text-white shadow-lg hover:shadow-rose-gold/40 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <achievement.icon className="w-8 h-8 text-rose-gold mx-auto mb-3" />
                    <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
                    <p className="text-sm text-gray-200">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
