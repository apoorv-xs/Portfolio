import ecommerceImage from "@/assets/ecommerce-project.jpg";
import bankingImage from "@/assets/banking-app.jpg";
import saasImage from "@/assets/saas-dashboard.jpg";
import healthcareImage from "@/assets/healthcare-portal.jpg";
import travelImage from "@/assets/travel-booking.jpg";
import fitnessImage from "@/assets/fitness-tracker.jpg";

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
}

export const projects: ProjectItem[] = [
  {
    title: "THE FIND - E-commerce Website",
    description:
      "A complete UI/UX overhaul for an online retail platform, focusing on improved user flow and visual appeal.",
    image: ecommerceImage,
  },
  {
    title: "WAGGLE - The Pet Adoption website",
    description:
      "Designed an intuitive and responsive website for pet adoption, enhancing user experience for finding and adopting pets.",
    image: bankingImage,
  },
  {
    title: "Radarhire-AI Resume Analyzer",
    description:
      "AI-powered fullstack tool that screens resumes and matches candidates to job descriptions with high accuracy.",
    image: saasImage,
  },
  {
    title: "Healthcare Portal",
    description:
      "Created a user-friendly patient portal for a healthcare provider, streamlining appointment and record management.",
    image: healthcareImage,
  },
  {
    title: "Travel Booking Website",
    description:
      "Designed a responsive website for travel bookings, focusing on seamless search and reservation processes.",
    image: travelImage,
  },
  {
    title: "Fitness Tracker App",
    description:
      "Developed a mobile fitness tracking application with engaging UI and personalized workout plans.",
    image: fitnessImage,
  },
];
