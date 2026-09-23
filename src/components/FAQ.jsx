import React from 'react'
import { siteContent } from '../data/content'

export default function FAQ() {
  const { faq } = siteContent

  return (
    <section
      id="faq"
      className="py-24 px-6 bg-slate-900/40 border-t border-slate-800"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">Have questions? We've got answers.</p>
        </div>

        <div className="space-y-6">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.question}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
