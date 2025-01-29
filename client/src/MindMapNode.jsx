import React from 'react';
import { Handle, Position } from 'reactflow';

function MindMapNode({ id, data }) {
  return (
    <div className="mindmap-node">
      <Handle type="target" position={Position.Center} />
      <Handle type="source" position={Position.Center} />
      <div className="label">{data.label}</div>
    </div>
  );
}

export default MindMapNode;
