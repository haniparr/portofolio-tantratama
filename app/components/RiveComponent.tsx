"use client";

import { useRive, useStateMachineInput } from "rive-react";

const STATE_MACHINE_NAME = "State Machine 1";

export default function RiveButton() {
  const { rive, RiveComponent } = useRive({
    src: "/animations/main.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const hoverInput = useStateMachineInput(rive, STATE_MACHINE_NAME, "Hover");
  const pressInput = useStateMachineInput(rive, STATE_MACHINE_NAME, "Pressed");

  return (
    <div
      className="w-auto h-20 cursor-pointer"
      onMouseEnter={() => {
        if (hoverInput) {
          hoverInput.value = true;
        }
      }}
      onMouseLeave={() => {
        if (hoverInput) {
          hoverInput.value = false;
        }
      }}
      onMouseDown={() => {
        if (pressInput) {
          pressInput.value = true;
        }
      }}
      onMouseUp={() => {
        if (pressInput) {
          pressInput.value = false;
        }
      }}
    >
      <RiveComponent />
    </div>
  );
}
