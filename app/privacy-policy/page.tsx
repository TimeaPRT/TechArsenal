export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your information when you use our website and
        services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        and phone number when you interact with our services. We also collect
        non-personal data like browser type, IP address, and usage patterns.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to provide and improve our services, process
        transactions, send updates, and respond to inquiries. Your information
        will not be sold or shared with third parties except as required by law
        or with your consent.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Cookies</h2>
      <p className="mb-4">
        We use cookies to enhance your browsing experience, analyze site
        traffic, and personalize content. You can adjust your browser settings
        to refuse cookies or notify you when they are being used.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Security</h2>
      <p className="mb-4">
        We implement reasonable measures to protect your personal information
        from unauthorized access, alteration, or disclosure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal
        information. Please contact us if you wish to exercise these rights.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with the updated date.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
