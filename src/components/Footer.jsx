import React from 'react'
import { Rocket } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold text-white">
          <Rocket className="w-5 h-5 text-blue-500" />
          <span>SaaSify</span>
        </div>
        <p>
          © {new Date().getFullYear()} SaaSify Boilerplate. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
