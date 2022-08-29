interface Props {
  role: "admin" | "user";
}
export default function RoleBadge(props: Props) {
  return (
    <>
      <span
        className={
          "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium " +
          (props.role === "admin"
            ? "bg-orange-100 text-orange-800"
            : "bg-cyan-100 text-cyan-800")
        }
      >
        {props.role.toUpperCase()}
      </span>
    </>
  );
}
