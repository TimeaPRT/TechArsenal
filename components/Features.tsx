import { MapPin, Search, Heart, Shield, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Advanced Search',
    description: 'Find your perfect property with our intelligent search and filtering system.',
  },
  {
    icon: MapPin,
    title: 'Interactive Maps',
    description: 'Explore neighborhoods and properties with our detailed interactive map integration.',
  },
  {
    icon: Heart,
    title: 'Save Favorites',
    description: 'Create your wishlist and save properties you love for easy comparison.',
  },
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'All properties are verified and updated regularly for accuracy and authenticity.',
  },
  {
    icon: TrendingUp,
    title: 'Market Insights',
    description: 'Access comprehensive market data and trends to make informed decisions.',
  },
  {
    icon: Users,
    title: 'Expert Agents',
    description: 'Connect with experienced real estate professionals in your area.',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose PremiumHomes?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the most comprehensive real estate platform with cutting-edge features and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-8 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
