import { Truck, Clock, Shield, Package, Globe, RefreshCw } from 'lucide-react';

interface ShippingInfoProps {
  onPageChange: (page: string) => void;
}

const ShippingInfo = ({ onPageChange }: ShippingInfoProps) => {
  const shippingMethods = [
    {
      icon: <Truck className="w-8 h-8" />,
      name: "Standard Shipping",
      time: "3-5 business days",
      price: "$4.99",
      freeThreshold: "Free on orders over $75",
      description: "Our most popular shipping option for domestic orders"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      name: "Express Shipping",
      time: "1-2 business days",
      price: "$9.99",
      freeThreshold: "Free on orders over $150",
      description: "Priority handling for when you need your dark treasures faster"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "International Shipping",
      time: "7-14 business days",
      price: "From $14.99",
      freeThreshold: "Not available",
      description: "Worldwide delivery to dark souls across the globe"
    }
  ];

  const shippingDetails = [
    {
      title: "Order Processing",
      items: [
        "Orders placed before 2 PM EST are processed same day",
        "Weekend orders are processed on Monday",
        "You'll receive tracking information via email once shipped"
      ]
    },
    {
      title: "Delivery Times",
      items: [
        "Business days are Monday-Friday (excluding holidays)",
        "Delivery times are estimates, not guarantees",
        "Weather and carrier delays may affect delivery"
      ]
    },
    {
      title: "Shipping Restrictions",
      items: [
        "We cannot ship to PO boxes for express services",
        "Some international destinations have restrictions",
        "Signature may be required for high-value orders"
      ]
    }
  ];

  const internationalRegions = [
    {
      region: "Canada & Mexico",
      time: "5-8 business days",
      cost: "$14.99 - $19.99"
    },
    {
      region: "Europe & UK",
      time: "7-12 business days",
      cost: "$19.99 - $24.99"
    },
    {
      region: "Australia & Asia",
      time: "10-14 business days",
      cost: "$24.99 - $29.99"
    },
    {
      region: "South America",
      time: "8-12 business days",
      cost: "$22.99 - $27.99"
    }
  ];

  const policies = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Package Protection",
      description: "All packages include basic insurance and tracking. Signature confirmation available for orders over $200."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Packaging",
      description: "Your dark treasures are packaged in discreet, protective materials to ensure they arrive in perfect condition."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Easy Returns",
      description: "Not satisfied? We offer easy returns within 30 days. Return shipping is free for defective items."
    }
  ];

  const handleContactSupport = () => {
    onPageChange('home');
  };

  const handleTrackOrder = () => {
    window.open('https://www.ups.com/track', '_blank');
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl font-bold text-red-500 mb-6"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            Shipping Information
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            We deliver darkness worldwide. Fast, reliable shipping to bring our gothic collection to your doorstep, no matter where you dwell.
          </p>
        </div>

        {/* Shipping Methods */}
        <div className="mb-20">
          <h2 
            className="text-4xl font-bold text-red-400 text-center mb-12"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            Shipping Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-zinc-900 border border-red-900/20 rounded-lg p-8 text-center hover:border-red-600/30 transition-all duration-300"
              >
                <div className="text-red-400 mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 
                  className="text-2xl font-semibold text-red-400 mb-3"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {method.name}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-300">
                    <span style={{ fontFamily: 'Crimson Text, serif' }}>Delivery Time:</span>
                    <span style={{ fontFamily: 'Cinzel, serif' }}>{method.time}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span style={{ fontFamily: 'Crimson Text, serif' }}>Cost:</span>
                    <span style={{ fontFamily: 'Cinzel, serif' }}>{method.price}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span style={{ fontFamily: 'Crimson Text, serif' }}>Free Shipping:</span>
                    <span style={{ fontFamily: 'Cinzel, serif' }}>{method.freeThreshold}</span>
                  </div>
                </div>
                <p 
                  className="text-gray-400 text-sm"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 
              className="text-3xl font-bold text-red-400 mb-8"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              Shipping Details
            </h2>
            <div className="space-y-8">
              {shippingDetails.map((detail, index) => (
                <div key={index}>
                  <h3 
                    className="text-xl font-semibold text-red-400 mb-4"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {detail.title}
                  </h3>
                  <ul className="space-y-2">
                    {detail.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-start text-gray-300"
                        style={{ fontFamily: 'Crimson Text, serif' }}
                      >
                        <span className="text-red-400 mr-3">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* International Shipping */}
          <div>
            <h2 
              className="text-3xl font-bold text-red-400 mb-8"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              International Shipping
            </h2>
            <div className="bg-zinc-900 border border-red-900/20 rounded-lg p-6">
              <p 
                className="text-gray-300 mb-6"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                We ship to most countries worldwide. Customs fees and import taxes are the responsibility of the recipient and are not included in shipping costs.
              </p>
              <div className="space-y-4">
                {internationalRegions.map((region, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-red-900/10 last:border-b-0"
                  >
                    <div>
                      <h4 
                        className="text-red-400 font-semibold"
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        {region.region}
                      </h4>
                      <p 
                        className="text-gray-400 text-sm"
                        style={{ fontFamily: 'Crimson Text, serif' }}
                      >
                        {region.time}
                      </p>
                    </div>
                    <span 
                      className="text-gray-300 font-semibold"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      {region.cost}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Policies */}
        <div className="mb-16">
          <h2 
            className="text-4xl font-bold text-red-400 text-center mb-12"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            Shipping Policies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {policies.map((policy, index) => (
              <div 
                key={index}
                className="bg-zinc-900 border border-red-900/20 rounded-lg p-6 text-center"
              >
                <div className="text-red-400 mb-4 flex justify-center">
                  {policy.icon}
                </div>
                <h3 
                  className="text-lg font-semibold text-red-400 mb-3"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {policy.title}
                </h3>
                <p 
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  {policy.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-zinc-900 border border-red-900/30 rounded-lg p-8">
          <h2 
            className="text-2xl font-bold text-red-400 mb-6 text-center"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            Important Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 
                className="text-lg font-semibold text-red-400 mb-3"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Tracking Your Order
              </h3>
              <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'Crimson Text, serif' }}>
                <li>• Tracking numbers are emailed within 24 hours of shipment</li>
                <li>• Allow 2-4 hours for tracking information to update</li>
                <li>• Contact us if tracking hasn't updated after 48 hours</li>
              </ul>
            </div>
            <div>
              <h3 
                className="text-lg font-semibold text-red-400 mb-3"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Delivery Issues
              </h3>
              <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'Crimson Text, serif' }}>
                <li>• Failed delivery attempts will result in a notice</li>
                <li>• Packages are held at local post offices for pickup</li>
                <li>• Contact carrier directly for delivery concerns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zinc-900 to-black border border-red-900/30 rounded-lg p-12">
            <h2 
              className="text-3xl font-bold text-red-400 mb-4"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              Need Help With Shipping?
            </h2>
            <p 
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Our customer service darklings are here to help with any shipping questions or concerns.
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
                onClick={handleTrackOrder}
                className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Track Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;