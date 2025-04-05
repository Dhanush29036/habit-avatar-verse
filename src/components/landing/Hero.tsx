
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transform Your Habits with
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"> Gamified </span>
          Tracking
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
          Turn everyday routines into rewarding adventures with personalized avatars, streak rewards, and a supportive community.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg px-8 py-6 h-auto">
            Start Your Journey
          </Button>
          <Button variant="outline" className="text-lg px-8 py-6 h-auto">
            Watch Demo
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 shadow-xl transform rotate-2">
          <img
            src="/placeholder.svg"
            alt="HabitAvatarVerse App Interface"
            className="rounded-xl shadow-lg"
            width={isMobile ? 300 : 500}
            height={isMobile ? 600 : 1000}
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-purple-100 p-4 rounded-xl shadow-lg transform -rotate-3">
          <div className="bg-white rounded-lg p-3">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                🔥
              </div>
              <div className="ml-3">
                <p className="font-semibold">30 Day Streak!</p>
              </div>
            </div>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
