import Bill from "../../Components/List/Bill";
import UserList from "../../Components/UserList";

// Style
import "./Users.css";
export default function Users() {
  return (
    <div className="UserList">
      <UserList heading={"User List "} />
    </div>
  );
}
