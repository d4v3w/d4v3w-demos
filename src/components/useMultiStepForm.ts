import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * useMultiStepForm hook.
 */
export function useMultiStepForm(steps: ReactElement[]) {
  //const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const URL_STATE_QUERY = "step";
  const [currentStep, setCurrentStep] = useSearchParams();
  const currentStepIndex = currentStep.get(URL_STATE_QUERY);
  const selected: number = currentStepIndex ? parseInt(currentStepIndex) : 0;

  const updateQuery = (e: number) => {
    setCurrentStep(
      (prev) => {
        prev.set(URL_STATE_QUERY, e.toString());
        return prev;
      },
      { replace: true },
    );
  };

  /**
   * Go to next step in the workflow.
   */
  function next() {
    if (selected >= steps.length) updateQuery(steps.length);
    updateQuery(selected + 1);
  }

  /**
   * Go to previous step in the workflow.
   */
  function back() {
    if (selected <= 0) updateQuery(0);
    updateQuery(selected - 1);
  }

  /**
   * Go to a specfic step in the workflow.
   * @param {number} index - The index of the step to go to.
   */
  function goTo(index: number) {
    updateQuery(index);
  }

  return {
    currentStepIndex: selected,
    step: steps[selected],
    isFirstStep: selected <= 0,
    isLastStep: selected === steps.length - 1,
    next,
    back,
    goTo,
    steps,
  };
}
