interface Props {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}

export default function UserMiscRow(props: Props) {
  return (
    <div className="text-gray-600 text-xl mb-2 flex items-center">
      {props.leftComponent}
      <div className="ml-2" />
      {props.rightComponent}
    </div>
  );
}
