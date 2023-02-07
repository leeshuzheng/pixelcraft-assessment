## Pixelcraft Studios Technical Assessment

### Live demo

[Welcome modal](https://pixelcraft-test.vercel.app/)\
[Parcel modal](https://pixelcraft-test.vercel.app/parcel)

This front end development assessment was built with [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) for ease of setting up.

I understand the team works with [tailwindcss](https://tailwindcss.com/) too, so it was my choice of framework to style my modals. On occasion, it was necessary for me to use [`css-modules`](https://github.com/css-modules/css-modules) to handle [component-specific styles](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css).

I had no business passing props to components, but gave each container component a `definitions.ts` to show how I would set up my projects with Typescript, along with `constants.ts`.

## Notes

- At times it was neccessary to make slight deviations from the figma, as certain font sizes would be too big for buttons in smaller flex containers between 1024px and 1280px browser widths. However I ensured these were minimal.
- It was a challenge to handle trapezoids and polygons as container shapes. I would have wanted to experiment with using [`border-image-source`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source) to create borders that were identical to those within the figma design.
- While using `filter: drop-shadow()` to handle elements styled with `clip-path: ...` as a hacky workaround for adding the magenta glow around the Parcel modal, I had to lose its translucent background color. Using `border-image-source` or perhaps using the svg as a background image.

## Getting Started

Clone this repo and `cd` into the project root. Run `npm install` or `yarn install`, whichever you prefer. Once we have our `node_modules` folder, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
