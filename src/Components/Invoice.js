import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from 'react-bootstrap/Table'
import { useState } from "react";
//Style
import './Invoice.css'

export default function Invoice() {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <div>
      {show && 
       <div className="ModalBackdrop">
       <div className="Modal">
 
       
       <Modal.Dialog fullscreen="xl-down" size="lg" >
         <Modal.Header closeButton>
           <Modal.Title>Aqua Surveilance</Modal.Title>
           <Button >x</Button>
         </Modal.Header>
 
         <Modal.Body>
           <div>
             <div>
               <h3>Bill From</h3>
               <p> Benazir Bhutto shaheed University Lyari karachi</p>
               <h3>Bill To</h3>
               <p>Muhammad Anees: kakka Peer Village Maripur Road Younisabad</p>
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
                   <th style={{marginLeft:30}}>Meter Number</th>
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
           <Button variant="secondary" onClick={()=>handleClose()}>Close</Button>
         </Modal.Footer>
       </Modal.Dialog>
     </div>
     </div>
     }
    </div>
   
  );
}
