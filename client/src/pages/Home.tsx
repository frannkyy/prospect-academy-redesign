import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Calendar, Users, Trophy, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  const programs = [
    {
      id: "academy",
      name: "The Academy",
      description: "Elite year-round training with integrated academics",
      icon: Trophy,
      features: ["Professional Coaching", "Elite Academics", "Nutrition"],
      cta: "Schedule Discovery Call",
      color: "from-blue-600 to-blue-700",
    },
    {
      id: "camps",
      name: "Summer Camps",
      description: "Intensive training camps for all skill levels",
      icon: Calendar,
      features: ["NIKE Camps", "Elite Camps", "Skill Development"],
      cta: "Register Now",
      color: "from-amber-500 to-amber-600",
    },
    {
      id: "charter",
      name: "Charter School",
      description: "Full-time academic program with soccer integration",
      icon: BookOpen,
      features: ["Rigorous Academics", "Soccer Training", "Character Development"],
      cta: "Learn More",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: "development",
      name: "Personal Development",
      description: "Specialized coaching and mentoring programs",
      icon: Users,
      features: ["1-on-1 Coaching", "Mental Performance", "Game Analysis"],
      cta: "Explore Programs",
      color: "from-purple-600 to-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Conversion Bar */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">
        <div className="container flex flex-col sm:flex-row items-center justify-between py-3 gap-3">
          <div className="text-xs sm:text-sm font-semibold text-center sm:text-left">Limited Spots Available for 2025-2026</div>
          <div className="flex gap-2 flex-wrap justify-center">
            <Button
              size="sm"
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 text-xs sm:text-sm"
            >
              Discovery Call
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 text-xs sm:text-sm"
            >
              Shadow Day
            </Button>
            <Button
              size="sm"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-xs sm:text-sm"
            >
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-slate-900 text-sm sm:text-lg truncate">Prospect Soccer Academy</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
            <a href="#academy" className="hover:text-amber-500 transition">Academy</a>
            <a href="#camps" className="hover:text-amber-500 transition">Camps</a>
            <a href="#programs" className="hover:text-amber-500 transition">Programs</a>
            <a href="#about" className="hover:text-amber-500 transition">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Diagonal Cut */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 py-16 md:py-32">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                ELITE SOCCER ACADEMY
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Designed for <span className="text-amber-400">Development</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                European-style soccer academy built to nurture aspiring players with elite coaching, rigorous academics, and character development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm sm:text-base">
                  Schedule Discovery Call
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 text-sm sm:text-base"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663684129273/hFxedGvnXGjLBHsTWU62zo/hero-player-training-T384sm3PVVwDCLR8U9Tn4B.webp"
                alt="Player Training"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Diagonal Cut */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ marginBottom: "-1px" }}
        >
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="white"></path>
        </svg>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Professional Minutes", value: "33K+" },
              { label: "Years of Experience", value: "28+" },
              { label: "Professional Matches", value: "400+" },
              { label: "5-Star Reviews", value: "99+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Programs Designed for Every Stage</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              From summer camps to year-round academy training, we offer pathways for every player's journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <Card
                  key={program.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setActiveProgram(activeProgram === program.id ? null : program.id)}
                >
                  <div className={`h-32 bg-gradient-to-r ${program.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Icon className="w-full h-full p-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{program.name}</h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-1">{program.description}</p>
                      </div>
                      <Icon className={`w-8 h-8 text-amber-500 flex-shrink-0`} />
                    </div>

                    {activeProgram === program.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="space-y-2">
                          {program.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold mt-4 text-sm sm:text-base">
                          {program.cta}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Built by Elite Coaches</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                Our founders bring decades of professional experience from European Premier League academies and international competitions.
              </p>
              <ul className="space-y-3 mb-6 md:mb-8">
                {[
                  "33K+ professional minutes in European leagues",
                  "28+ years of playing and coaching experience",
                  "400+ professional matches across top divisions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white text-sm sm:text-base">
                Meet Our Team
              </Button>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663684129273/hFxedGvnXGjLBHsTWU62zo/hero-team-group-UQsaWDCZrgPJtqShGihCNN.webp"
              alt="Team"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 md:mb-12 text-center">What Parents & Players Say</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "My son has grown tremendously as both a player and student. The holistic approach is exactly what we were looking for.",
                author: "Maria Garcia",
                role: "Parent",
              },
              {
                quote: "The coaching quality is world-class. I feel like I'm training at a European academy right here in California.",
                author: "Alex Rodriguez",
                role: "Player, U-17",
              },
              {
                quote: "Prospect Soccer Academy combines elite training with genuine character development. Highly recommend!",
                author: "James Chen",
                role: "Parent",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 border-l-4 border-amber-500">
                <p className="text-sm sm:text-base text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-slate-900 text-sm sm:text-base">{testimonial.author}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6">Ready to Join the Academy?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Limited spots available for the 2025-2026 academic year. Schedule your discovery call today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm sm:text-base">
              Schedule Discovery Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 text-sm sm:text-base"
            >
              Register for Shadow Day
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            <div>
              <div className="font-bold text-white mb-3 text-sm">Prospect Soccer Academy</div>
              <p className="text-xs">Elite soccer training and academics for aspiring champions.</p>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-sm">Programs</div>
              <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-amber-400">The Academy</a></li>
                <li><a href="#" className="hover:text-amber-400">Summer Camps</a></li>
                <li><a href="#" className="hover:text-amber-400">Charter School</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-sm">Company</div>
              <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-amber-400">About</a></li>
                <li><a href="#" className="hover:text-amber-400">Contact</a></li>
                <li><a href="#" className="hover:text-amber-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-sm">Follow Us</div>
              <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-amber-400">Instagram</a></li>
                <li><a href="#" className="hover:text-amber-400">Facebook</a></li>
                <li><a href="#" className="hover:text-amber-400">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm">
            <p>&copy; 2025 Prospect Soccer Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
