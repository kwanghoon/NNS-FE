import { LeftWrapper } from '../projectConfig/projectConfigMain';
import ProjectDatasetViewer from './projectDatasetViewer/projectDatasetViewer';
import ProjectDatasetSideBar from './projectDatsetSideBar/projectDatasetSideBar';
import { DatasetConfig } from './datasetConfig';
import { GetDatasetListAPIResponse } from '../../../API/Dataset/type';

type Props = {
	datasetConfigs: DatasetConfig[];
	currentDatasetConfig: DatasetConfig | undefined;
	setCurrentDatasetConfig: (datasetConfig: DatasetConfig) => any;
	setDatasetConfigs: any;
	mutate: any;
	datasetList: GetDatasetListAPIResponse;
};

const ProjectDatasetMain = ({
	mutate,
	setDatasetConfigs,
	currentDatasetConfig,
	setCurrentDatasetConfig,
	datasetConfigs,
	datasetList,
}: Props) => {
	return (
		<>
			<LeftWrapper>
				<div className="sec-l">
					<ProjectDatasetSideBar
						datasetConfigs={datasetConfigs}
						setDatasetConfigs={setDatasetConfigs}
						setCurrentDatasetConfig={setCurrentDatasetConfig}
						currentDatasetConfig={currentDatasetConfig}
						mutate={mutate}
					/>
				</div>
			</LeftWrapper>
			<div className="sec-c">
				{currentDatasetConfig === undefined ? null : (
					<ProjectDatasetViewer
						datasetConfig={currentDatasetConfig}
						setDatasetConfig={setCurrentDatasetConfig}
						datasetList={datasetList}
					/>
				)}
			</div>
		</>
	);
};

export default ProjectDatasetMain;
