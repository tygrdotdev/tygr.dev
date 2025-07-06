import { c as createComponent, g as createAstro, m as maybeRenderHead, e as renderSlot, b as renderTemplate, a as addAttribute, r as renderComponent } from '../chunks/astro/server_DxiNgUuT.mjs';
import { $ as $$Layout } from '../chunks/Layout_C4sRrlcC.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-start w-full border border-black"> <div class="px-2 py-1 text-xl font-neue-haas-grotesk border-b border-black w-full"> ${title} </div> <div class="px-2 py-1 flex flex-col gap-2 w-full"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/tygrdev/Desktop/tygr.dev/src/components/card.astro", void 0);

const $$Astro = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" class="underline underline-offset-2 hover:bg-black hover:text-white">${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/tygrdev/Desktop/tygr.dev/src/components/link.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-3 items-start w-full"> <div class="flex flex-col"> <div class="bg-black text-white px-2 py-1 text-2xl font-neue-haas-grotesk w-full">
about me
</div> <div class="p-2.5 flex flex-row items-start w-full border border-black"> <p>
yo, i&apos;m ty, aka tygrdev <span class="text-neutral-500">[or tygrxqt if you know me well enough]</span>. i'm a self-taught web/iot developer with an interest in
					building truely open alternative software and services for people who care. i'm also the founder and lead of design at ${renderComponent($$result2, "Link", $$Link, { "href": "https://nordstud.io" }, { "default": ($$result3) => renderTemplate`Nord Studio` })} and ${renderComponent($$result2, "Link", $$Link, { "href": "https://masonrystudio.co.uk" }, { "default": ($$result3) => renderTemplate`Masonry Studio` })}.
<br><br>
you can reach me via the ${renderComponent($$result2, "Link", $$Link, { "href": "https://nordstud.io" }, { "default": ($$result3) => renderTemplate`Nord Studio Discord` })}, or via email at hi (at) tygr (dot) dev for any questions, help with my work, or if you wanna say "hiii :3"
</p> </div> </div> ${renderComponent($$result2, "Card", $$Card, { "title": "likes and dislikes" }, { "default": ($$result3) => renderTemplate` <span>
Hover over each items to learn more.
</span> <div class="grid grid-cols-2 gap-4 w-full"> <div class="flex flex-col items-start w-full"> <div class="flex flex-row gap-2 items-center w-full"> <svg class="size-4" data-name="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.82 20"><path d="M21.82 5.45c0-3.01-2.55-5.45-5.68-5.45-2.35 0-4.36 1.36-5.23 3.31C10.04 1.36 8.03 0 5.68 0 2.55 0 0 2.44 0 5.45 0 14.2 10.91 20 10.91 20s10.91-5.79 10.91-14.55" style="fill:#000;stroke-width:0"></path></svg> <span class="font-neue-haas-grotesk text-xl">
likes
</span> </div> <ul class="grid grid-cols-2 list-inside list-[square] w-full"> <li>
cats
</li> <li>
music
</li> <li>
anime
</li> <li>
virtual reality
</li> <li>
console modding
</li> <li>
nature / outdoors
</li> <li>
biking
</li> <li>
swiss design
</li> <li>
fajitas
</li> <li>
handhelds
</li> </ul> </div> <div class="flex flex-col items-start w-full"> <div class="flex flex-row gap-2 items-center w-full"> <svg class="size-4" data-name="x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path style="fill:#000;stroke-width:0" d="M15.71 20 10 14.29 4.29 20 0 15.71 5.71 10 0 4.29 4.29 0 10 5.71 15.71 0 20 4.29 14.29 10 20 15.71 15.71 20z"></path></svg> <span class="font-neue-haas-grotesk text-xl">
dislikes
</span> </div> <ul class="grid grid-cols-2 list-inside list-[square] w-full"> <li>
sticky things
</li> <li>
being hot
</li> <li>
tight clothes
</li> <li>
parties
</li> <li>
sleeping early
</li> <li>
flying bugs
</li> <li>
writing css
</li> <li>
electron
</li> <li>
generative ai
</li> <li>
country music
</li> </ul> </div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, { "title": "why 'tygrdev'?" }, { "default": ($$result3) => renderTemplate` <p>
when i was 7 or 8, my ps3 asked me to set a username and i went with 'tyger796', a blend between a nickname my mum gave me as a kid, and a number representing my family.
				fastforward to now, i realised that having numbers in your username is a bit weird in a professional sense, so i replaced the '796' with 'dev' since i'm a software developer, and later on removed the e, since i couldn't get a domain with 'tyger' in it, only 'tygr'.
</p> ` })} </div> ` })}`;
}, "/Users/tygrdev/Desktop/tygr.dev/src/pages/index.astro", void 0);

const $$file = "/Users/tygrdev/Desktop/tygr.dev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
