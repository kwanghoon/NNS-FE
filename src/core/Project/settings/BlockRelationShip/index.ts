import { BlockType } from '../../../reactFlow/block';

type BlockRelationShipKey = keyof typeof BlockType;

const BlockRelationShip: {
	[K in BlockRelationShipKey]: Set<BlockType>;
} = {
	Activation: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	AveragePooling2D: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	BatchNormalization: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Conv2D: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Dropout: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Flatten: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Input: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	MaxPool2D: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Dense: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Rescaling: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Reshape: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	// Math
	Abs: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Ceil: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Floor: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Round: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Sqrt: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Add: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Subtract: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Log: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
	Comment: new Set([]),
};

export default BlockRelationShip;
