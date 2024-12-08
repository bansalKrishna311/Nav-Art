import { cn } from "@/utils/cn";
import { Phone, Mail, MapPin } from "tabler-icons-react";
import me from "./assets/me.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className={cn("p-8 text-gray-200 bg-gray-900")}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         <div className="relative w-full md:w-[300px] h-[400px] rounded-lg shadow-lg overflow-hidden">
  <Image
    src={me}
    alt="Navpreet Kaur Kang"
    layout="fill"
    objectFit="cover"
    className="rounded-lg"
  />
</div>

        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Hello! I’m <span className="text-blue-500">Navpreet Kaur Kang</span>, an artist based in Melbourne, Australia.
              I specialize in creating captivating, meaningful art that speaks to the soul and tells a story.
            </p>
            <p className="text-lg leading-relaxed">
              Art has always been my passion and a means to express my unique perspective on the world around us. From abstract
              pieces to lifelike portraits, I aim to bring emotions and ideas to life through my work.
            </p>
            <p className="text-lg leading-relaxed">
              Feel free to reach out for collaborations, commissions, or just to share your thoughts about art. I would
              love to hear from you!
            </p>
          </div>

          {/* Contact Details */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="text-blue-500" />
                <a href="tel:0420752070" className="hover:text-gray-100">
                  0420752070
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-blue-500" />
                <a href="mailto:Nav99preet@yahoo.com.au" className="hover:text-gray-100">
                  Nav99preet@yahoo.com.au
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="text-blue-500" />
                Melbourne, Australia
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
