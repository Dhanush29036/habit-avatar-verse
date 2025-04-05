
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Zap, BarChart3, Sparkles, GalleryThumbnails, Dices, Coins } from "lucide-react";

const features = [
  {
    title: "Personalized Avatars",
    description: "Generate a unique avatar that evolves as you build new habits and achieve your goals.",
    icon: <Users className="h-12 w-12 text-purple-500" />,
  },
  {
    title: "Premium Streak Boosts",
    description: "Unlock exclusive streak-boosting features to accelerate your rewards and achievements.",
    icon: <Award className="h-12 w-12 text-purple-500" />,
  },
  {
    title: "Balanced Life Model",
    description: "Follow the 8-8-8 lifestyle model to ensure wellness across all dimensions of your life.",
    icon: <BarChart3 className="h-12 w-12 text-purple-500" />,
  },
  {
    title: "Animated Rewards",
    description: "Watch your avatar celebrate and perform animations as you complete tasks and routines.",
    icon: <Sparkles className="h-12 w-12 text-purple-500" />,
  },
  {
    title: "Community Leaderboards",
    description: "Compete with friends and fellow users on our community scoreboards.",
    icon: <GalleryThumbnails className="h-12 w-12 text-purple-500" />,
  },
  {
    title: "In-App Economy",
    description: "Earn coins to unlock new avatar accessories, animations, and premium features.",
    icon: <Coins className="h-12 w-12 text-purple-500" />,
  },
  {
    title: "Social Challenges",
    description: "Connect with users who share similar routines and participate in collaborative challenges.",
    icon: <Zap className="h-12 w-12 text-purple-500" />,
  },
  {
    title: "Daily Spin Wheel",
    description: "Spin the wheel daily for bonuses, items, and special rewards to boost your journey.",
    icon: <Dices className="h-12 w-12 text-purple-500" />,
  },
];

const FeatureSection = () => {
  return (
    <div id="features" className="container mx-auto px-4 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-16">
        <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4 bg-white">FEATURES</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Transform Your Habits Through Play</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our powerful features combine habit tracking with gamification to keep you motivated and engaged.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-purple-50 rounded-2xl p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Badge variant="secondary" className="mb-4">PREMIUM FEATURE</Badge>
          <h3 className="text-2xl font-bold mb-4">Avatar Studio</h3>
          <p className="text-gray-600 mb-4">
            Create a personalized digital representation of yourself that evolves as you maintain your habits.
            Customize features, outfits, and accessories with coins earned through consistency.
          </p>
          <div className="flex space-x-3">
            <Avatar className="w-10 h-10 border-2 border-white">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>A1</AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 border-2 border-white">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>A2</AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 border-2 border-white">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>A3</AvatarFallback>
            </Avatar>
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-medium">
              +8
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Avatar customization interface" 
              className="w-full h-64 object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
