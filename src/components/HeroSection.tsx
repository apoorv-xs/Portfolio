import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import profilePhotoHover from "@/assets/profile-photo-hover.jpg";

const HeroSection = () => {

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center relative overflow-hidden hero-section">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Mobile: Profile Photo comes first */}
          <div className="flex justify-center lg:justify-end group hero-slide-right hero-content-delay-1 lg:pr-8 order-1 lg:order-2">
            <div className="relative w-64 h-64">
              {/* Orb effects behind the profile photo - contained within the same dimensions */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="orb orb-1 absolute"></div>
                <div className="orb orb-2 absolute"></div>
                <div className="orb orb-3 absolute"></div>
              </div>
              
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] group-hover:scale-105 relative z-20 bg-background profile-photo-container">
                {/* Main profile photo */}
                <img
                  src={profilePhoto}
                  alt="Apoorv - UI/UX Designer & Full-Stack Developer"
                  className="w-full h-full object-cover profile-photo-main"
                />
                {/* Hover profile photo - Replace with your new photo */}
                <img
                  src={profilePhotoHover}
                  alt="Apoorv - UI/UX Designer & Full-Stack Developer (Hover)"
                  className="w-full h-full object-cover profile-photo-hover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-hero-accent/20 to-hero-accent/10 rounded-full z-20 transition-all duration-500 group-hover:scale-125 group-hover:rotate-45 floating"></div>
              {/* Additional decorative element */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full z-20 transition-all duration-500 group-hover:scale-150 group-hover:-rotate-45 opacity-0 group-hover:opacity-100 floating" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>

          {/* Mobile: Text content comes second */}
          <div className="space-y-8 hero-slide-left lg:pl-8 order-2 lg:order-1">
            <div className="space-y-6 hero-content-delay-1">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="inline-block relative mr-4 group cursor-pointer transition-transform duration-300 hover:scale-105">
                  <span className="inline-block transition-all duration-1000 group-hover:text-primary">
                    H
                  </span>
                  <span className="inline-block transition-all duration-1000 group-hover:text-primary">
                    i
                  </span>
                  <span className="inline-block transition-all duration-1000 group-hover:text-primary">
                    ,
                  </span>
                </span>
                <span className="inline-block relative mr-4 group cursor-pointer transition-transform duration-300 hover:scale-105">
                  <span className="inline-block transition-all duration-1000 group-hover:text-primary">
                    I
                  </span>
                  <span className="inline-block transition-all duration-1000 group-hover:text-primary">
                    '
                  </span>
                  <span className="inline-block transition-all duration-1000 group-hover:text-primary">
                    m
                  </span>
                </span>
                <span className="inline-block relative text-white group cursor-pointer transition-transform duration-300 hover:scale-105">
                  <span className="inline-block transition-all duration-1000 group-hover:text-gray-300">
                    A
                  </span>
                  <span className="inline-block transition-all duration-1000 group-hover:text-gray-300">
                    p
                  </span>
                  <span className="inline-block transition-all duration-1000 group-hover:text-gray-300">
                    o
                  </span>
                  <span className="inline-block transition-all duration-1000 group-hover:text-gray-300">
                    o
                  </span>
                  <span className="inline-block transition-all duration-1000 group-hover:text-gray-300">
                    r
                  </span>
                  <span className="inline-block transition-all duration-1000 group-hover:text-gray-300">
                    v
                  </span>
                </span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-muted-foreground whitespace-nowrap cursor-pointer transition-all duration-300 hover:text-primary hover:scale-105">
                  UI/UX Designer & Full-Stack Developer
                </h2>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl cursor-pointer transition-all duration-300 hover:text-gray-300 hover:scale-[1.02]">
                  Crafting digital experiences that blend beautiful design with powerful functionality. 
                  From concept to deployment, I build solutions that make a difference.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 hero-content-delay-2">
              <Link to="/portfolio" className="group">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <span className="flex items-center">
                    View My Work
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                    →
                  </span>
                </Button>
              </Link>
              
              <a href="#contact" className="group">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <span className="flex items-center">
                    Let's Connect
                  </span>
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                    →
                  </span>
            </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
