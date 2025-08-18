const stats = [
  { number: '500+', label: 'Properties Listed' },
  { number: '1,000+', label: 'Happy Clients' },
  { number: '50+', label: 'Expert Agents' },
  { number: '25+', label: 'Cities Covered' }
];

export default function Stats() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}