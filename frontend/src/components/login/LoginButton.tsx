import { useNavigate } from "react-router-dom";

interface Props {
  state: "next" | "submit";
  disabled: boolean;
  isLoading: boolean;
  onNext: () => void;
  onSubmit: () => void;
}

export default function LoginButton(props: Props) {
  const button = (
    <button
      className="bg-blue-500 hover:bg-blue-700 disabled:bg-slate-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      onClick={() => {
        props.state === "next" ? props.onNext() : props.onSubmit();
        console.log(props.state);
      }}
      disabled={props.disabled}
    >
      {props.state === "next" ? "Next" : "Log in"}
    </button>
  );

  return <>{props.isLoading ? <div>Loading...</div> : button}</>;
}
