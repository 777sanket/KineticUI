// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function DustCloudBackground() {
//   return (
//     <div className="relative w-full h-[400px] overflow-hidden bg-black">
//       {/* Dust cloud 1 */}
//       {/* <motion.div
//         className="absolute w-[120%] h-[80%] bg-[#c7b299] opacity-20 blur-2xl"
//         style={{
//           top: "10%",
//           left: "-10%",
//           borderRadius: "50% 50% 40% 60% / 30% 50% 70% 50%", // organic shape
//         }}
//         animate={{
//           x: ["0%", "10%", "-5%"],
//         }}
//         transition={{
//           duration: 12,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       /> */}

//       {/* Dust cloud 2 */}
//       {/* <motion.div
//         className="absolute w-[150%] h-[90%] bg-[#043c81]  blur-3xl"
//         style={{
//           top: "20%",
//           left: "-20%",
//           borderRadius: "50% 40% 60% 50% / 50% 60% 40% 60%",
//         }}
//         animate={{
//           x: ["-5%", "15%", "0%"],
//         }}
//         transition={{
//           duration: 16,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       /> */}

//       {/* Dust cloud 3 (background) */}
//       {/* <motion.div
//         className="absolute w-[30%]  bg-[#088fbc]  blur-[100px]"
//         style={{
//           top: "40%",
//           left: "35%",
//           borderRadius: "50% 50% 40% 60% / 30% 50% 70% 50%",
//         }}
//         animate={{
//           // left: ["-10%", "90%"],
//           height: ["10", "100%"],
//         }}
//         transition={{
//           duration: 4, // Adjust this value to control the speed (lower = faster, higher = slower)
//           ease: "easeInOut",
//           // repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       /> */}

//       {/* Dust cloud 3 (foreground) */}
//       <motion.div
//         className="absolute  bg-[#107505]  blur-[80px] border-2 border-[#107505]"
//         style={{
//           // bottom: "0",
//           top: "0%",
//           left: "35%",
//           borderRadius: "60% 40% 50% 50% / 50% 60% 40% 40%",
//           height: "0%",
//           width: "10%",
//           // x: "",
//         }}
//         animate={{
//           // x: ["0%", "30%", "5%"],
//           height: ["0%", "80%"],
//           width: ["0%", "30%"],
//           y: ["60%", "60%"],
//         }}
//         transition={{
//           duration: 3,
//           ease: "easeInOut",
//           // repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       />

//       {/* Dust cloud middle*/}
//       {/* <motion.div
//         className="absolute w-[130%] h-[70%] bg-[#9b524d]  blur-[80px]"
//         style={{
//           top: "20%",
//           left: "-30%",
//           borderRadius: "60% 40% 50% 50% / 50% 60% 40% 40%",
//         }}
//         animate={{
//           x: ["0%", "20%", "5%"],
//           opacity: [40, 0.3, 0.1],
//         }}
//         transition={{
//           duration: 14,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       /> */}

//       {/* Optional top overlay for extra dust float */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.05), transparent 70%)",
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-center h-full">
//         <h2 className="text-white text-xl font-semibold">
//           Drifting Dust Cloud
//         </h2>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { motion } from "motion/react";

const WaveBackground2Preview: React.FC = () => {
  const waveColors = [
    {
      color: "rgba(138, 43, 226, 0.2)",
      shadow: "0 0 15px rgba(138, 43, 226, 0.4)",
      offset: 0,
    },
    {
      color: "rgba(123, 31, 162, 0.25)",
      shadow: "0 0 12px rgba(123, 31, 162, 0.5)",
      offset: 20,
    },
    {
      color: "rgba(147, 51, 234, 0.2)",
      shadow: "0 0 20px rgba(147, 51, 234, 0.3)",
      offset: 40,
    },
    {
      color: "rgba(168, 85, 247, 0.15)",
      shadow: "0 0 10px rgba(168, 85, 247, 0.4)",
      offset: 60,
    },
    {
      color: "rgba(139, 92, 246, 0.18)",
      shadow: "0 0 18px rgba(139, 92, 246, 0.35)",
      offset: 80,
    },
  ];

  return (
    <div
      className="relative w-full h-64 overflow-hidden rounded-lg"
      style={{
        background: "linear-gradient(135deg, #1a1025 0%, #2d1b47 100%)",
      }}
    >
      {/* Sine wave lines with shadowy glow */}
      {waveColors.map((wave, index) => (
        <motion.div
          key={index}
          className="absolute h-[2px] w-[200%] left-[-50%]"
          style={{
            backgroundColor: wave.color,
            boxShadow: wave.shadow,
            bottom: `${15 + index * 12}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            d: [
              "M0,40 Q250,10 500,40 T1000,40",
              "M0,20 Q250,60 500,20 T1000,20",
              "M0,40 Q250,10 500,40 T1000,40",
            ],
            x: [`${wave.offset}%`, `${wave.offset - 100}%`, `${wave.offset}%`],
          }}
          transition={{
            duration: 15 + index * 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}

      {/* Additional dusty glow effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Overlay to enhance the waves */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(26, 16, 37, 0.1) 0%, rgba(45, 27, 71, 0) 50%, rgba(26, 16, 37, 0.2) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <p className="text-white text-xl font-bold">Sine Wave Background</p>
      </div>
    </div>
  );
};

export default WaveBackground2Preview;
