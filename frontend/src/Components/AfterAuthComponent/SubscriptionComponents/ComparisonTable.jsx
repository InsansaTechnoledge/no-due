import { Check, X } from 'lucide-react'
import React from 'react'

const ComparisonTable = ({showComparison, upgradablePlans, currentPlan, allFeatures}) => {
  return (
    <div>
        {showComparison && (
              <div className="mb-6 overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left p-3 font-medium text-gray-700">Feature</th>
                      <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">{currentPlan?.name}</th>
                      {upgradablePlans.map((p) => (
                        <th key={p.name} className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">{p.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {allFeatures.map((feat) => (
                      <tr key={feat} className="hover:bg-gray-50">
                        <td className="p-3 text-gray-700">{feat}</td>
                        <td className="p-3">
                          {(currentPlan?.features || []).includes(feat) ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <X className="w-4 h-4 text-gray-300" />
                          )}
                        </td>
                        {upgradablePlans.map((p) => (
                          <td key={p.name} className="p-3">
                            {(p.features || []).includes(feat) ? (
                              <Check className="w-4 h-4 text-green-600" />
                            ) : (
                              <X className="w-4 h-4 text-gray-300" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
    </div>
  )
}

export default ComparisonTable
