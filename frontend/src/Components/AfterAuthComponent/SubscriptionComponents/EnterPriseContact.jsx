import React from 'react'

const EnterPriseContact = () => {
  return (
    <div id="contact-sales" className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-6 text-white">
    <div className="flex items-start gap-4">
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-1">Need Enterprise Plan?</h3>
        <p className="text-sm text-gray-300 mb-4">
          Get custom limits, dedicated support, on-premise deployment, and priority SLA
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:sales@insansa.com"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Email Sales
          </a>
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
          >
            Call +91 99999 99999
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EnterPriseContact
