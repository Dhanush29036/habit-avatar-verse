
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Designer",
    testimonial: "Since using HabitAvatarVerse, I've maintained a morning workout routine for over 3 months! The avatar rewards make it fun to stay consistent.",
    avatar: "/placeholder.svg",
    initials: "AJ",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Marketing Manager",
    testimonial: "The community leaderboard keeps me motivated. I'm currently on a 45-day streak for meditation, and I've never felt more focused.",
    avatar: "/placeholder.svg",
    initials: "SW",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    testimonial: "I love how my avatar evolves as I build better habits. The 8-8-8 model has helped me find a much better work-life balance.",
    avatar: "/placeholder.svg",
    initials: "MC",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="container mx-auto px-4 py-20 bg-gray-50">
      <div className="text-center mb-16">
        <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4 bg-white">TESTIMONIALS</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Success Stories</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how HabitAvatarVerse has helped people transform their daily routines into lasting habits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">"{testimonial.testimonial}"</p>
            
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gray-200" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
            <div className="text-purple-600 font-semibold mb-2">OUR IMPACT</div>
            <h3 className="text-3xl font-bold mb-4">Join thousands building better habits</h3>
            <p className="text-gray-600">
              Our community is growing every day with users reporting significant improvements in their daily routines.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">25K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1.2M</div>
              <div className="text-gray-600">Habits Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
