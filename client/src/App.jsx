import { useState, useEffect } from 'react'
import { db } from './firebase/config'
import { getFirestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import ReactflowMap from './ReactflowMap';
import SidePanel from './SidePanel';
function App() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [curNode, setCurNode] = useState(  { id: '1', position: { x: 0, y: 0 }, type: 'mindmap', data: { label: 'Browsing' }});


  const handleNodeClick = (event, node)=>{
    console.log('Node clicked:', node);
    setCurNode(node);
  
  }

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
    <div className='container'>
      <ReactflowMap handleNodeClick = {handleNodeClick}/>
      <SidePanel node = {curNode}></SidePanel>
    </div>
  )
}

export default App
