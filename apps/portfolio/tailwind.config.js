const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

module.exports = {
    mode: 'jit',
    content: [
		join(__dirname, 'app/**/*.{js,ts,jsx,tsx,mdx}'),
		'libs/ui/src/**/!(*.stories|*.spec).{js,ts,jsx,tsx}',
		...createGlobPatternsForDependencies(__dirname),
    ],
    presets: [require('../../tailwind-workspace-preset.js')],
    darkMode: 'class',
    theme: {
		colors: {
			gryed: '#f8f8f8'
		}
	},
    plugins: [],
}