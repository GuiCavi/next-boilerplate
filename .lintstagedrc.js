module.exports = {
	// Lint & Prettify TS and JS files
	'*.{js,jsx,ts,tsx}': (filenames) => [
		`pnpm lint --fix . ${filenames.join(' ')}`,
    `pnpm test -- --findRelatedTests ${filenames.join(' ')}`
	]
}