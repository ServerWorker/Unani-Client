"use client";

import { motion } from "motion/react";
import KineticTestimonial from "@/components/ui/testimonials-with-verticalmarquee-utils/kinetic-testimonials";

const testimonials = [
  {
    name: "Mohammed Farooq",
    handle: "Patient · Toli Chowki",
    review:
      "Consulting with Dr. Ibrahim brought clarity and peace of mind. The holistic lifestyle guidance and Unani herbal regimen were explained with exceptional patience and care.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Syeda Naseem Begum",
    handle: "Patient Family · Mehdipatnam",
    review:
      "My father has been visiting Dr. Ibrahim Unani Clinic for his general cardiovascular wellness checks. The doctor takes genuine time to listen to every concern before advising.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Abdul Rahman",
    handle: "Regular Visitor · Banjara Hills",
    review:
      "A serene and professional clinic environment. The traditional Unani pulse diagnosis and dietary regimen gave me noticeable relief in stamina and everyday wellbeing.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. K. S. Rao",
    handle: "Healthcare Colleague · Hyderabad",
    review:
      "Dr. Ibrahim's clinic maintains genuine medical integrity. Transparent communication, no exaggerated promises, and deeply grounded in classical Unani methodology.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Fatima Zehra",
    handle: "Patient · Attapur",
    review:
      "The clinic staff is courteous, punctual, and attentive. The natural approach prescribed for heart wellness and stress reduction has been deeply beneficial.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Mirza Ahmed Ali",
    handle: "Senior Patient · Masab Tank",
    review:
      "Appreciate Dr. Ibrahim's honest and thorough consultations. He carefully coordinates traditional herbal remedies with existing allopathic prescriptions.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Zainab Sultana",
    handle: "Patient · Jubilee Hills",
    review:
      "The peaceful consultation room and thorough pulse examination made all the difference. Dr. Ibrahim's dietary modifications helped restore my vitality naturally.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Tariq Mansoor",
    handle: "Patient · Shaikpet",
    review:
      "Finding an authentic Unani practitioner dedicated to cardiac health in Hyderabad was a blessing. Transparent guidance and caring follow-up visits.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
  },
];

export default function TestimonialsVerticalMarquee() {
  const titleWords = "Trusted by generations of patients & families".split(" ");

  return (
    <section className="relative w-full bg-background py-8">
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="flex flex-col items-center gap-3 text-center py-6 md:py-10 max-w-3xl px-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400">
            Patient Feedback & Experiences
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            {titleWords.map((word, index) => (
              <motion.span
                key={`title-${word}-${index}`}
                initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm md:text-base text-muted-foreground max-w-2xl px-4"
          >
            Read authentic experiences from patients and families who trust Dr. Ibrahim Unani Heart Clinic for personalized cardiovascular wellness and holistic traditional healing.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full"
        >
          <KineticTestimonial
            testimonials={testimonials}
            title=""
            subtitle=""
            desktopColumns={5}
            tabletColumns={3}
            mobileColumns={2}
            speed={1}
          />
        </motion.div>
      </div>
    </section>
  );
}
