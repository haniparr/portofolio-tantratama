"use client";

import { useRive, useStateMachineInput } from "rive-react";

// Ganti nama ini agar SAMA PERSIS dengan nama State Machine di Rive Editor Anda
// Berdasarkan nama animasi, kemungkinan namanya "Main-Button"
const STATE_MACHINE_NAME = "Main-Button";

export default function RiveButton() {
  const { rive, RiveComponent } = useRive({
    src: "/animations/solarium_interactive_button..riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  // Menggunakan nama input 'isHovered' dari file Rive Anda
  const hoverInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    "isHovered"
  );

  // Menggunakan nama input 'isPressed' dari file Rive Anda
  const pressInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    "isPressed"
  );

  return (
    <div
      className="w-auto h-20 cursor-pointer" // Ukuran bisa disesuaikan
      // Saat mouse masuk, set isHovered menjadi true
      onMouseEnter={() => hoverInput && (hoverInput.value = true)}
      // Saat mouse keluar, set isHovered & isPressed menjadi false
      onMouseLeave={() => {
        if (hoverInput) hoverInput.value = false;
        if (pressInput) pressInput.value = false;
      }}
      // Saat tombol mouse ditekan, set isPressed menjadi true
      onMouseDown={() => pressInput && (pressInput.value = true)}
      // Saat tombol mouse dilepas, set isPressed menjadi false
      onMouseUp={() => pressInput && (pressInput.value = false)}
    >
      <RiveComponent />
    </div>
  );
}
