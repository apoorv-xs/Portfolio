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
  url?: string; // optional external link for the project
}

export const projects: ProjectItem[] = [
  {
    title: "THE FIND - E-commerce Website",
    description:
      "A complete UI/UX overhaul for an online retail platform, focusing on improved user flow and visual appeal.",
  image: ecommerceImage,
   url: "https://www.figma.com/design/o0Wrqa5hwpm1owt6Bdi03b/The-FIND?node-id=0-1&t=qtqo2HaMHxFgYKkl-1",
  },
  {
    title: "WAGGLE - The Pet Adoption website",
    description:
      "Designed an intuitive and responsive website for pet adoption, enhancing user experience for finding and adopting pets.",
  image: bankingImage,
   url: "https://www.figma.com/design/8VDpQD8cqO3jukptJ18f6d/Waggle?node-id=49-188&p=f&t=tJH5bV6MhzsCfkGW-0",
  },
  {
    title: "Radarhire-AI Resume Analyzer",
    description:
      "AI-powered fullstack tool that screens resumes and matches candidates to job descriptions with high accuracy.",
  image: saasImage,
   url: "https://github.com/apoorv-xs/Radarhire",
  },
  {
    title: "Healthcare Portal",
    description:
      "Created a user-friendly patient portal for a healthcare provider, streamlining appointment and record management.",
  image: healthcareImage,
  // url: "https://your-link.com/healthcare-portal",
  },
  {
    title: "Travel Booking Website",
    description:
      "Designed a responsive website for travel bookings, focusing on seamless search and reservation processes.",
  image: travelImage,
  // url: "https://your-link.com/travel-booking",
  },
  {
    title: "Fitness Tracker App",
    description:
      "Developed a mobile fitness tracking application with engaging UI and personalized workout plans.",
  image: fitnessImage,
  // url: "https://your-link.com/fitness-tracker",
  },
];
