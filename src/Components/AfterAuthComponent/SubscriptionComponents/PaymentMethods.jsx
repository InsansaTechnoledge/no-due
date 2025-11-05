import { ChevronRight, CreditCard, Smartphone } from 'lucide-react'
import React from 'react'

const PaymentMethods = ({selectedUpgrade, setPaymentMethod,paymentMethod,rupee, currentPlan}) => {
  return (
    <div>
      {selectedUpgrade && typeof selectedUpgrade.pricing === "number" && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Payment Method</h3>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <button
                    onClick={() => setPaymentMethod("net")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === "net"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <CreditCard className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                    <div className="text-xs font-medium text-gray-900 text-center">Net Banking</div>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("upi")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === "upi"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Smartphone className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                    <div className="text-xs font-medium text-gray-900 text-center">UPI</div>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === "card"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <CreditCard className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                    <div className="text-xs font-medium text-gray-900 text-center">Debit / Credit Card</div>
                  </button>
                </div>

                {/* Payment Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Upgrading to</span>
                    <span className="text-sm font-semibold text-gray-900">{selectedUpgrade.name}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Current plan</span>
                    <span className="text-sm text-gray-900">{rupee(currentPlan?.pricing || 0)}/mo</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">New plan</span>
                    <span className="text-sm text-gray-900">{rupee(selectedUpgrade.pricing)}/mo</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-900">Amount to pay now</span>
                      <span className="text-xl font-bold text-green-600">{rupee(selectedUpgrade.pricing)}</span>
                    </div>
                  </div>
                </div>

                <button
                 
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                 Proceed to Payment
                  <ChevronRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  Your plan will be upgraded immediately after successful payment
                </p>
              </div>
            )}
    </div>
  )
}

export default PaymentMethods
