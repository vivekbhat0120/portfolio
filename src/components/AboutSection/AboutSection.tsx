import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        className="flex flex-col gap-8 items-center text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Passionate about <span className="text-gradient-primary">Digital Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full Stack Developer with 3 years of experience at AgRaz LLP building responsive web
              applications, ERP/CRM modules, and SaaS workflows. Hands-on with React.js, JavaScript (ES6+),
              HTML5, CSS3, SCSS/SASS, Bootstrap, and Material UI on the frontend, and Node.js, REST APIs,
              MongoDB, and PostgreSQL on the backend. Experienced in Firebase Authentication, Google Sign-In,
              email verification, YouTube API, Razorpay payment gateway, and deployments on AWS & Render.
              Focused on clean code, reliable functionality, and user-friendly digital experiences.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

