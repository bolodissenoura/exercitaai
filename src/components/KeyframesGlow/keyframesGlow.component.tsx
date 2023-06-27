import React from "react";
interface KeyframesGlowInterface {
  position: "right" | "left";
}

export function KeyframesGlow(props: KeyframesGlowInterface) {
  return (
    <>
      <div
        className={
          props.position === "right"
            ? `features-gradients-right`
            : `features-gradients-left`
        }>
        <div className="features-gradient fBall"></div>
        <div className="features-gradient sBall"></div>
        <div className="features-gradient tBall"></div>
      </div>
    </>
  );
}
