import type { Metadata } from "next";
import Link from "next/link";
import { Search, Info, Image, Share2, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "smartfinds — Discover useful products and ideas",
  description:
    "smartfinds creates product discovery and informational content to help you discover useful products and visual recommendations.",
};

export default function HomePage() {
  const activities = [
    {
      icon: Search,
      title: "Product discovery",
      description:
        "Curating practical, functional, and well-designed products across popular lifestyle, home, and daily-use categories.",
    },
    {
      icon: Info,
      title: "Helpful buying information",
      description:
        "Providing clear, straightforward informational overviews and feature comparisons to help consumers make thoughtful decisions.",
    },
    {
      icon: Image,
      title: "Original visual content",
      description:
        "Designing custom visual graphics, product pinboards, and clean guides that highlight item utility and aesthetics.",
    },
    {
      icon: Share2,
      title: "Social content publishing",
      description:
        "Publishing original visual recommendation content directly to social channels, including Pinterest and visual search platforms.",
    },
  ];

  return (
    <div className="space-y-16 py-12 md:py-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-teal-800 bg-teal-50 rounded-full border border-teal-100">
          smartfinds
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Discover useful products and ideas.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
          smartfinds creates curated product discovery guides and informational content to help people explore practical solutions and creative ideas.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-700 text-white font-medium hover:bg-teal-800 transition-colors shadow-sm text-sm"
          >
            Learn About Us <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/affiliate-disclosure"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors text-sm"
          >
            Affiliate Disclosure
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50/70 border-y border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-block text-xs font-bold text-teal-700 uppercase tracking-widest">
            About smartfinds
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            A small, focused content project
          </h2>
          <p className="text-gray-600 leading-relaxed">
            smartfinds is an independent product discovery and visual publishing project. We focus on sifting through everyday items, lifestyle products, and unique finds to present concise, honest information. Our mission is to save users time by organizing useful product recommendations into clean visual formats.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-block text-xs font-bold text-teal-700 uppercase tracking-widest">
            What We Do
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            How smartfinds creates value
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200/80 bg-white shadow-sm hover:border-teal-200 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Simple Contact Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-2xl bg-gray-900 text-white text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 mx-auto rounded-full bg-teal-600/30 text-teal-300 flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold">Get in Touch</h2>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            Have a question, feedback, or inquiry regarding smartfinds content or recommendations?
          </p>
          <div className="pt-2">
            <span className="inline-block bg-gray-800 text-teal-300 px-4 py-2 rounded-md font-mono text-sm border border-gray-700">
              Contact: enavoir.co@gmail.com
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
