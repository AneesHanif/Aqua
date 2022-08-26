import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import "./UserList.css";
import { useState, useEffect } from "react";

// firesotre
import { db } from "../Firebase/config";
import { collection,getDocs } from "firebase/firestore";

//Style
import './UserList.css'

export default function ActiveExample(props) {

  const [users, setUsers] = useState([]);
  const [showInvoice, setShowInvoice] = useState(false);
  // use Effect and State for User Data
  // Firebase
  useEffect(()=>{
    const ref = collection(db,'UserList');
    getDocs(ref)
      .then((snapshot)=>{
        let result =[]
        snapshot.docs.forEach(doc=>{
          result.push({id:doc.id,...doc.data()})
        })
        setUsers(result)
      })
  },[])
  
  //Invoice Handling
  const handleInvoice = () => {
    setShowInvoice(true);
  };
  const handleClose = () => setShowInvoice(false);

  return (
    <div className="UserList">
      <h1 className="UserHeading"> {props.heading}</h1>

      <Table striped  hover>
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
          {users.map((user) => (
            <tr key={user.id}>
              
              <td>{user.title}</td>
              <td>{user.meternum}</td>
              <td>{user.cell}</td>
              <td>{user.addr}</td>
              <td>
                <Button
                  variant="outline-danger"
                  size="sm"
                  id="tbg-btn-3"
                  value={3}
                  onClick={() => handleInvoice()}
                >
                  Bill
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showInvoice && (
        <div className="ModalBackdrop">
          <div className="Modal">
            <Modal.Dialog fullscreen="xl-down" size="lg">
              <Modal.Header >
                <Modal.Title>Aqua Surveilance</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div>
                  <div>
                    <h3>Bill From</h3>
                    <p> Benazir Bhutto shaheed University Lyari karachi</p>
                    <h3>Bill To</h3>
                    <p>
                      Muhammad Anees: kakka Peer Village Maripur Road Younisabad
                     
                    </p>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th> Account Information </th>
                      </tr>
                      <tr>
                        <td>Account Number</td>
                        <td>930942039874</td>
                      </tr>
                      <tr>
                        <td>Billing Date</td>
                        <td>7/10/2022</td>
                      </tr>
                      <tr>
                        <td>Due Date</td>
                        <td>20/10/2022</td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div>
                  <Table className="BillTable">
                    <thead>
                      <tr>
                        <th style={{ marginLeft: 30 }}>Meter Number</th>
                        <th>Service Dates</th>
                        <th>Current/Liters</th>
                        <th>previous/Liters</th>
                        <th>Rs:1/liter</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>390234093</td>
                        <td>20/1/2022</td>
                        <td>500</td>
                        <td>0</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      )}
    </div>
  );
}
