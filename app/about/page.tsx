import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — smartfinds",
  description:
    "Learn about smartfinds, a small independent content project focused on product discovery and visual publishing.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Simple & Truthful",
      desc: "We present product concepts clearly without inflated hype or false claims.",
    },
    {
      title: "Visual Discovery",
      desc: "We design clean graphics and visual boards to publish on platforms like Pinterest.",
    },
    {
      title: "Utility Focused",
      desc: "Our focus is on finding functional everyday items and helpful buying information.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 text-center md:text-left">
        <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">
          About Us
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About smartfinds</h1>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          An honest look into our independent content and product discovery project.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="prose prose-teal max-w-none text-gray-700 space-y-6 bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
          Who We Are
        </h2>
        <p className="leading-relaxed">
          <strong>smartfinds</strong> is a small, independent content project created with a clear purpose: to help people discover useful products, creative tools, and practical everyday items through curated guides and original visual content.
        </p>
        <p className="leading-relaxed">
          Instead of overwhelming visitors with clutter or automated lists, smartfinds focuses on organizing high-utility recommendations paired with clean visual guides published across social channels, primarily visual platforms like Pinterest.
        </p>

        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 pt-4">
          Our Focus & Approach
        </h2>
        <p className="leading-relaxed">
          We operate on simple principles of transparency and quality over volume:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-6">
          {principles.map((p, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-gray-50 border border-gray-100 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-teal-600" />
              <h3 className="font-semibold text-gray-900 text-sm">{p.title}</h3>
              <p className="text-xs text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 pt-4">
          Monetization & Disclosure
        </h2>
        <p className="leading-relaxed">
          As an independent publishing project, smartfinds may use affiliate links within some of our content. If a reader chooses to purchase a product through one of these links, smartfinds may receive a small commission from the merchant at no extra cost to the buyer.
        </p>
        <p className="leading-relaxed">
          For detailed information regarding affiliate links, please review our full{" "}
          <Link href="/affiliate-disclosure" className="text-teal-700 underline font-medium">
            Affiliate Disclosure
          </Link>
          .
        </p>
      </div>

      {/* CTA Box */}
      <div className="p-6 rounded-xl bg-teal-50 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-gray-900">Have questions about smartfinds?</h3>
          <p className="text-sm text-gray-600">
            Read our Privacy Policy or get in touch via our email placeholder.
          </p>
        </div>
        <Link
          href="/privacy"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-700 text-white font-medium hover:bg-teal-800 transition-colors text-sm whitespace-nowrap"
        >
          Privacy Policy <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
