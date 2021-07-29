import { FlowExportObject } from "react-flow-renderer";

export interface IProjectDto{
  config:      IProjectConfig;
  content:     IProjectContentDto;
  description: string;
  lastModify:  Date;
  name:        string;
  projectNo:   string;
}

export interface IProjectContentDto {
  flowState: FlowExportObject,
  output: string;
}

export interface IProjectGlobalConfig{

  epochs?: string;

  batch_size?: string;

}

export interface IProjectOptimizerConfig{

  learning_rate?: number;

  loss?: string;

  metrics?: string[];

  optimizer?: string;

}

export interface IProjectConfig extends IProjectOptimizerConfig, IProjectGlobalConfig{
}

export class ProjectConfig implements IProjectConfig{

  batch_size?: string;

  epochs?: string;

  learning_rate?: number;

  loss?: string;

  metrics?: string[];

  optimizer?: string;

  constructor(config? : ProjectConfig) {
    this.optimizer = config?.optimizer || 'adam';
    this.learning_rate = config?.learning_rate || 0.001;
    this.loss = config?.loss || 'sparse_categorical_crossentropy';
    this.metrics = config?.metrics || ['accuray'];
    this.batch_size = config?.batch_size || '32';
    this.epochs = config?.epochs || '10';
  }
}

export interface IProjectInfo {
  description: string,
  name: string,
}
