"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-5xl mx-auto pb-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-16 md:gap-10"
          >
            {/* Left: Sticky year label + dot */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Dot */}
              <div className="h-10 w-10 absolute left-[5px] md:left-3 rounded-full bg-slate-950 border-2 border-cyan-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                <div className="h-3 w-3 rounded-full bg-cyan-400" />
              </div>
              {/* Year label (hidden on mobile) */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-slate-500">
                {item.title}
              </h3>
            </div>

            {/* Right: Content */}
            <div className="relative pl-20 pr-4 md:pl-6 w-full">
              {/* Year label (mobile only) */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Animated vertical line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-slate-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-cyan-500 via-cyan-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
