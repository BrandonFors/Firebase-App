import { useState, useEffect } from 'react';

function SidePanel(props){

  const [nodeData, setNodeData] = useState({});

  useEffect(()=>{
    setNodeData(props.node.data);
  },[props]);
  return(
    <div className='side-panel'>
      <h1>{nodeData.label}</h1>
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Massa libero proin magna metus auctor. Faucibus senectus suspendisse facilisi primis placerat integer. Eros sed euismod gravida luctus magna tristique ultricies. Arcu dis congue integer vel ullamcorper senectus sapien. Odio luctus euismod ligula leo hac vel facilisis rutrum. Orci condimentum penatibus vivamus tortor nec. Nunc duis sem laoreet urna mus consectetur proin tempor.
      </p>
      <img src = "/placeholder.webp"></img>
    </div>
  )

}

export default SidePanel;