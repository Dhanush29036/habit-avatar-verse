
import { Badge } from "@/components/ui/badge";
import { UserCircle2, ListTodo, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Avatar",
    description: "Set up your profile and generate a personalized avatar that represents you.",
    icon: <UserCircle2 className="h-10 w-10 text-purple-500" />,
  },
  {
    number: "02",
    title: "Track Your Habits",
    description: "Log your daily activities and build consistent streaks across different areas of life.",
    icon: <ListTodo className="h-10 w-10 text-purple-500" />,
  },
  {
    number: "03",
    title: "Earn & Redeem",
    description: "Collect coins and rewards as you maintain streaks to unlock premium content.",
    icon: <Trophy className="h-10 w-10 text-purple-500" />,
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4 bg-white">HOW IT WORKS</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple Steps to Success</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Getting started is easy. Follow these steps to begin your journey toward better habits.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center md:w-1/3 mb-10 md:mb-0 relative">
            <div className="bg-purple-100 rounded-full p-6 mb-6">
              {step.icon}
            </div>
            <div className="bg-gray-200 text-gray-800 font-bold rounded-full w-8 h-8 flex items-center justify-center absolute top-0 right-0 md:relative md:top-auto md:right-auto md:mb-4 md:mt-2">
              {step.number}
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 max-w-xs">{step.description}</p>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/3 transform translate-x-1/2">
                <ArrowRight className="h-8 w-8 text-gray-300" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Balanced Life Integration</h3>
          <p className="mb-4">
            Our platform promotes a holistic 8-8-8 lifestyle model—8 hours of sleep, 
            8 hours of work, and 8 hours of leisure—ensuring you maintain balance 
            across all dimensions of your day.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">8</div>
              <div className="text-sm opacity-80">Hours of Sleep</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">8</div>
              <div className="text-sm opacity-80">Hours of Work</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">8</div>
              <div className="text-sm opacity-80">Hours of Leisure</div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 md:pl-8">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="bg-white/10 rounded-lg p-6 flex items-center justify-center h-48">
              <div className="text-center">
                <div className="font-semibold mb-2">Daily Balance Score</div>
                <div className="text-4xl font-bold mb-2">87%</div>
                <div className="text-sm opacity-70">Well balanced day!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
