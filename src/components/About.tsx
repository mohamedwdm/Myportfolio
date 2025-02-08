import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div >
          <motion.div
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-full overflow-hidden border-4 border-blue-500"
            variants={fadeInUp}
          >
            <img
              src="/mo.jpg"
              alt="Mohamed Awad"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div></div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-2xl md:text-2xl text-gray-900" variants={fadeInUp}>
              Hi, I'm Piyush Agarwal, a passionate Full Stack Developer and
              educator. I create content on YouTube through my channel
              RoadsideCoder, where I share my knowledge and experience with the
              developer community.
            </motion.p>

            <motion.p className="text-2xl md:text-2xl text-gray-900" variants={fadeInUp}>
              With extensive experience in modern web technologies and a strong
              foundation in both frontend and backend development, I help
              businesses build scalable solutions and mentor aspiring developers
              to achieve their goals.
            </motion.p>

            {/* <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">3+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">125K+</h3>
                <p className="text-gray-600">YouTube Subscribers</p>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
