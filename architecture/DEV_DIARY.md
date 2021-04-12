# tune-book dev diary

## 22 Feb 2021

- Read through https://v2.svelte.dev/guide and the Svelte launch statement.
- Used `degit sveltejs/template tune-book` to start a new project.
- Started reading up on web bundlers: https://blog.logrocket.com/benchmarking-bundlers-2020-rollup-parcel-webpack/
- Completed half of the Svelte tutorial: https://svelte.dev/tutorial/basics

## 25 Feb 2021

- Completed Svelte tutorial.
- Researched Sapper: https://sapper.svelte.dev/
- Added tailwind css to project: https://jackwhiting.co.uk/posts/setting-up-svelte-and-integrating-tailwind-css/
- Transferred project to Sapper.
- Integrated Tailwind with https://www.apostrof.co/blog/getting-tailwind-css-to-integrate-nicely-with-svelte-sapper/ and https://svelte.dev/docs#svelte_preprocess (some differences in the way the rollup.config is laid out.)
- Experimented with implementation of sapper, tailwind and postcss: https://codechips.me/sapper-with-postcss-and-tailwind/
- Installed stylelint for vscode to understand tailwind css syntax.
- Experimented with global postcss styles.

## 26 Feb 2021

- Researched The Session API, concluded json database store need for app.
- Drew architecture map.
- Created dummy tunebook data to start coding front end logic.

## 12 April 2021

- Wrote reducer logic for changing the order of tunes and changing your preferred setting.
- Added json import support to rollup config file: https://github.com/rollup/plugins/tree/master/packages/json
- Couldn't get tailwind list-decimal class to work for some reason!
- Messing around with https://github.com/isaacHagoel/svelte-dnd-action to get drag and drop action on the list.
