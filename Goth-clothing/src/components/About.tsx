import { Users, Eye, Heart, Shield, Sparkles } from 'lucide-react';

interface AboutProps {
  onPageChange: (page: string) => void;
}

const About = ({ onPageChange }: AboutProps) => {
  const values = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To create a sanctuary for dark souls seeking authentic gothic expression through fashion that speaks to the shadows within."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Passion",
      description: "We live and breathe alternative fashion, crafting each piece with the same dark passion that drives our community."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Our Promise",
      description: "Quality craftsmanship meets dark aesthetics. Every garment is designed to withstand the test of time and trends."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Our Craft",
      description: "Meticulous attention to detail in every stitch, ensuring each piece tells a story of darkness and elegance."
    }
  ];

  const team = [
    {
      name: "Morgana Nightshade",
      role: "Founder & Creative Director",
      bio: "With over 15 years in alternative fashion, Morgana curates collections that blend Victorian elegance with modern darkness.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Vladimir Sable",
      role: "Head Designer",
      bio: "A master of leatherwork and corsetry, Vladimir brings architectural precision to our most intricate designs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Lilith Raven",
      role: "Community Manager",
      bio: "The voice of our brand, Lilith ensures every customer feels part of our dark family and finds their perfect style.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Hecate Graves",
      role: "Quality Control",
      bio: "With an eye for perfection, Hecate ensures every garment meets our exacting standards before it reaches you.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const milestones = [
    { year: "2015", event: "Shadow Realm founded in a small boutique in New Orleans" },
    { year: "2017", event: "Launched our first online store, reaching dark souls worldwide" },
    { year: "2019", event: "Introduced custom corset and leatherwork services" },
    { year: "2021", event: "Expanded to international shipping across 50+ countries" },
    { year: "2023", event: "Featured in Dark Fashion Weekly's 'Top 10 Gothic Brands'" },
    { year: "2024", event: "Launched sustainable dark fashion initiative" }
  ];

  const handleExploreCollection = () => {
    onPageChange('home');
  };

  const handleContactUs = () => {
    onPageChange('home');
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 
            className="text-5xl md:text-6xl font-bold text-red-500 mb-6"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            Our Dark Legacy
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Since 2015, Shadow Realm has been the sanctuary for those who walk in shadows, 
            creating gothic fashion that celebrates the beauty in darkness and the elegance in the macabre.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 
              className="text-4xl font-bold text-red-400 mb-6"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              Born from Darkness
            </h2>
            <div className="space-y-4">
              <p 
                className="text-gray-300 text-lg leading-relaxed"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Shadow Realm emerged from the midnight streets of New Orleans, where founder Morgana Nightshade 
                saw a need for authentic gothic fashion that honored tradition while embracing modern darkness.
              </p>
              <p 
                className="text-gray-300 text-lg leading-relaxed"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                What began as a small boutique catering to local vampires and witches has grown into an international 
                community of dark souls united by their love for quality gothic apparel.
              </p>
              <p 
                className="text-gray-300 text-lg leading-relaxed"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Today, we continue to craft each piece with the same dark passion, ensuring every garment tells 
                a story of elegance, mystery, and timeless style.
              </p>
            </div>
          </div>
          <div className="bg-zinc-900 border border-red-900/20 rounded-lg p-8">
            <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 
              className="text-2xl font-semibold text-red-400 mb-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Our Dark Family
            </h3>
            <p 
              className="text-gray-300 mb-6"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Join over 50,000 dark souls worldwide who have found their style home with Shadow Realm.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-zinc-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-400">50K+</div>
                <div className="text-gray-400 text-sm">Dark Souls</div>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-400">15+</div>
                <div className="text-gray-400 text-sm">Countries</div>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-400">98%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-400">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 
            className="text-4xl font-bold text-red-400 text-center mb-12"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            Our Dark Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-zinc-900 border border-red-900/20 rounded-lg p-6 text-center hover:border-red-600/30 transition-all duration-300"
              >
                <div className="text-red-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 
                  className="text-xl font-semibold text-red-400 mb-3"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-gray-300"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 
            className="text-4xl font-bold text-red-400 text-center mb-12"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            The Keepers of Darkness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-zinc-900 border border-red-900/20 rounded-lg overflow-hidden hover:border-red-600/30 transition-all duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 
                    className="text-lg font-semibold text-red-400 mb-1"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-red-500 text-sm mb-3"
                    style={{ fontFamily: 'Crimson Text, serif' }}
                  >
                    {member.role}
                  </p>
                  <p 
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: 'Crimson Text, serif' }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-zinc-900 border border-red-900/20 rounded-lg p-8">
          <h2 
            className="text-4xl font-bold text-red-400 text-center mb-12"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            Our Dark Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-900/30 h-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 pr-8 pl-8">
                    <div className={`bg-zinc-800 border border-red-900/20 rounded-lg p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div 
                        className="text-2xl font-bold text-red-400 mb-2"
                        style={{ fontFamily: 'Creepster, cursive' }}
                      >
                        {milestone.year}
                      </div>
                      <p 
                        className="text-gray-300"
                        style={{ fontFamily: 'Crimson Text, serif' }}
                      >
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-zinc-900 z-10"></div>
                  <div className="w-1/2 pl-8 pr-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zinc-900 to-black border border-red-900/30 rounded-lg p-12">
            <h2 
              className="text-3xl font-bold text-red-400 mb-4"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              Join Our Dark Community
            </h2>
            <p 
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Become part of our growing family of dark souls who appreciate the beauty in shadows and the elegance in darkness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleExploreCollection}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Explore Collection
              </button>
              <button 
                onClick={handleContactUs}
                className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;