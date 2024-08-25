import React from "react";
import PropTypes from "prop-types";

// Utility function to combine class names
export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// Prop types for the Marquee component
Marquee.propTypes = {
  className: PropTypes.string,
  reverse: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  children: PropTypes.node,
  vertical: PropTypes.bool,
  repeat: PropTypes.number,
};
