import React from 'react'
import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Layout } from 'lucide-react'
import { siteContent } from '../data/content'

const iconMap = {
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Layout: Layout,
}

export default function Features() {
  const { features } = siteContent

  return (
    <section
      id="features"
      className="py-24 px-6 bg-slate-900/50 relative border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Everything You Need to Launch
          </h2>
          <p className="text-slate-400">
            Designed to save you time and deliver an exceptional user experience
            from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Zap
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
