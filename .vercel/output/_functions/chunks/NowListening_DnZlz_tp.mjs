import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_DxiNgUuT.mjs';
import { $ as $$Image } from './_astro_assets_DDFz3Gm5.mjs';

const prerender = false;
async function getAccessToken() {
  const refresh_token = "AQAuFcq0i9Z-YD6y_x9JL7CsOM_2pcGKd2I-SFoHoRbx3kvTBKUqjkljOnWeFzI7j6RUMOS6YGK98pyS5vtClKvYcG-U5X5bDC4s6Z-oDNaPcch8RLBL9GYmKZBy7d9sEP8";
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${"216da37ccf2e4f84aeac2f3b4d395937"}:${"7bb067545c0e408b869816f763f8cae0"}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token
    })
  });
  return res.json();
}
async function getNowPlaying() {
  const { access_token } = await getAccessToken();
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      },
      cache: "no-store"
    }
  );
  if (res.status === 204 || res.status > 400) {
    const status2 = { is_playing: false };
    return status2;
  }
  const status = await res.json();
  return status;
}
const $$NowListening = createComponent(async ($$result, $$props, $$slots) => {
  const data = await getNowPlaying();
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-start border border-black"> <div class="px-1 py-0.5 text-lg font-neue-haas-grotesk border-b border-black w-full">
listening to
</div> <a class="p-1 flex flex-col gap-2 w-full grayscale hover:grayscale-0"${addAttribute(data.item.external_urls.spotify, "href")}> ${renderComponent($$result, "Image", $$Image, { "src": data.item.album.images[0].url, "alt": data.item.name, "width": 200, "height": 200, "class": "w-full border border-white/10" })} <span class="px-0.5">${data.item.name} - ${data.item.artists.map((artist) => artist.name).join(", ")}</span> </a> </div>`;
}, "/Users/tygrdev/Desktop/tygr.dev/src/components/now-listening.astro", void 0);
const $$file = "/Users/tygrdev/Desktop/tygr.dev/src/components/now-listening.astro";
const $$url = void 0;

export { $$NowListening as default, $$file as file, getAccessToken, getNowPlaying, prerender, $$url as url };
