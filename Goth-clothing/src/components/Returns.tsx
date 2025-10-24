import { RefreshCw, Clock, Package, Shield, X, Check } from 'lucide-react';
import { useState } from 'react';

interface ReturnsProps {
  onPageChange: (page: string) => void;
}

const Returns = ({ onPageChange }: ReturnsProps) => {
  const [showReturnInfo, setShowReturnInfo] = useState(false);
  const [showStatusInfo, setShowStatusInfo] = useState(false);

  const returnSteps = [
    {
      step: "1",
      title: "Initiate Return",
      description: "Contact our customer service or use our online portal to start your return process",
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      step: "2",
      title: "Package Items",
      description: "Include all original tags, packaging, and the return form with your items",
      icon: <Package className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Ship Back",
      description: "Use the provided return label and ship your package within 14 days",
      icon: <Shield className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Receive Refund",
      description: "Get your refund processed within 5-7 business days after we receive your return",
      icon: <Check className="w-6 h-6" />
    }
  ];

  const returnPolicies = [
    {
      title: "30-Day Return Window",
      description: "Items must be returned within 30 days of delivery date for a full refund",
      eligible: true
    },
    {
      title: "Original Condition",
      description: "Items must be unworn, unwashed, and with all original tags attached",
      eligible: true
    },
    {
      title: "Final Sale Items",
      description: "Custom pieces, sale items, and intimate apparel cannot be returned",
      eligible: false
    },
    {
      title: "Return Shipping",
      description: "Free returns for defective items; customer pays for size/exchange returns",
      eligible: true
    },
    {
      title: "International Returns",
      description: "International customers responsible for return shipping and customs fees",
      eligible: true
    },
    {
      title: "Store Credit",
      description: "Refunds are issued to original payment method; store credit available on request",
      eligible: true
    }
  ];

  const exchangeInfo = [
    {
      title: "Size Exchanges",
      description: "Free size exchanges within 30 days if the desired size is in stock"
    },
    {
      title: "Color Exchanges",
      description: "Color exchanges available for the same style if inventory permits"
    },
    {
      title: "Exchange Processing",
      description: "Exchanges typically process within 3-5 business days after receipt"
    },
    {
      title: "International Exchanges",
      description: "International exchanges may take additional time for customs processing"
    }
  ];

  const nonReturnable = [
    "Custom-made corsets and tailored items",
    "Items marked 'Final Sale' or 'Clearance'",
    "Intimate apparel and bodysuits",
    "Items without original tags or packaging",
    "Damaged items due to customer misuse",
    "Items purchased more than 30 days ago"
  ];

  const refundTimeline = [
    {
      stage: "Return Received",
      time: "1-2 business days",
      description: "We process your return upon arrival at our warehouse"
    },
    {
      stage: "Quality Check",
      time: "1-2 business days",
      description: "Items are inspected to ensure they meet return criteria"
    },
    {
      stage: "Refund Processed",
      time: "1-2 business days",
      description: "Refund is issued to your original payment method"
    },
    {
      stage: "Funds Posted",
      time: "3-5 business days",
      description: "Time for your bank to process and post the refund"
    }
  ];

  const handleStartReturn = () => {
    setShowReturnInfo(true);
  };

  const handleContactSupport = () => {
    onPageChange('home');
  };

  const handleCheckReturnStatus = () => {
    setShowStatusInfo(true);
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
            Returns & Exchanges
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            We want you to love your dark treasures. If something isn't perfect, our return process is designed to be smooth and straightforward.
          </p>
        </div>

        {/* Return Process Steps */}
        <div className="mb-20">
          <h2 
            className="text-4xl font-bold text-red-400 text-center mb-12"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            Easy Return Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-zinc-900 border border-red-900/20 rounded-lg p-6 text-center hover:border-red-600/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="text-red-400 mb-3">
                  {step.icon}
                </div>
                <h3 
                  className="text-xl font-semibold text-red-400 mb-3"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Return Policies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 
              className="text-3xl font-bold text-red-400 mb-8"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              Return Policies
            </h2>
            <div className="space-y-4">
              {returnPolicies.map((policy, index) => (
                <div 
                  key={index}
                  className="bg-zinc-900 border border-red-900/20 rounded-lg p-4"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      policy.eligible ? 'bg-green-600' : 'bg-red-600'
                    }`}>
                      {policy.eligible ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <X className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold text-red-400 mb-1"
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exchange Information */}
          <div>
            <h2 
              className="text-3xl font-bold text-red-400 mb-8"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              Exchange Information
            </h2>
            <div className="space-y-6">
              {exchangeInfo.map((info, index) => (
                <div key={index}>
                  <h3 
                    className="text-lg font-semibold text-red-400 mb-2"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {info.title}
                  </h3>
                  <p 
                    className="text-gray-300"
                    style={{ fontFamily: 'Crimson Text, serif' }}
                  >
                    {info.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Non-Returnable Items */}
            <div className="mt-8 bg-zinc-900 border border-red-900/20 rounded-lg p-6">
              <h3 
                className="text-xl font-semibold text-red-400 mb-4"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Non-Returnable Items
              </h3>
              <ul className="space-y-2">
                {nonReturnable.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start text-gray-300"
                    style={{ fontFamily: 'Crimson Text, serif' }}
                  >
                    <X className="w-4 h-4 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Refund Timeline */}
        <div className="mb-16">
          <h2 
            className="text-4xl font-bold text-red-400 text-center mb-12"
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            Refund Timeline
          </h2>
          <div className="bg-zinc-900 border border-red-900/20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {refundTimeline.map((stage, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 
                    className="text-lg font-semibold text-red-400 mb-2"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {stage.stage}
                  </h3>
                  <p 
                    className="text-gray-400 text-sm mb-2"
                    style={{ fontFamily: 'Crimson Text, serif' }}
                  >
                    {stage.time}
                  </p>
                  <p 
                    className="text-gray-300 text-xs"
                    style={{ fontFamily: 'Crimson Text, serif' }}
                  >
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p 
                className="text-gray-400"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Total estimated time: <span className="text-red-400 font-semibold">7-14 business days</span>
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900 border border-red-900/20 rounded-lg p-6">
            <h3 
              className="text-xl font-semibold text-red-400 mb-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Defective Items
            </h3>
            <p 
              className="text-gray-300 mb-4"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              If you receive a defective item, contact us within 7 days of delivery for a free return label and expedited processing.
            </p>
            <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'Crimson Text, serif' }}>
              <li>• Include photos of the defect</li>
              <li>• Free return shipping</li>
              <li>• Priority replacement processing</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-red-900/20 rounded-lg p-6">
            <h3 
              className="text-xl font-semibold text-red-400 mb-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              International Returns
            </h3>
            <p 
              className="text-gray-300 mb-4"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              International customers are responsible for return shipping costs and any customs fees incurred.
            </p>
            <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'Crimson Text, serif' }}>
              <li>• Use tracked shipping</li>
              <li>• Mark as "Returned Goods"</li>
              <li>• Include all documentation</li>
            </ul>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zinc-900 to-black border border-red-900/30 rounded-lg p-12">
            <h2 
              className="text-3xl font-bold text-red-400 mb-4"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              Need Help With Returns?
            </h2>
            <p 
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              Our customer service darklings are here to guide you through the return process and answer any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleStartReturn}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Start Return
              </button>
              <button 
                onClick={handleContactSupport}
                className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Contact Support
              </button>
              <button 
                onClick={handleCheckReturnStatus}
                className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Check Return Status
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Start Return Modal */}
      {showReturnInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-red-600 rounded-lg max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-red-500 mb-4 text-center" style={{ fontFamily: 'Creepster, cursive' }}>
              Start a Return
            </h3>
            <p className="text-gray-300 mb-4 text-center" style={{ fontFamily: 'Crimson Text, serif' }}>
              To start a return, please email us at:
            </p>
            <p className="text-red-400 font-semibold text-lg text-center mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              returns@shadowrealm.com
            </p>
            <p className="text-gray-400 text-sm mb-6 text-center" style={{ fontFamily: 'Crimson Text, serif' }}>
              Include your order number and items you wish to return in your email.
            </p>
            <button
              onClick={() => setShowReturnInfo(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Check Return Status Modal */}
      {showStatusInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-red-600 rounded-lg max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-red-500 mb-4 text-center" style={{ fontFamily: 'Creepster, cursive' }}>
              Check Return Status
            </h3>
            <p className="text-gray-300 mb-4 text-center" style={{ fontFamily: 'Crimson Text, serif' }}>
              To check your return status, please email:
            </p>
            <p className="text-red-400 font-semibold text-lg text-center mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              support@shadowrealm.com
            </p>
            <p className="text-gray-400 text-sm mb-6 text-center" style={{ fontFamily: 'Crimson Text, serif' }}>
              Include your return/order number for faster assistance.
            </p>
            <button
              onClick={() => setShowStatusInfo(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Returns;