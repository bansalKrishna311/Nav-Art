import { cn } from "@/utils/cn";

export function AboutSection() {
  return (
    <section className={cn("p-8 bg-gray-900 text-gray-200")}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
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

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <strong>Phone:</strong> <a href="tel:0420752070" className="hover:text-gray-100">0420752070</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:Nav99preet@yahoo.com.au" className="hover:text-gray-100">
                Nav99preet@yahoo.com.au
              </a>
            </li>
            <li>
              <strong>Location:</strong> Melbourne, Australia
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
