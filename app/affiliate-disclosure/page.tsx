import type { Metadata } from "next";
import Link from "next/link";
import { Info, ExternalLink, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — smartfinds",
  description:
    "Affiliate Disclosure for smartfinds explaining how affiliate links work and our commitment to truthful, independent recommendations.",
};

export default function AffiliateDisclosurePage() {
  const lastUpdated = "September 20, 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8">
      {/* Page Header */}
      <div className="space-y-2 border-b border-gray-100 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Affiliate Disclosure</h1>
        <p className="text-sm text-gray-500">
          Brand: <strong className="text-gray-700">smartfinds</strong> | Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Main Callout Box */}
      <div className="p-6 rounded-xl bg-teal-50/80 border border-teal-200/70 space-y-3">
        <div className="flex items-center gap-2 text-teal-800 font-semibold text-lg">
          <Info className="w-5 h-5 text-teal-700" />
          <span>General Affiliate Notice</span>
        </div>
        <p className="text-teal-900 font-medium leading-relaxed">
          Some links on this website may be affiliate links. If you make a qualifying purchase through an affiliate link, we may receive a commission.
        </p>
        <p className="text-sm text-teal-800 leading-relaxed">
          This commission comes at <strong>no additional cost to you</strong> as a visitor or buyer.
        </p>
      </div>

      {/* Detailed Document Content */}
      <div className="prose prose-teal max-w-none text-gray-700 space-y-8 bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 shadow-sm text-sm sm:text-base leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">How Affiliate Links Work</h2>
          <p>
            When you click on a product link or recommendation on <strong>smartfinds</strong> that points to a partner merchant or online retailer, a tracking tag or cookie may be used to identify that you were referred by smartfinds.
          </p>
          <p>
            If you subsequently complete a qualifying purchase on that merchant&apos;s site, the retailer pays us a small percentage or referral fee. The price you pay for the item remains identical regardless of whether you used our link or went directly to the store.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600 inline" />
            <span>Our Commitment to Honest Content</span>
          </h2>
          <p>
            <strong>smartfinds</strong> is an independent content and product discovery project. We select and present products based on utility, design, functional value, and relevance to our readers.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              Affiliate partnerships do <strong>not</strong> influence our decision to feature or highlight a product.
            </li>
            <li>
              We do not accept payment to post deceptive reviews, false ratings, or fake endorsements.
            </li>
            <li>
              We strive to present clear, accurate, and objective buying information to simplify your research process.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">Third-Party Merchant Responsibility</h2>
          <p>
            Purchases made through affiliate links take place on external merchant platforms. <strong>smartfinds</strong> does not sell products directly, manage inventory, handle shipping, or process customer service requests.
          </p>
          <p>
            Any orders, returns, questions regarding warranties, or product issues must be handled directly with the merchant where the purchase was completed.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3 border-t border-gray-100 pt-6">
          <h2 className="text-lg font-bold text-gray-900">Questions?</h2>
          <p>
            If you have any questions regarding our affiliate disclosures or content practices, please read our{" "}
            <Link href="/about" className="text-teal-700 underline font-medium">
              About Page
            </Link>{" "}
            or contact us:
          </p>
          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 font-mono text-sm text-gray-800">
            Contact: enavoir.co@gmail.com
          </div>
        </section>
      </div>
    </div>
  );
}
