import { useState } from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuide = ({ isOpen, onClose }: SizeGuideProps) => {
  const [activeCategory, setActiveCategory] = useState('womens');

  const sizeCharts = {
    womens: {
      title: "Women's Clothing",
      description: "Measurements in inches. For best results, measure your body and compare to the chart.",
      headers: ['Size', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
      measurements: [
        { name: 'Bust', values: ['32"', '34"', '36"', '38"', '40"', '42"'] },
        { name: 'Waist', values: ['25"', '27"', '29"', '31"', '33"', '35"'] },
        { name: 'Hips', values: ['35"', '37"', '39"', '41"', '43"', '45"'] }
      ]
    },
    mens: {
      title: "Men's Clothing",
      description: "Measurements in inches. Chest measurement is key for proper fit.",
      headers: ['Size', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
      measurements: [
        { name: 'Chest', values: ['36"', '38"', '40"', '42"', '44"', '46"'] },
        { name: 'Waist', values: ['30"', '32"', '34"', '36"', '38"', '40"'] },
        { name: 'Hips', values: ['36"', '38"', '40"', '42"', '44"', '46"'] }
      ]
    },
    corsets: {
      title: "Corsets & Bustiers",
      description: "Corsets run small. We recommend sizing up from your usual dress size.",
      headers: ['Size', 'XS', 'S', 'M', 'L', 'XL'],
      measurements: [
        { name: 'Underbust', values: ['24"', '26"', '28"', '30"', '32"'] },
        { name: 'Waist', values: ['20"', '22"', '24"', '26"', '28"'] },
        { name: 'Hips', values: ['30"', '32"', '34"', '36"', '38"'] }
      ]
    },
    footwear: {
      title: "Footwear",
      description: "US sizes shown. For EU sizes, add 31-32 to US women's sizes.",
      headers: ['US Women', '6', '7', '8', '9', '10', '11'],
      measurements: [
        { name: 'EU', values: ['38', '39', '40', '41', '42', '43'] },
        { name: 'UK', values: ['4', '5', '6', '7', '8', '9'] },
        { name: 'Inches', values: ['9.25"', '9.5"', '9.75"', '10"', '10.25"', '10.5"'] }
      ]
    }
  };

  const measuringTips = [
    {
      title: "Bust/Chest",
      description: "Measure around the fullest part of your bust/chest, keeping the tape level and snug."
    },
    {
      title: "Waist",
      description: "Measure around the narrowest part of your natural waist, usually above your belly button."
    },
    {
      title: "Hips",
      description: "Measure around the fullest part of your hips, about 8 inches below your waist."
    },
    {
      title: "Inseam",
      description: "For pants, measure from your crotch to the bottom of your ankle along the inside of your leg."
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-6xl my-8 overflow-hidden text-left align-middle transition-all transform bg-zinc-900 border border-red-900/30 shadow-xl rounded-lg">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-red-900/30">
            <div className="flex items-center space-x-3">
              <Ruler className="w-6 h-6 text-red-500" />
              <h2 
                className="text-2xl font-bold text-red-500"
                style={{ fontFamily: 'Creepster, cursive' }}
              >
                Dark Attire Size Guide
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.keys(sizeCharts).map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-red-400'
                  }`}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {sizeCharts[category as keyof typeof sizeCharts].title}
                </button>
              ))}
            </div>

            {/* Selected Size Chart */}
            <div className="mb-8">
              <h3 
                className="text-xl font-semibold text-red-400 mb-2"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {sizeCharts[activeCategory as keyof typeof sizeCharts].title}
              </h3>
              <p 
                className="text-gray-400 mb-6"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                {sizeCharts[activeCategory as keyof typeof sizeCharts].description}
              </p>

              {/* Size Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      {sizeCharts[activeCategory as keyof typeof sizeCharts].headers.map((header, index) => (
                        <th
                          key={index}
                          className={`p-3 text-left ${
                            index === 0 
                              ? 'bg-red-600 text-white'
                              : 'bg-zinc-800 text-red-400'
                          }`}
                          style={{ fontFamily: 'Cinzel, serif' }}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeCharts[activeCategory as keyof typeof sizeCharts].measurements.map((row, rowIndex) => (
                      <tr 
                        key={row.name}
                        className={rowIndex % 2 === 0 ? 'bg-zinc-800' : 'bg-zinc-700'}
                      >
                        <td 
                          className="p-3 text-red-400 font-semibold"
                          style={{ fontFamily: 'Cinzel, serif' }}
                        >
                          {row.name}
                        </td>
                        {row.values.map((value, cellIndex) => (
                          <td 
                            key={cellIndex}
                            className="p-3 text-gray-300"
                            style={{ fontFamily: 'Crimson Text, serif' }}
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Measuring Tips */}
            <div className="border-t border-red-900/30 pt-8">
              <h3 
                className="text-xl font-semibold text-red-400 mb-6"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                How to Measure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {measuringTips.map((tip, index) => (
                  <div 
                    key={index}
                    className="bg-zinc-800 border border-red-900/20 rounded-lg p-4 hover:border-red-600/30 transition-colors duration-300"
                  >
                    <h4 
                      className="text-lg font-semibold text-red-400 mb-2"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      {tip.title}
                    </h4>
                    <p 
                      className="text-gray-300"
                      style={{ fontFamily: 'Crimson Text, serif' }}
                    >
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Guidance */}
            <div className="mt-8 p-6 bg-zinc-800 border border-red-900/20 rounded-lg">
              <h4 
                className="text-lg font-semibold text-red-400 mb-3"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Important Notes
              </h4>
              <ul 
                className="text-gray-300 space-y-2"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                <li>• All measurements are in inches unless otherwise specified</li>
                <li>• For tight-fitting garments, consider sizing up for comfort</li>
                <li>• Leather items may stretch slightly with wear</li>
                <li>• When in doubt between sizes, choose the larger size</li>
                <li>• Contact customer service for custom sizing inquiries</li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end p-6 border-t border-red-900/30">
            <button
              onClick={onClose}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;