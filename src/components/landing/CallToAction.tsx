
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with basic habit tracking",
    features: [
      "Personalized avatar creation",
      "Up to 5 habit trackers",
      "Basic habit statistics",
      "Community leaderboard access",
      "Daily spin wheel rewards",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    description: "Enhance your habit journey with advanced features",
    features: [
      "Everything in Free plan",
      "Unlimited habit trackers",
      "Premium streak boosters",
      "Exclusive avatar accessories",
      "Advanced analytics and insights",
      "Priority customer support",
      "Ad-free experience",
    ],
    buttonText: "Start 7-Day Free Trial",
    buttonVariant: "default" as const,
    popular: true,
  },
];

const CallToAction = () => {
  return (
    <div id="pricing" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4 bg-white">PRICING</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the plan that fits your habit-building journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow-sm p-8 border-2 ${
              plan.popular ? "border-purple-500 relative" : "border-transparent"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-500">POPULAR</Badge>
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-500 ml-2">/{plan.period}</span>
            </div>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="mb-8">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center mb-3">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button 
              variant={plan.buttonVariant} 
              className={`w-full ${
                plan.popular ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600" : ""
              }`}
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Your Habit Journey?</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are transforming their habits and achieving their goals with HabitAvatarVerse.
        </p>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-6 text-lg h-auto">
          Get Started Now
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
