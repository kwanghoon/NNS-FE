import ProjectEditorGraph from './projectEditorGraph';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../module';
import { useCallback, useEffect } from 'react';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import { Elements, FlowExportObject, OnLoadParams } from 'react-flow-renderer';
import CircleLoading from '../../Loading/CircularLoading';
import { getProject } from '../../../module/ProjectController';
import { setElements } from '../../../module/Elements';
import useGetProjectResult from '../../../hooks/useGetProjectResult';

const ProjectEditorGraphContainer = () => {
  const result = useGetProjectResult();
  const dispatch = useDispatch();

  const setReactInstance = useCallback((instance : OnLoadParams) => {
    dispatch(setReactFlowInstance(instance));
  }, []);

  const onSetElements = useCallback((elements: Elements) => {
    dispatch(setElements(elements));
  }, [])

  const content = result.data && (
      <ProjectEditorGraph
        setReactInstance={setReactInstance}
        flowState={result.data?.content.flowState}
        setElements={onSetElements}
      />
  );

  return(
    <>
      {(result.loading || result.error) && <CircleLoading/>}
      {content}
    </>);
};


export default ProjectEditorGraphContainer;
