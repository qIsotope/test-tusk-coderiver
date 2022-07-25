import ContentLoader, { IContentLoaderProps } from "react-content-loader"

const MyLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
	<ContentLoader
		speed={2}
		width={1100}
		height={94}
		viewBox="0 0 1100 94"
		backgroundColor="#cfc9c9"
		foregroundColor="#000000"
		{...props}
	>
		<circle cx="55" cy="47" r="30" />
		<rect x="100" y="26" rx="0" ry="0" width="358" height="40" />
		<rect x="500" y="26" rx="0" ry="0" width="215" height="40" />
		<rect x="755" y="26" rx="0" ry="0" width="133" height="40" />
		<rect x="920" y="26" rx="0" ry="0" width="155" height="40" />
	</ContentLoader>
)

export default MyLoader

