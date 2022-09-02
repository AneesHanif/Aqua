import { ref, onValue} from "firebase/database";
import { useState , useEffect } from "react";
import {database} from "../../Firebase/config"


export default function Bill(){

  const [flow,setFlow] = useState(null)
  useEffect(()=>{
    const waterFlow = ref(database,'Aqua/Flow');
onValue(waterFlow,(snapshot)=>{
  console.log(snapshot.val())
  setFlow(snapshot.val())
})
  },[flow]) 


  return(<div>
    {flow}
    <h1>{flow}</h1>
  </div>)
}


// [END rtdb_social_listen_star_count_modular]