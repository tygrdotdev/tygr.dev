import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C5Hb6EnB.mjs';
import { manifest } from './manifest_CfQ1cvn9.mjs';

const serverIslandMap = new Map([
	['NowListening', () => import('./chunks/NowListening_DnZlz_tp.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.11.0_@types+node@24.0.10_jiti@2.4.2_lightningcss@1.30.1_rollup@4.44.2_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ed6704ff-581f-4bf5-a22a-15b9e51a3e43",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
