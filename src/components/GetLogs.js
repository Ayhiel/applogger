import { useEffect, useState } from "react";
import { app } from "../firebaseConfig";
import { getDatabase, ref, get} from "firebase/database";
import { useNavigate } from "react-router-dom";

export const GetLogs = () => {

    const navigate = useNavigate();

    const [logsArray, setLogsArray] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const db = getDatabase(app);
                const dbRef = ref(db, "studlogs/studdata");
                const snapshot = await get(dbRef);
        
                if (snapshot.exists()) {
                    setLogsArray(Object.values(snapshot.val()));
                } else {
                    alert("Error");
                }
            };
            fetchData();
        } catch (error) {
            alert("Error: ", error.message);
        };
    },[])

    
  return (
    <div>
        <table border="1">
        <th >LRN</th>
        <th >Last Name</th>
                {logsArray.map((logArray) => (
                    <tr key={logArray.index}>
                        <td>{logArray.studLrn}</td>
                        <td>{logArray.studLName}</td>
                    </tr>
                ))}
            
        </table>
        <button onClick={() => navigate("/")}>Click to view data</button>
    </div>
  )
}

