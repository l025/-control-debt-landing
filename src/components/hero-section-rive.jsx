"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function HeroSectionRive() {
  const {
    rive,
    setCanvasRef,
    setContainerRef,
    canvas: canvasRef,
    container: canvasContainerRef,
  } = useRive(
    {
      src: "/control.riv",
      stateMachines: "defaultState",
      layout: new Layout({
        fit: Fit.Contain,
        alignment: Alignment.CenterRight,
      }),
      autoplay: true,
    },
    {
      shouldResizeCanvasToContainer: true,
    }
  );

  return (
    <div
      className="canvas-containe absolute flex justify-start items-end w-full h-full max-w-full max-h-full left-0 -top-[10%] xl:top-0 overflow-hidden"
      ref={setContainerRef}
    >
      <canvas
        className="block relative w-full h-full max-h-screen max-w-screen align-top"
        ref={setCanvasRef}
      ></canvas>
    </div>
  );
}
