import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DxiNgUuT.mjs';
import { $ as $$Layout } from '../chunks/Layout_C4sRrlcC.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-2 items-center justify-center w-full"> <h1>
sorry
</h1> </div> ` })}`;
}, "/Users/tygrdev/Desktop/tygr.dev/src/pages/404.astro", void 0);

const $$file = "/Users/tygrdev/Desktop/tygr.dev/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
