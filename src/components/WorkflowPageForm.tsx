import { WorkflowStep, WorkflowStepType } from "./WorkflowStep";

type Data = {
  name: string;
  number: string;
  month: string;
  year: string;
  cvv: string;
};

type Props = Data & {
  updateFields: (fields: Partial<Data>) => void;
};

export function WorkflowPageForm({
  name,
  number,
  month,
  year,
  cvv,
  updateFields,
}: Props) {
  return (
    <WorkflowStep type={WorkflowStepType.Form} title="Form Layout">
      <h2>Ad elit occaecat aliquip amet.</h2>
      <label>Name</label>
      <input
        type="text"
        required
        title="Name"
        placeholder="Enter your name"
        minLength={5}
        maxLength={20}
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
      <label>Card Number</label>
      <input
        type="text"
        required
        title="Card Number"
        placeholder="Enter 16 digits"
        pattern="\d{16}"
        value={number}
        onChange={(e) => updateFields({ number: e.target.value })}
      />
      <label>Expiry Month</label>
      <input
        type="text"
        required
        title="Card Expiry Month"
        placeholder="MM"
        pattern="\d{2}"
        value={month}
        onChange={(e) => updateFields({ month: e.target.value })}
      />
      <label>Expiry Year</label>
      <input
        type="number"
        required
        title="Card Expiry Year"
        placeholder="YYYY"
        pattern="\d{4}"
        min={2023}
        value={year}
        onChange={(e) => updateFields({ year: e.target.value })}
      />
      <label>CVV</label>
      <input
        type="number"
        required
        title="Card security code"
        placeholder="Enter your 3 digit CVV number"
        pattern="\d{3}"
        value={cvv}
        onChange={(e) => updateFields({ cvv: e.target.value })}
      />
    </WorkflowStep>
  );
}
