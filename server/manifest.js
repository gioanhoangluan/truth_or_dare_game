const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/fonts/tabler-icons-filled.ttf","css/fonts/tabler-icons-filled.woff","css/fonts/tabler-icons-filled.woff2","css/fonts/tabler-icons-outline.ttf","css/fonts/tabler-icons-outline.woff","css/fonts/tabler-icons-outline.woff2","css/fonts/tabler-icons.ttf","css/fonts/tabler-icons.woff","css/fonts/tabler-icons.woff2","css/tabler-icons.min.css","favicon.png","imgs/romantic_background.jpg"]),
	mimeTypes: {".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".css":"text/css",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DJUKYOJn.js","app":"_app/immutable/entry/app.xiVLeI0Y.js","imports":["_app/immutable/entry/start.DJUKYOJn.js","_app/immutable/chunks/entry.BofpIlwd.js","_app/immutable/chunks/runtime.7MmAbGM_.js","_app/immutable/chunks/index.BRcHGBKT.js","_app/immutable/chunks/index-client.DKYEbheZ.js","_app/immutable/entry/app.xiVLeI0Y.js","_app/immutable/chunks/runtime.7MmAbGM_.js","_app/immutable/chunks/render.DtGCW6M2.js","_app/immutable/chunks/disclose-version.C-AW9LLf.js","_app/immutable/chunks/props.D6QspFHd.js","_app/immutable/chunks/index-client.DKYEbheZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-lCAQAGdM.js')),
			__memo(() => import('./chunks/1-pSbNQY1m.js')),
			__memo(() => import('./chunks/2-il3UOdJU.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
