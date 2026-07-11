import React from 'react';

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <h1 className="text-4xl md:text-5xl font-display text-white mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-[#a3a3a3] text-[1.05rem] leading-relaxed">
        <p>Last updated: July 2026</p>
        
        <h2 className="text-2xl text-white font-display mt-10 mb-4">1. Information We Collect</h2>
        <p>
          Iconary is an open-source project. We do not actively collect, store, or process any personally identifiable information (PII) from users browsing our documentation or utilizing our icons.
        </p>

        <h2 className="text-2xl text-white font-display mt-10 mb-4">2. Open Source Analytics</h2>
        <p>
          We may use standard, privacy-friendly analytics tools to monitor website traffic and usage patterns. These tools do not track individual users across the web or sell data to third parties.
        </p>

        <h2 className="text-2xl text-white font-display mt-10 mb-4">3. External Links</h2>
        <p>
          Our website and documentation contain links to third-party websites (such as GitHub or NPM). We are not responsible for the privacy practices or content of these external sites.
        </p>

        <h2 className="text-2xl text-white font-display mt-10 mb-4">4. Contact Us</h2>
        <p>
          If you have questions regarding our privacy practices, please open an issue in our GitHub repository.
        </p>
      </div>
    </div>
  );
}
