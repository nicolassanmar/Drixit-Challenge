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
            ? "bg-red-100 text-red-800"
            : "bg-green-100 text-green-800")
        }
      >
        {props.role.toUpperCase()}
      </span>
    </>
  );
}
