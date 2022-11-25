const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
	// lessVarsFilePath: "./src/styles/variables.less",
	modifyVars: { "@primary-color": "#be9656" },
	lessVarsFilePathAppendToEndOfContent: false,
	cssLoaderOptions: {
		mode: "local",
		localIdentName: "[hash:base64:8]",
		exportLocalsConvention: "camelCase",
		exportOnlyLocals: false,
		getLocalIdent: (context, localIdentName, localName, options) => {
			return "whatever_random_class_name";
		},
	},

	// Other Config Here...
	env: {
		publicURL: process.env.PUBLIC_URL,
		apiURL: process.env.API_URL,
		imgApiURL: process.env.RANDOM_IMG_URL,
		gDriveLink: process.env.G_DRIVE_LINK,
	},
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["https://picsum.photos", "https://unsplash.com"],
	},
	webpack(config) {
		return config;
	},
});
