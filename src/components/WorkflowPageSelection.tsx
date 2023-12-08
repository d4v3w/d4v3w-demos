import { Carousel } from "./Carousel";
import { CarouselChild } from "./CarouselChild";
import { WorkflowStep, WorkflowStepType } from "./WorkflowStep";

type Data = {
  items: CarouselChild[];
  selection: string;
};

type Props = Data & {
  updateFields: (fields: Partial<Data>) => void;
};

export function WorkflowPageSelection(props: Props) {
  return (
    <WorkflowStep type={WorkflowStepType.Selection} title="Selector">
      <Carousel {...props} />
    </WorkflowStep>
  );
}
