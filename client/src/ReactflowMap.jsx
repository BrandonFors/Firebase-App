import React from 'react';
import ReactFlow, { Panel, Controls, Background, ConnectionLineType } from 'reactflow';
import 'reactflow/dist/style.css';
import MindMapEdge from './MindmapEdge';
import MindMapNode from './MindmapNode';

// Custom node and edge types
const nodeTypes = {
  mindmap: MindMapNode,
};

const edgeTypes = {
  mindmap: MindMapEdge,
};

// Sample nodes and edges
const nodes = [
  { id: '1', position: { x: 0, y: 0 }, type: 'mindmap', data: { label: 'Browsing' } },
  { id: '2', position: { x: 100, y: 100 }, type: 'mindmap', data: { label: 'Focus 1' } },
  { id: '3', position: { x: -100, y: 100 }, type: 'mindmap', data: { label: 'Focus 2' } },
  { id: '4', position: { x: 0, y: -100 }, type: 'mindmap', data: { label: 'Focus 3' } },
  { id: '5', position: { x: 300, y: 100 }, type: 'mindmap', data: { label: 'Detail 1' } },
  { id: '6', position: { x: 100, y: 200 }, type: 'mindmap', data: { label: 'Detail 2' } },
  { id: '7', position: { x: -300, y: 100 }, type: 'mindmap', data: { label: 'Detail 1' } },
  { id: '8', position: { x: 100, y: -150 }, type: 'mindmap', data: { label: 'Detail 1' } },
  { id: '9', position: { x: -100, y: -150 }, type: 'mindmap', data: { label: 'Detail 2' } },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', type: 'straight' },
  { id: 'e1-3', source: '1', target: '3', type: 'straight' },
  { id: 'e1-4', source: '1', target: '4', type: 'straight' },
  { id: 'e2-5', source: '2', target: '5', type: 'straight' },
  { id: 'e2-6', source: '2', target: '6', type: 'straight' },
  { id: 'e3-7', source: '3', target: '7', type: 'straight' },
  { id: 'e4-8', source: '4', target: '8', type: 'straight' },
  { id: 'e4-9', source: '4', target: '9', type: 'straight' },
];

// Edge styling
const connectionLineStyle = { stroke: '#F6AD55', strokeWidth: 3 };
const defaultEdgeOptions = { style: connectionLineStyle, type: 'mindmap' };

const ReactflowMap = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.Straight}
        fitView
      >
        <Background />
        <Controls />
        <Panel position="top-right">Mind Map Flow</Panel>
      </ReactFlow>
    </div>
  );
};

export default ReactflowMap;
