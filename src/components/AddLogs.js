import { useState } from "react";
import { app } from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

export const AddLogs = () => {

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const saveLogs = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "studlogs/studdata"));
    set(newDocRef, {
      studLrn: inputValue1,
      studLName: inputValue2
    }).then(() => {
      alert("Data saved successfully")
    }).catch((error) => {
      alert("error: ", error.message)
    })
  }

  return (
    <div>
      <input type="text" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} /><br />
      <input type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} /><br />
      <button onClick={saveLogs} >Save Logs</button>
    </div>
  )
}
