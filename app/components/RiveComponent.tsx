import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useCallback } from "react";

interface RiveButtonProps {
  src: string;
  stateMachineName?: string;
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
}

const RiveButton: React.FC<RiveButtonProps> = ({
  src,
  stateMachineName = "State Machine 1",
  onClick,
  className = "",
  width = 200,
  height = 100,
}) => {
  const { rive, RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachineName,
    autoplay: true,
  });

  // Input untuk trigger hover/click states
  const onHoverInput = useStateMachineInput(rive, stateMachineName, "Hover");
  const onPressInput = useStateMachineInput(rive, stateMachineName, "Pressed");

  const handleMouseEnter = useCallback(() => {
    if (onHoverInput) {
      onHoverInput.value = true;
    }
  }, [onHoverInput]);

  const handleMouseLeave = useCallback(() => {
    if (onHoverInput) {
      onHoverInput.value = false;
    }
  }, [onHoverInput]);

  const handleMouseDown = useCallback(() => {
    if (onPressInput) {
      onPressInput.value = true;
    }
  }, [onPressInput]);

  const handleMouseUp = useCallback(() => {
    if (onPressInput) {
      onPressInput.value = false;
    }
    if (onClick) {
      onClick();
    }
  }, [onPressInput, onClick]);

  return (
    <div
      className={`cursor-pointer ${className}`}
      style={{ width, height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <RiveComponent width={width} height={height} />
    </div>
  );
};

export default RiveButton;
