import { WorkflowStep, WorkflowStepType } from "./WorkflowStep";

export function WorkflowPageDefault() {
  return (
    <WorkflowStep key="one" type={WorkflowStepType.Default}></WorkflowStep>
  );
}
