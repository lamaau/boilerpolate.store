import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      className="w-screen h-screen flex-1 flex justify-center items-center"
      id="home"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-10 md:pt-12 lg:pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="font-poppins font-extrabold mb-6 sm:mt-32 mt-16 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl tracking-wide  gradient-text px-8 sm:px-20 md:px-24 lg:px-24">
            From Developer for Developer
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-white text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Don't waste your time writing from zero, use SaaS Boilerpolate to
            Save Your Time. Time is Money, Right?
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <div
              className="w-80 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
              onClick={() => console.log("clicked!")}
            >
              Live demo
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
