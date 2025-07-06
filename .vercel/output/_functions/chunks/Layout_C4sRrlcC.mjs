import { c as createComponent, m as maybeRenderHead, b as renderTemplate, d as renderScript, e as renderSlot, r as renderComponent, f as renderHead } from './astro/server_DxiNgUuT.mjs';
/* empty css                         */
import $$NowListening from './NowListening_DnZlz_tp.mjs';
import { $ as $$Image } from './_astro_assets_DDFz3Gm5.mjs';

const $$Status = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-start border border-black"> <div class="px-1 py-0.5 text-lg font-neue-haas-grotesk border-b border-black w-full">
status
</div> <div class="px-1 py-0.5 flex flex-col gap-0.5 w-full"> <span> <b>tygrdev</b> - online
</span> <span class="">
"building my website, again."
</span> </div> </div>`;
}, "/Users/tygrdev/Desktop/tygr.dev/src/components/status.astro", void 0);

const $$Controls = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/tygrdev/Desktop/tygr.dev/src/components/controls.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="flex flex-col items-start border border-black"> <div class="px-1 py-0.5 text-lg font-neue-haas-grotesk border-b border-black w-full">
controls
</div> <div class="px-1 py-0.5 flex flex-col gap-0.5 w-full"> <div class="flex flex-row gap-2 items-center"> <input type="checkbox" id="neko-control"> <span>disable neko</span> </div> </div> </div>`;
}, "/Users/tygrdev/Desktop/tygr.dev/src/components/controls.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="bg-neutral-950 font-ark"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width">', '</head> <body class="min-w-[900px] max-w-[900px] w-full min-h-screen mx-auto"> ', ` <script async src="/internal/neko.js"><\/script> <header class="h-[465px] flex flex-col justify-end wrapper-header" style="background: url('/internal/banner-baw.png') top center/cover" id="header"> <span class="h-16 font-neue-haas-grotesk select-none pl-3 text-[45px]" style="background: url('/internal/header.svg') top center/cover">
hey, i'm tygrdev
</span> <nav> <ul class="m-0 p-0 flex list-none w-full"> <li> <a href="/" class="block py-1.5 border-y border-x border-black w-[128.5714285714px] h-10 bg-white text-black hover:bg-black hover:text-white font-neue-haas-grotesk text-xl text-center">
about
</a> </li> <li> <a href="/projects" class="block py-1.5 border-y border-r border-black w-[128.5714285714px] h-10 bg-white text-black hover:bg-black hover:text-white font-neue-haas-grotesk text-xl text-center">
projects
</a> </li> <li> <a href="/blog" class="block py-1.5 border-y border-r border-black w-[128.5714285714px] h-10 bg-white text-black hover:bg-black hover:text-white font-neue-haas-grotesk text-xl text-center">
blog
</a> </li> <li> <a href="/gallery" class="block py-1.5 border-y border-r border-black w-[128.5714285714px] h-10 bg-white text-black hover:bg-black hover:text-white font-neue-haas-grotesk text-xl text-center">
gallery
</a> </li> <li> <a href="/gear" class="block py-1.5 border-y border-r border-black w-[128.5714285714px] h-10 bg-white text-black hover:bg-black hover:text-white font-neue-haas-grotesk text-xl text-center">
gear
</a> </li> <li> <a href="/music" class="block py-1.5 border-y border-r border-black w-[128.5714285714px] h-10 bg-white text-black hover:bg-black hover:text-white font-neue-haas-grotesk text-xl text-center">
music
</a> </li> <li> <a href="/anime" class="block py-1.5 border-y border-r border-black w-[128.5714285714px] h-10 bg-white text-black hover:bg-black hover:text-white font-neue-haas-grotesk text-xl text-center">
anime
</a> </li> </ul> </nav> </header> <div class="w-[900px] h-full p-2.5 bg-white text-black border-x grid gap-2.5 grid-cols-4"> <div class="col-span-1 border-black flex flex-col gap-2.5"> `, " ", " ", ' </div> <div class="col-span-3 w-full"> ', ` </div> </div> <footer class="h-[21px] flex justify-end items-end" style="background: url('/internal/footer.svg') bottom center/cover"> <span class="pr-3 pb-1">
built with <a href="https://astro.build" target="_blank">
astro
</a>
and <a href="https://youtube.com/clip/Ugkx6fEd1jVjDVS0p3hqwaejLlCE9FQ5tNJp?si=Ee2-n13GQ3hUjWww" target="_blank">dr pepper</a> | banner by: <a href="https://x.com/lililjiliijili/status/1021352917872259072" target="_blank">
@lililjiliijili</a> </span> </footer> </body></html>`])), renderHead(), renderScript($$result, "/Users/tygrdev/Desktop/tygr.dev/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderComponent($$result, "Status", $$Status, {}), renderComponent($$result, "NowListening", $$NowListening, { "server:defer": true, "server:component-directive": "defer", "server:component-path": "@/components/now-listening.astro", "server:component-export": "default" }, { "fallback": ($$result2) => renderTemplate`<div class="flex flex-col items-start border border-black"> <div class="px-1 py-0.5 text-lg font-neue-haas-grotesk border-b border-black w-full">
listening to
</div> <div class="p-1 flex flex-col gap-2 w-full grayscale hover:grayscale-0"> ${renderComponent($$result2, "Image", $$Image, { "src": "/internal/default-album.png", "alt": "Loading", "width": 200, "height": 200, "class": "w-full" })} <span class="px-0.5">Loading...</span> </div> </div>` }), renderComponent($$result, "Controls", $$Controls, {}), renderSlot($$result, $$slots["default"]));
}, "/Users/tygrdev/Desktop/tygr.dev/src/layouts/Layout.astro", "self");

export { $$Layout as $ };
