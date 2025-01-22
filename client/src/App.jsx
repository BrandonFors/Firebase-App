import { useState, useEffect } from 'react'
import { db } from './firebase/config'
import { getFirestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore';


function App() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  useEffect(()=>{
    const fetchData = async ()=>{
      setIsPending(true);
      const recipiesCol = collection(db, 'recipies');
      const recipiesSnapshot = await getDocs(recipiesCol);
      const items = recipiesSnapshot.docs.map(doc=>doc.data());
      console.log(items);
      setData(items);
    };

    fetchData();
  },[]);
  return (
    <>
    </>
  )
}

export default App
