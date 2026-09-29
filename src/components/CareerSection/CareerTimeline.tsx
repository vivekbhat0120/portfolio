import { ScrollTimeline } from "../lightswind/scroll-timeline";
import {
  Globe,
  Layout,
  Shield,
  Plug,
  Cloud,
} from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      title: "Full Stack Developer — AgRaz LLP (3 Years)",
      description:
        "Develop and maintain responsive web interfaces with React.js, JavaScript, HTML5, CSS3, Bootstrap and Material UI. Build backend functionality and RESTful APIs with Node.js, and work with MongoDB & PostgreSQL for data modelling, storage and retrieval.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      title: "ERP / CRM Modules — User Management & Workflows",
      description:
        "Contribute to ERP and CRM modules including user management, data handling, workflow optimisation and system integrations. Implement frontend features and integrations for usability and efficient data flow.",
      icon: <Layout className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      title: "Authentication, Payments & Third-Party APIs",
      description:
        "Integrate Firebase Authentication, Google Sign-In, email verification, YouTube API and Razorpay payment gateway. Implemented subscription plans, secure auth workflows and workflow automation for SaaS platforms like MIVENT.",
      icon: <Shield className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      title: "API Integration & Data Exchange",
      description:
        "Integrating third-party APIs and REST services to enhance functionality and streamline workflows — payment processing, data retrieval, frontend-to-backend data flow and business-logic support.",
      icon: <Plug className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      title: "Testing, Debugging & Cloud Deployment",
      subtitle: "AgRaz LLP",
      description:
        "Test and debug features, resolve defects, maintain code quality with Git, GitHub, Vite & ESLint, and assist with deployment, configuration and production support on AWS and Render.",
      icon: <Cloud className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Professional Experience"
        subtitle="Full Stack Developer with 3 years at AgRaz LLP — building responsive web apps, ERP/CRM modules, and SaaS workflows with React, Node.js, REST APIs, MongoDB & PostgreSQL."
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
