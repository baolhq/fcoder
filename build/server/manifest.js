export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","global.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"immutable/start-35688a68.js","imports":["immutable/start-35688a68.js","immutable/chunks/index-94d693ab.js","immutable/chunks/index-1ec7f5d9.js","immutable/chunks/singletons-cdeec3fd.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "tags",
				pattern: /^\/tags\/?$/,
				names: [],
				types: [],
				path: "/tags",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "typ3r",
				pattern: /^\/typ3r\/?$/,
				names: [],
				types: [],
				path: "/typ3r",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "typ3r/challenge",
				pattern: /^\/typ3r\/challenge\/?$/,
				names: [],
				types: [],
				path: "/typ3r/challenge",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "typ3r/score",
				pattern: /^\/typ3r\/score\/?$/,
				names: [],
				types: [],
				path: "/typ3r/score",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "typ3r/challenge/score",
				pattern: /^\/typ3r\/challenge\/score\/?$/,
				names: [],
				types: [],
				path: "/typ3r/challenge/score",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "typ3r/challenge/[slug]",
				pattern: /^\/typ3r\/challenge\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "tags/[slug]",
				pattern: /^\/tags\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "typ3r/[slug]",
				pattern: /^\/typ3r\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,12],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
