import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutPage = () => {
  // Download handled via anchor link to /resume.pdf

  // Removed secondary "Contact Me" CTA per request

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* About Me Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-center mb-12 fade-in-up">
            About Me
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Profile Picture */}
            <div className="flex justify-center lg:justify-center lg:col-span-1 lg:-ml-8 lg:-mt-8">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Alex - UI/UX Designer and Full-Stack Developer"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl fade-in-up"
                />
              </div>
            </div>

            <div className="space-y-6 fade-in-up-delay-1 lg:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Apoorv, a passionate UI/UX Designer and Full-Stack Developer focused on creating 
                intuitive, beautiful, and functional digital experiences. I bridge the gap between 
                aesthetics and functionality, ensuring every project delivers both visual appeal and 
                seamless user interaction.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in design encompasses the entire process - from user research and wireframing 
                to prototyping and visual design. My full-stack expertise allows me to understand technical 
                feasibility, working across front-end interfaces to back-end logic and database management.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm driven by the challenge of solving complex problems and delivering high-quality solutions. 
                Whether it's crafting seamless user flow, designing a pixel-perfect interface, or optimizing 
                database queries, I'm committed to excellence. Let's build something amazing together!
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 fade-in-up-delay-2">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium rounded-lg transition-all duration-200 hover:scale-105">
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
