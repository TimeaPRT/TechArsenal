'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const Team = () => {
  const doctors = [
    {
      name: 'Dr. Michael Smith',
      title: 'Chief Plastic Surgeon',
      specialty: 'Facial & Reconstructive Surgery',
      education: 'Harvard Medical School',
      certification: 'American Board of Plastic Surgery',
      experience: '20+ Years',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg',
      bio: 'Dr. Smith is renowned for his artistic approach to facial plastic surgery and his commitment to natural-looking results.',
      specialties: ['Rhinoplasty', 'Facelift', 'Eyelid Surgery', 'Reconstructive Surgery']
    },
    {
      name: 'Dr. Sarah Johnson',
      title: 'Breast & Body Specialist',
      specialty: 'Breast & Body Contouring',
      education: 'Stanford Medical School',
      certification: 'American Board of Plastic Surgery',
      experience: '15+ Years',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
      bio: 'Dr. Johnson specializes in breast procedures and body contouring, focusing on achieving beautiful, proportionate results.',
      specialties: ['Breast Augmentation', 'Tummy Tuck', 'Liposuction', 'Mommy Makeover']
    },
    {
      name: 'Dr. David Chen',
      title: 'Aesthetic & Wellness Director',
      specialty: 'Non-Surgical Treatments',
      education: 'UCLA Medical School',
      certification: 'Board Certified Dermatologist',
      experience: '12+ Years',
      image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg',
      bio: 'Dr. Chen leads our non-surgical division, combining medical expertise with an aesthetic eye for natural enhancement.',
      specialties: ['Botox', 'Dermal Fillers', 'Laser Treatments', 'Chemical Peels']
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Meet Our <span className="text-rose-gold">Expert</span> Team
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Our board-certified surgeons and medical professionals bring decades of experience, 
            artistic vision, and unwavering commitment to patient safety and satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <CardContent className="p-0">
                {/* Doctor Image */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Doctor Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{doctor.name}</h3>
                  <p className="text-rose-gold font-semibold mb-1">{doctor.title}</p>
                  <p className="text-navy-600 mb-4">{doctor.specialty}</p>

                  {/* Credentials */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-rose-gold" />
                      <span className="text-navy-700">{doctor.education}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-rose-gold" />
                      <span className="text-navy-700">{doctor.certification}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-rose-gold" />
                      <span className="text-navy-700">{doctor.experience}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-navy-600 mb-6 leading-relaxed">{doctor.bio}</p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-800 mb-3">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-cream-100 text-navy-700 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-rose-gold hover:bg-rose-gold/90 text-white rounded-full font-semibold"
                  >
                    Schedule with {doctor.name.split(' ')[1]}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;