import { Button, makeStyles } from '@material-ui/core';
import React, { KeyboardEventHandler, useCallback, useEffect , useRef, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  OnLoadParams,
  useStoreState,
  Node,
  Elements,
  Connection,
  Edge,
  addEdge,
  removeElements,
} from 'react-flow-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { BlockState } from '../../core/block/BlockState';
import { getNodeId } from '../../util';
import { nodetypes } from '../../core/nodetypes';
import { RootState } from '../../module';
import { IFlowState } from '../../API/project/types';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  reactFlow: {
    '&:focus': {
      border: 'initial',
    },
  },
  runButton: {
    position: 'absolute',
    zIndex: 1000,
    top: 10,
    left: 110,
    backgroundColor: '#F7F7F7',
  },
  saveButton: {
    position: 'absolute',
    zIndex: 1000,
    top: 10,
    left: 40,
    backgroundColor: '#F7F7F7',
  },
});

interface PrjectEditorGrahpProps{
  setReactInstance: ReturnType<typeof useCallback>
  setElements: ReturnType<typeof useCallback>
  flowState?: IFlowState,
};

const ProjectEditorGraph = (props: PrjectEditorGrahpProps) => {
  const classes = useStyle();
  const {flowState, setReactInstance, setElements} = props;
  const elements = useSelector((state: RootState) => state.elements.elements);
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
  const selectedElements = useStoreState((state) => state.selectedElements);
  const reactFlowInstance = useSelector((state: RootState) => state.reactFlowInstance.instance);

  useEffect(() => {
    setElements(flowState?.elements || []);
  }, [])

  const onConnect = useCallback((params : Edge | Connection) => {
    setElements(addEdge(params, elements));
  }, [elements]);

  const onElementsRemove = useCallback((elementsToRemove : Elements<any>) => {
    setElements(removeElements(elementsToRemove, elements));
  }, [elements]);

  const onDragOver = useCallback((e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    localEvent.dataTransfer.dropEffect = 'copy';
  }, []);

  const onDrop = useCallback((e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    if (localEvent.dataTransfer.types.includes('application/nodedata')) {
      const nodedata = JSON.parse(localEvent.dataTransfer.getData(('application/nodedata'))) as BlockState;
      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      const position = (reactFlowInstance as any).project({
        x: localEvent.clientX - (reactFlowBounds?.left || 0),
        y: localEvent.clientY - (reactFlowBounds?.top || 0),
      });
      const newNode : Node = {
        id: getNodeId(),
        type: 'default',
        position,
        data: {
          label: `${nodedata.type} node`,
          ...nodedata,
        },
      };
      setElements(elements.concat(newNode));
    }
  }, [elements, reactFlowInstance]);

  const onLoad = useCallback((instance: OnLoadParams) => {
    setReactInstance(instance);
  }, []);

  const onKeyDown : KeyboardEventHandler = useCallback((event) => {
    if (event.code === 'Delete' && selectedElements) {
      setElements(removeElements(selectedElements, elements));
    }
  }, [selectedElements]);

  return (
    <div ref={reactFlowWrapper} className={classes.wrapper}>
      <ReactFlow className={classes.reactFlow}
                 elements={elements}
                 onDrop={onDrop}
                 onDragOver={onDragOver}
                 onLoad={onLoad}
                 onConnect={onConnect}
                 onKeyDown={onKeyDown}
                 onElementsRemove={onElementsRemove}
                 tabIndex={0}
                 nodeTypes={nodetypes}
                 defaultPosition={flowState?.position}
                 defaultZoom={flowState?.zoom}
      >
        <Controls style={{
          top: 10,
          left: 10,
          bottom: 'initial',
        }}/>
        <Button
          className={classes.saveButton}
          >
         Run
        </Button>
        <MiniMap
                 nodeStrokeColor={(n) => {
                   if (n.type === 'input') return '#0041d0';
                   if (n.type === 'selectorNode') return '#1A192B';
                   if (n.type === 'output') return '#ff0072';
                   return '#000000';
                 }}
                 nodeColor={(n) => {
                   if (n.type === 'selectorNode') return '#1A192B';
                   return '#000000';
                 }}
        />
        <Background color="#aaa" />
      </ReactFlow>
    </div>
  );
}

export default ProjectEditorGraph;

