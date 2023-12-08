import { ReactNode } from "react";

export enum WorkflowStepType {
  Default = "default",
  Form = "form",
  Table = "table",
  Selection = "selection",
}

type WorkflowStepDefault = {
  type: WorkflowStepType.Default;
  title?: string;
};

type WorkflowStepForm = {
  type: WorkflowStepType.Form;
  title: string;
  children: ReactNode;
};

type WorkflowStepTable = {
  type: WorkflowStepType.Table;
  title?: string;
  children?: ReactNode;
};

type WorkflowStepSelection = {
  type: WorkflowStepType.Selection;
  title?: string;
  children: ReactNode;
};

type WorkflowStepProps =
  | WorkflowStepDefault
  | WorkflowStepForm
  | WorkflowStepTable
  | WorkflowStepSelection;

export function WorkflowStep(step: WorkflowStepProps) {
  switch (step.type) {
    case WorkflowStepType.Form:
    case WorkflowStepType.Table:
    case WorkflowStepType.Selection:
      return (
        <>
          {step.title && <h1>{step.title}</h1>}
          {step.children}
        </>
      );
    default:
      return (
        <>
          {step.title && <h1>{step.title}</h1>}
          <div>
            <p>
              <strong>Default content.</strong> Elit ullamco officia dolore duis
              eu eiusmod quis minim ipsum irure sint.
            </p>
          </div>
        </>
      );
  }
}
