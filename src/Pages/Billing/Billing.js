
import Invoice from "../../Components/Invoice";
import BillingList from "../../Components/BillingList"

//Style
import './Billing.css'

export default function Billing(){
    return(
        <div className="Billing">
            <BillingList heading={"Billing"}  />    
        </div>
    )
}


// Invoice Usage with INvoice and Billing List 

// invoice={<Invoice />}
