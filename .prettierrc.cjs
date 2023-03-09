module.exports = {
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	plugins: [require("prettier-plugin-astro")],
	overrides: [
		{
			file: "**/*astro",
			options: {
				parser: "astro",
			},
		},
	],
};
