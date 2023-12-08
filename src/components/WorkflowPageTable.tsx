import { Dialog } from "./Dialog";
import { WorkflowStep, WorkflowStepType } from "./WorkflowStep";

type Data = {
  terms: string;
};

type Props = Data & {
  updateFields: (fields: Partial<Data>) => void;
};

export function WorkflowPageTable({ terms, updateFields }: Props) {
  return (
    <WorkflowStep type={WorkflowStepType.Table}>
      <h2>Step Three</h2>
      <p>Sit aute aliqua duis Lorem cillum magna nostrud cillum elit non.</p>
      <table>
        <tr>
          <td>ONE</td>
          <td>TWO</td>
          <td>THREE</td>
          <td>FOUR</td>
        </tr>
        <tr>
          <td>ONE</td>
          <td>TWO</td>
          <td>THREE</td>
          <td>FOUR</td>
        </tr>
      </table>
      <fieldset>
        <legend>Agree to Terms</legend>
        <Dialog label="Read the terms" id="terms" primary size="small">
          <h2>Terms and Conditions</h2>
          <p>
            Adipisicing ad nisi et fugiat ullamco deserunt mollit mollit
            cupidatat id. Dolor ea deserunt enim eiusmod adipisicing culpa
            cupidatat do ex aute velit cillum Lorem. Id pariatur quis
            consectetur quis excepteur tempor quis ullamco aute et consequat ad.
            Labore tempor mollit enim in enim nostrud consequat aliquip ut quis.
          </p>
          <p>
            Adipisicing ad nisi et fugiat ullamco deserunt mollit mollit
            cupidatat id. Dolor ea deserunt enim eiusmod adipisicing culpa
            cupidatat do ex aute velit cillum Lorem. Id pariatur quis
            consectetur quis excepteur tempor quis ullamco aute et consequat ad.
            Labore tempor mollit enim in enim nostrud consequat aliquip ut quis.
          </p>
        </Dialog>
        <section>
          <label>
            Agree:
            <input
              type="checkbox"
              name="terms"
              value={terms}
              required
              onChange={(e) => updateFields({ terms: e.target.value })}
            />
          </label>
        </section>
      </fieldset>
    </WorkflowStep>
  );
}
