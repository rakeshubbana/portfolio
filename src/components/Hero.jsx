import { delay, motion } from "framer-motion";

import { styles } from "../styles";
import { coder, officeplus } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingY} absolute inset-0 top-[120px]
       max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-1 sm:h-60 max-sm:h-[505px] bg-gradient-to-b from-[#13072c] to-[#3a2f50]" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText}
          text-white typing-demo`}
          >
            Hi,
            <br className="sm:block " />
            I'm <span className="text-[#2a2338] animate-typing"> Rakesh </span>
          </h1>

          <p
            className={`${styles.heroSubText}
            mt-2 text-[30px] text-white-100 text_shadows`}
          >
            <span className="text-[#2a2338] font-bold ">I </span> develop
            quality software applications.
            <br className="sm:block " />
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 max-sm:top-[60%] w-full flex justify-center items-center">
        <motion.img
          src={coder}
          alt="Coder Animation"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="w-1/2 sm:w-1/3 lg:w-1/4 border-b-4 border-[#3a2f50] rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};
// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div
//         className={`${styles.paddingY} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
//       >
//         {/* Animation Circle */}
//         <div className="flex flex-col justify-center items-center mt-5">
//           <motion.div
//             animate={{
//               scale: [1, 1.5, 2, 1.5, 1],
//               rotate: [0, 90, 180, 270, 360],
//               borderRadius: ["20%", "50%", "20%", "50%", "20%"],
//             }}
//             initial={{
//               borderRadius: ["50%"],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//             }}
//             className="translate-y-6 w-10 h-10 rounded-full bg-gradient-to-r from-[#3a2f50] to-[#8b5cf6]"
//           />
//           <div className="w-1 sm:h-48 max-sm:h-[405px] bg-gradient-to-b from-[#13072c] to-[#3a2f50]" />
//         </div>

//         {/* Text Section */}
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white typing-demo`}>
//             Hi,
//             <br className="sm:block" />
//             I'm <span className="text-[#8b5cf6] animate-pulse">Rakesh</span>
//           </h1>

//           <p className={`${styles.heroSubText} mt-4 text-[30px] text-gray-100`}>
//             <span className="text-[#8b5cf6] font-bold">I</span> develop
//             <span className="text-[#3a2f50] font-semibold"> quality</span>{" "}
//             software applications.
//           </p>
//         </div>
//       </div>

//       {/* Office Image */}
//       <div className="absolute xs:bottom-10 bottom-32 max-sm:top-[60%] w-full flex flex-row justify-center items-center">
//         // <img src={coder} alt="" className=" border-b-2 " />
//         //{" "}
//       </div>
//     </section>
//   );
// };

export default Hero;
