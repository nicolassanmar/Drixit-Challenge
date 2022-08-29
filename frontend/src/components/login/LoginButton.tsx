interface Props {
  state: "next" | "submit";
  disabled: boolean;
  isLoading: boolean;
  onNext: () => void;
  onSubmit: () => void;
}

export default function LoginButton(props: Props) {
  // render button if is not loading else render svg
  const button = (
    <button
      className="bg-blue-500 hover:bg-blue-700 disabled:bg-slate-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={() => {
        props.state === "next" ? props.onNext() : props.onSubmit();
        console.log(props.state);
      }}
      disabled={props.disabled}
    >
      {props.state === "next" ? "Next" : "Log in"}
    </button>
  );

  return (
    <>
      {props.isLoading ? (
        <img src="/spinner.svg" className="w-10"></img>
      ) : (
        button
      )}
    </>
  );
}
