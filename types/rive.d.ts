declare module "@rive-app/react-canvas" {
  export function useRive(config: any): any;
  export function useStateMachineInput(
    rive: any,
    stateMachine: string,
    inputName: string
  ): any;
}
