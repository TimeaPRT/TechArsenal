export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        Welcome to our website. By accessing or using our services, you agree to be
        bound by these Terms of Service. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using our site, you agree to comply with and be legally bound by these
        terms. If you do not agree, you may not use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Use of Our Services</h2>
      <p className="mb-4">
        You agree to use our services only for lawful purposes and in accordance
        with these terms. You are responsible for ensuring that your use does not
        violate any laws or regulations.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Intellectual Property</h2>
      <p className="mb-4">
        All content, logos, and designs on this site are the property of our
        company and protected by copyright laws. You may not reproduce or
        distribute any content without written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any direct, indirect, incidental, or consequential
        damages resulting from the use or inability to use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update or change these terms at any time. Any
        changes will be posted on this page with an updated date.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
