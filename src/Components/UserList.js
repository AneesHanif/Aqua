// import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./UserList.css";
import { useEffect, useState } from "react";

// Design Material UI
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// FireStore  and Firebase  imoprts
import { db } from "../Firebase/config";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

export default function ActiveExample(props) {
  //firebase Fetching Data from Firestore
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
  }, [users]);

  // Add Document Firestore
  const [title, setTitle] = useState("");
  const [meternum, setMeternum] = useState("");
  const [cell, setCell] = useState("");
  const [addr, setAddr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowInput(false);
    setAddr("");
    setCell("");
    setTitle("");
    setMeternum("");
    setShowSubmitButton(true);
    await addDoc(collection(db, "UserList"), {
      title: title,
      meternum: meternum,
      addr: addr,
      cell: cell,
    });
  };
  // Delete firesotre Document
  const handleClick = async (id) => {
    await deleteDoc(doc(db, "UserList", id));
  };

  // Show Inpur Handler
  const [showInput, setShowInput] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(true);

  const handleShowInput = () => {
    setShowInput(true);
    setShowSubmitButton(false);
    console.log("clicked");
  };

  return (
    <div className="UserList">
      {/* Users List  Showing  Users from Firebase to Application */}
      <h1 className="UserHeading"> {props.heading}</h1>
      <Table striped hover>
        <thead>
          <tr>
            <th>Consummer</th>
            <th>Meter Number</th>
            <th>Cell Number</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.title}</td>
                  <td>{user.meternum}</td>
                  <td>{user.cell}</td>
                  <td>{user.addr}</td>
                  <td>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      size="small"
                      onClick={() => handleClick(user.id)}
                    >
                      Remove
                    </Button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Stack direction="row" alignItems="center" spacing={2}>
        {showSubmitButton && (
          <Button variant="contained" onClick={handleShowInput}>
            Add New Consumer
          </Button>
        )}
      </Stack>

      {/* Inpur Fields For New Users  ( MUI)*/}

      {showInput && (
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 0.5, width: "19ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="standard-required"
              label="Consumer Name"
              type="text"
              variant="standard"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              required
              id="standard-number"
              label="Meter Number"
              type="number"
              variant="standard"
              onChange={(e) => setMeternum(e.target.value)}
            />
            <TextField
              required
              id="standard-number"
              label="Cell Number"
              type="number"
              variant="standard"
              onChange={(e) => setCell(e.target.value)}
            />
            <TextField
              required
              id="standard-required"
              label="Address"
              type="text"
              variant="standard"
              onChange={(e) => setAddr(e.target.value)}
            />
            <Button variant="contained" color="success" onClick={handleSubmit}>
              {" "}
              Submit
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
}
