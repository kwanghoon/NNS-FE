import { useSelector } from 'react-redux';
import { RootState } from '../module';
import StandardModal from '../Components/modal/StandardModal';
import { useCallback } from 'react';

const useGetProjectConfigResult = () => {
  const result = useSelector((state: RootState) => state.projectApi.getProjectConfigResult);

  const handleError = useCallback(() => {
    window.location.replace(`/project`);
  }, []);

  return {
    ...result,
    errorModal: (<StandardModal head={"error"} body={result.error} onClose={handleError}/>)
  };
}

export default useGetProjectConfigResult;
