import { Check } from 'lucide-react'
import React from 'react'

const CurrentPlanCard = ({currentPlan, rupee}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
            Active Plan
          </div>
          <h2 className="text-xl font-semibold text-gray-900">{currentPlan?.name || "Free"}</h2>
          <p className="text-sm text-gray-600 mt-1">{currentPlan?.description}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-gray-900">
            {typeof currentPlan?.pricing === "number" ? rupee(currentPlan.pricing) : "₹0"}
          </div>
          <div className="text-xs text-gray-500 mt-1">per month</div>
        </div>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Current Plan Features</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {(currentPlan?.features || []).map((feature) => (
          <div key={feature} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default CurrentPlanCard
