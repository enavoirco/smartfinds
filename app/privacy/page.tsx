import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — smartfinds",
  description:
    "Privacy Policy for smartfinds. Learn how we handle technical logs, visitor contact information, cookies, and data security.",
};

export default function PrivacyPage() {
  const lastUpdated = "September 20, 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8">
      {/* Page Header */}
      <div className="space-y-2 border-b border-gray-100 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500">
          Brand: <strong className="text-gray-700">smartfinds</strong> | Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Document Body */}
      <div className="prose prose-teal max-w-none text-gray-700 space-y-8 bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 shadow-sm text-sm sm:text-base leading-relaxed">
        <p>
          At <strong>smartfinds</strong>, we value visitor privacy and transparency. This Privacy Policy describes the types of information that may be collected or processed when you visit our website, how that information is used, and the steps taken to safeguard it.
        </p>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">1. Information We Collect</h2>
          <p>
            As a small, informational website, <strong>smartfinds</strong> does not require user account registration, user logins, or financial payment processing on our site.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>
              <strong>Voluntarily Provided Contact Information:</strong> If you choose to contact us via email, we may collect your email address, name, and any content included in your message solely to respond to your inquiry.
            </li>
            <li>
              <strong>Basic Technical Logs:</strong> Like standard web platforms, hosting providers automatically record routine server log files. These may include internet protocol (IP) addresses, browser type, operating system, referring pages, and access timestamps for security and system administration.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">2. Cookies & Similar Technologies</h2>
          <p>
            <strong>smartfinds</strong> may use essential cookies or standard browser storage to ensure smooth website performance and navigation.
          </p>
          <p>
            Third-party services (such as website analytics providers, web host infrastructure, or social embedding tools) may place cookies on your device to understand aggregate visitor interaction or referral channels. You can adjust your browser settings at any time to block or notify you about cookies.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">3. Third-Party Services & External Links</h2>
          <p>
            Our website may contain links to external third-party websites, online retailers, or social media platforms (including Pinterest).
          </p>
          <p>
            Please note that <strong>smartfinds</strong> does not operate or control these third-party websites. When you follow an external link, you are subject to the privacy practices and policies of that third party. We encourage you to review their respective policies.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">4. Affiliate Links</h2>
          <p>
            <strong>smartfinds</strong> publishes curated product recommendations and visual content. Some outbound links may be affiliate links.
          </p>
          <p>
            If you click an affiliate link and make a purchase on a merchant site, an affiliate cookie may be set by the affiliate network to track the referral. For more detail, please refer to our{" "}
            <a href="/affiliate-disclosure" className="text-teal-700 underline font-medium">
              Affiliate Disclosure
            </a>
            .
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">5. How We Use Information</h2>
          <p>Any technical log data or contact details collected are used strictly to:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Maintain, protect, and optimize site operation and performance.</li>
            <li>Respond to direct email inquiries or user support requests.</li>
            <li>Monitor aggregate traffic patterns and operational security.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">6. Data Retention & Security</h2>
          <p>
            We retain email communications only as long as necessary to address inquiries or fulfill legitimate administrative requests. We apply reasonable administrative and technical security measures to protect information against unauthorized access, loss, or misuse. However, no internet transmission method is 100% secure.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">7. Children&apos;s Privacy</h2>
          <p>
            <strong>smartfinds</strong> is intended for general audiences and is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect site modifications or legal requirements. Updates will be posted on this page with a revised &quot;Last Updated&quot; date.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3 border-t border-gray-100 pt-6">
          <h2 className="text-lg font-bold text-gray-900">9. Contact Information</h2>
          <p>
            If you have questions, feedback, or concerns regarding this Privacy Policy, please contact us at:
          </p>
          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 font-mono text-sm text-gray-800">
            Contact: [ADD YOUR EMAIL HERE]
          </div>
        </section>
      </div>
    </div>
  );
}
