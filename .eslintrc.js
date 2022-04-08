module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2018,
		requireConfigFile: false
	},
	env: {
		browser: true,
		node: true,
		mocha: true,
		// 'vue/setup-compiler-macros': true,
	},
	globals: {
		expect: true,
		defineProps: 'readonly',
		defineEmits: 'readonly'
	},
	extends: [
		'plugin:vue/recommended',
		'standard',
	],
	plugins: [
		'vue'
	],
	rules: {
		'generator-star-spacing': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		indent: 'off',
		'space-in-parens': 'off',
		'no-trailing-whitespace': 'off',
		'space-before-function-paren': 'off',
		'no-trailing-spaces': 'off',
		'comma-dangle': 'off',
		semi: 'off',
		'no-tabs': 'off',
		'keyword-spacing': 'off',
		'brace-style': [ 'error', 'stroustrup' ],
		'space-unary-ops': 'off',
		'no-multi-str': 'off',
		'array-bracket-spacing': [ 'error', 'always' ],
		'no-extend-native': 'off',
		'computed-property-spacing': [ 'error', 'always' ],
		'vue/no-v-html': 'off',
		'vue/html-self-closing': 'off',
		'vue/html-indent': [ 'error', 'tab', { 
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: []
		} ],
		'vue/no-multiple-template-root': 'off',
	}
}
