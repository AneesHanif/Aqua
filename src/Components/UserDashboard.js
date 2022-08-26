import Table from "react-bootstrap/Table";
import "./UserList.css";
import { useState, useEffect } from "react";
import Navbar from "./List/Navbar";
//style
import "./UserDashboard.css";

//firesotore
import { db } from "../Firebase/config";
import { collection, getDocs } from "firebase/firestore";
export default function ActiveExample(props) {
  // firestore
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const ref = collection(db, "UserList");

    getDocs(ref).then((snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setUsers(result);
    });
  }, []);

  return (
    <div>
      <h3 className="UserHeading"> {props.title}</h3>
      <p></p>
      <Table striped hover>
        <thead>
          <tr>
            <th>Consummer</th>
            <th>Meter Number</th>
            <th>Cell Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.title}</td>
              <td>{user.meternum}</td>
              <td>{user.cell}</td>
              <td>{user.addr}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
