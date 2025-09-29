"use client";

import { useRive, useStateMachineInput } from "rive-react";

export default function RiveButton() {
  const { rive, RiveComponent } = useRive({
    // 1. Arahkan ke file .riv kamu di folder public
    src: "/animations/MainButton.riv",
    // 2. Sebutin nama State Machine yang mau dipakai
    stateMachines: "State Machine 1", // Dari video, namanya ini
    // 3. Kita set autoplay true biar state machine-nya langsung aktif
    autoplay: true,
  });

  // 4. Kita ambil kontrol untuk input yang ada di State Machine
  // Nama 'Hover' dan 'Pressed' harus sama persis dengan yang di Rive editor
  const hoverInput = useStateMachineInput(
    rive,
    "State Machine 1",
    "Hover" // Ini input boolean (true/false)
  );
  const pressedInput = useStateMachineInput(
    rive,
    "State Machine 1",
    "Pressed" // Ini input trigger (fire)
  );

  return (
    <div
      className="w-64 h-20" // Kamu bisa sesuaikan ukurannya di sini
      onMouseEnter={() => hoverInput && (hoverInput.value = true)}
      onMouseLeave={() => hoverInput && (hoverInput.value = false)}
      onClick={() => pressedInput && (pressedInput.value = true)}
    >
      <RiveComponent />
    </div>
  );
}
