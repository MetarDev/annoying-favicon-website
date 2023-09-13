export interface PropsType {
  name: string;
  type: string;
  description: string | React.ReactNode;
}

export interface CodeBlocks {
	title?: string;
  codeString: string;
  onReset: () => void;
  onRun: () => void;
}

export interface Doc {
	functionName: string;
	title: string;
	description: string;
	props?: PropsType[];
	codeBlocks: CodeBlocks[];
}