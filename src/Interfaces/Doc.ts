export interface PropsType {
  name: string;
  type: string;
  description: string | React.ReactNode;
}

export interface CodeBlocks {
	title: string;
  codeString: string;
  onReset: () => void;
  onRun: () => void;
}

export interface Doc {
	title: string;
	description: string;
	props: PropsType[];
	codeBlocks: CodeBlocks[];
}