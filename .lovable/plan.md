## Goal

Expand the Products page (`src/routes/products.tsx`) with 8 additional sportswear items, matching the existing card design (image, title, description, Inquire button, WhatsApp button).

## New products to add

1. **Polo Shirts** — Premium pique polos with custom embroidery, ideal for clubs, staff and corporate teamwear.
2. **Shorts** — Lightweight performance shorts with moisture-wicking fabric, available in training and match styles.
3. **Caps & Headwear** — Custom snapbacks, fitted caps and beanies finished with embroidery or printing.
4. **Socks** — Cushioned athletic socks in custom colors and team branding for football, cricket and gym wear.
5. **Jackets & Windbreakers** — Lightweight, water-resistant jackets engineered for training in any weather.
6. **Compression Wear** — Base-layer compression tops and tights designed to support recovery and performance.
7. **Goalkeeper Kits** — Padded goalkeeper jerseys and shorts built for grip, durability and protection.
8. **Rugby Uniforms** — Heavy-duty reinforced rugby jerseys and shorts engineered to withstand contact play.

## Image strategy

The project has no dedicated images for these items. To avoid placeholder breakage and keep build green, each new card will reuse the most visually relevant existing asset:

- Polo Shirts → `p-tshirt.jpg`
- Shorts → `p-gym.jpg`
- Caps & Headwear → `p-teamwear.jpg`
- Socks → `p-soccer.jpg`
- Jackets & Windbreakers → `p-tracksuit.jpg`
- Compression Wear → `p-gym.jpg`
- Goalkeeper Kits → `p-soccer.jpg`
- Rugby Uniforms → `p-uniform.jpg`

(You can later replace any of these with dedicated photos — just tell me which ones and I'll swap them in.)

## Technical details

- Edit `src/routes/products.tsx` only.
- Append the 8 new entries to the existing `products` array (no schema changes — same `{ img, title, desc }` shape).
- The existing `.map()` already renders the Inquire link (to `/contact`) and WhatsApp button (with auto-prefilled message using the product title), so no JSX changes are needed.
- No new assets, no new routes, no design-token changes.

## Out of scope

- Adding new images (can be done later if you supply them).
- Changes to the Gallery page (separate request — let me know when you're ready).
