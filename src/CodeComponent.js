import { CopyBlock, atomOneDark } from "react-code-blocks";

function CodeComponent(props) {
	const { code, language } = props;
	return (
		<CopyBlock
			text={code}
			language={language}
			showLineNumbers={true}
			theme={atomOneDark}
			codeBlock
		/>
	);
}

export default CodeComponent;
