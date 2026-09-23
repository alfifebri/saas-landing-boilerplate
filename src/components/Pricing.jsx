import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { siteContent } from '../data/content'

export default function Pricing() {
  const { pricing } = siteContent

  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-slate-950 border-t border-slate-800"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400">
            Pay once, own forever. No hidden subscription fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl bg-slate-900 border ${
                plan.isPopular
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/10'
                  : 'border-slate-800'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 right-8 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-white">
                  {plan.price}
                </span>
                <span className="text-slate-500 text-sm">/ lifetime</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-3 text-slate-300 text-sm"
                  >
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full py-3 px-4 rounded-xl text-center font-semibold transition-all ${
                  plan.isPopular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
