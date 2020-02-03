module.exports = {
	parserPreset: 'conventional-changelog-conventionalcommits',
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"feat",
				"fix",
				"cont",
				"chore"
			]
		]
	}
};