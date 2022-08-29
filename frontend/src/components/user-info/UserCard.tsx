import { User } from "../../model";
import RoleBadge from "../common/RoleBadge";
import UserMiscRow from "./UserMiscRow";

interface Props {
  user: User;
}

export default function UserCard(props: Props) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="flex flex-row">
        <img src={props.user.avatar} className="w-32"></img>
        <div className="flex flex-col ml-4 justify-center items-center w-full">
          <div className="text-gray-800 text-4xl mb-2">{`${props.user.name} ${props.user.surname}`}</div>
          <div className="text-gray-600 text-xl mb-2">{props.user.email}</div>
        </div>
      </div>
      <div className="border-b-2 border-gray-300 my-4"></div>
      <div className="flex flex-col ml-4 py-4">
        <UserMiscRow
          leftComponent={"Role:"}
          rightComponent={<RoleBadge role={props.user.role} />}
        />
        <UserMiscRow leftComponent={"Age:"} rightComponent={props.user.age} />
      </div>
    </div>
  );
}
