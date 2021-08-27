import { makeStyles } from '@material-ui/core';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { ReactNode } from 'react';
import NodeContainerWrapper from '../NodeSelector/nodeContainerWrapper';
import NodeConfigViewerContainer from '../NodeConfigViewer/NodeConfigViewerContainer';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	nodeContainerWrapper: {
		width: '100%',
		height: '100%',
		overflow: 'auto',
	},
	nodeConfigViewer: {
		width: '100%',
		height: '100%',
		overflow: 'auto',
		backgroundColor: '#F7F7F7',
	},
});

const ProjectEditorLeftSideBar = ({ nodeConfigViewer }: { nodeConfigViewer: ReactNode }) => {
	const classes = useStyle();
	return (
		<div className={classes.wrapper}>
			<ReflexContainer>
				<ReflexElement>
					<div className={classes.nodeContainerWrapper}>
						<NodeContainerWrapper />
					</div>
				</ReflexElement>
				<ReflexSplitter />
				<ReflexElement>
					<div className={classes.nodeConfigViewer}>{nodeConfigViewer}</div>
				</ReflexElement>
			</ReflexContainer>
		</div>
	);
};

export default ProjectEditorLeftSideBar;
