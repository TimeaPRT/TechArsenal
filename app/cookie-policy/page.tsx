export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <p className="mb-4">
        This Cookie Policy explains how we use cookies and similar tracking
        technologies on our website. By using our website, you agree to the
        use of cookies as described in this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device when you visit a
        website. They help us enhance your browsing experience by remembering
        your preferences and providing relevant content.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Types of Cookies We Use</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>Essential Cookies:</strong> Required for basic functionality.
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Help us understand how visitors
          interact with our site.
        </li>
        <li>
          <strong>Advertising Cookies:</strong> Used to show relevant ads.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. How to Control Cookies</h2>
      <p className="mb-4">
        You can manage or disable cookies through your browser settings. Please
        note that disabling cookies may affect the functionality of our site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy from time to time. Changes will be posted on
        this page with an updated date.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
