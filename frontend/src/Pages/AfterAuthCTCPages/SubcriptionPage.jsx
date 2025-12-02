import React, { useMemo, useState, useEffect } from "react";
import { PricingModel, getCurrentPlan as currentPlan } from "../../utils/constants";
import PageHeaders from "../../utils/AfterAuthUtils/PageHeaders";
// import DownGradablePlans from "../../Components/SubscriptionComponents/DownGradablePlans";
import CurrentPlanCard from "../../Components/AfterAuthComponent/SubscriptionComponents/CurrentPlanCard";
import UpgradablePlans from "../../Components/AfterAuthComponent/SubscriptionComponents/UpgradablePlans";
import EnterPriseContact from "../../Components/AfterAuthComponent/SubscriptionComponents/EnterPriseContact";
import DownGradablePlans from "../../Components/AfterAuthComponent/SubscriptionComponents/DownGradablePlans";

const rupee = (n) => (n === 0 ? "Free" : `₹${n.toLocaleString("en-IN")}`);

export default function SubscriptionsPage() {
  const [selectedUpgrade, setSelectedUpgrade] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("net"); 

  const sortedPlans = useMemo(() => {
    const priced = PricingModel.filter((p) => typeof p.pricing === "number").sort((a,b) => (a.pricing||0) - (b.pricing||0));
    const unpriced = PricingModel.filter((p) => typeof p.pricing !== "number");
    return [...priced, ...unpriced];
  }, []);

  
  const upgradablePlans = useMemo(() => {
    const currPrice = typeof currentPlan?.pricing === "number" ? currentPlan.pricing : 0;
    return sortedPlans.filter((p) => typeof p.pricing === "number" && p.pricing > currPrice );
  }, [sortedPlans]);

  const downgradePlan = useMemo(() => {
    const currPrice = typeof currentPlan?.pricing === "number" ? currentPlan.pricing : 0;
    return sortedPlans.filter((p) => typeof p.pricing === "number" && p.pricing < currPrice );
  },[])


  const allFeatures = useMemo(() => {
    const set = new Set();
    sortedPlans.forEach((p) => (p.features || []).forEach((f) => set.add(f)));
    return Array.from(set);
  }, [sortedPlans]);


  useEffect(() => {
    if (UpgradablePlans.length > 0) setSelectedUpgrade(upgradablePlans[0]);
  }, [upgradablePlans]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Page Header */}
      <PageHeaders 
        header={'Subscription & Billing'}
        subheader={'Manage your plan, view usage, and upgrade anytime'}
      />

      {/* Current Plan Card */}
      <CurrentPlanCard currentPlan={currentPlan} rupee={rupee}/>

      {/* Upgrade Section */}
      <UpgradablePlans
        upgradablePlans={upgradablePlans}
        selectedUpgrade={selectedUpgrade}
        setSelectedUpgrade={setSelectedUpgrade}
        rupee={rupee}
        setShowComparison={setShowComparison}
        showComparison={showComparison}
        allFeatures={allFeatures}
        currentPlan={currentPlan}
        setPaymentMethod={setPaymentMethod}
        paymentMethod={paymentMethod}
      />

      {/* Downgrade Section */}
      <DownGradablePlans
        downgradePlan={downgradePlan}
       
        selectedUpgrade={selectedUpgrade}
        setSelectedUpgrade={setSelectedUpgrade}
        rupee={rupee}
        
        currentPlan={currentPlan}

      />

      {/* Enterprise Contact */}
      <EnterPriseContact/>
    </div>
  );
}