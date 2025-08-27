declare module "rive-react" {
  export function useRive(config: {
    src: string;
    stateMachines?: string | string[];
    autoplay?: boolean;
  }): {
    rive: any;
    RiveComponent: React.ComponentType;
  };

  export function useStateMachineInput(
    rive: any,
    stateMachineName: string,
    inputName: string
  ): {
    value: boolean;
  } | null;
}
