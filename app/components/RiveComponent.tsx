"use client";

import { useRive, useStateMachineInput } from "rive-react";
import { useEffect } from "react";

const STATE_MACHINE_NAME = "State Machine 1";

export default function RiveButton() {
  const { rive, RiveComponent } = useRive({
    src: "/animations/main.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const hoverInput = useStateMachineInput(rive, STATE_MACHINE_NAME, "Hover");
  const pressedInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    "Pressed"
  );

  // Debug: Log untuk memastikan Rive dan inputs loaded
  useEffect(() => {
    console.log("Rive instance:", rive);
    console.log("Hover input:", hoverInput);
    console.log("Pressed input:", pressedInput);
  }, [rive, hoverInput, pressedInput]);

  return (
    <div
      className="w-auto h-20 cursor-pointer"
      onMouseEnter={() => {
        console.log("Mouse enter - setting hover to true");
        if (hoverInput) {
          hoverInput.value = true;
        }
      }}
      onMouseLeave={() => {
        console.log("Mouse leave - setting hover to false");
        if (hoverInput) {
          hoverInput.value = false;
        }
      }}
      onMouseDown={() => {
        console.log("Mouse down - setting pressed to true");
        if (pressedInput) {
          pressedInput.value = true;
        }
      }}
      onMouseUp={() => {
        console.log("Mouse up - setting pressed to false");
        if (pressedInput) {
          pressedInput.value = false;
        }
      }}
    >
      <RiveComponent />
    </div>
  );
}
