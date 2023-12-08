import { FormEvent, useState } from "react";
import { Button } from "./Button";
import styles from "./WorkflowApp.module.css";
import { WorkflowPageDefault } from "./WorkflowPageDefault";
import { WorkflowPageForm } from "./WorkflowPageForm";
import { WorkflowPageTable } from "./WorkflowPageTable";
import { useMultiStepForm } from "./useMultiStepForm";

type Data = {
  selection: string;
  name: string;
  number: string;
  month: string;
  year: string;
  cvv: string;
  terms: string;
};

const INIT_DATA: Data = {
  selection: "",
  name: "",
  number: "",
  month: new Date().getMonth().toString(),
  year: new Date().getFullYear().toString(),
  cvv: "",
  terms: "",
};

export function WorkflowApp() {
  const [data, setData] = useState(INIT_DATA);

  function updateFields(fields: Partial<Data>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { currentStepIndex, step, steps, isFirstStep, isLastStep, next, back } =
    useMultiStepForm([
      <WorkflowPageDefault key="1" {...data} />,
      <WorkflowPageForm key="2" {...data} updateFields={updateFields} />,
      <WorkflowPageTable key="3" {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) next();
    else alert("Done!");
  }

  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <fieldset>
          <legend className={styles.steps}>
            {currentStepIndex + 1}/{steps.length}
          </legend>
          <div className={styles.content}>{step}</div>
          <div className={styles.controls}>
            {!isFirstStep && (
              <Button label={"Back"} onClick={back} submit={false} />
            )}
            {<Button label={isLastStep ? "Submit" : "Next"} submit={true} />}
          </div>
        </fieldset>
      </form>
    </div>
  );
}
