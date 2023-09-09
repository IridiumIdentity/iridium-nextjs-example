This is a [Next.js](https://nextjs.org/) project using [Iridium](https://iridium.software) as its authorization platform, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create a `.env.local` file in the root folder of the repo.

```bash
$ touch .env.local
```

Then add these properties to it

```bash
NEXT_PUBLIC_IRIDIUM_DOMAIN=${your-specific-iridium-url}
NEXT_PUBLIC_IRIDIUM_REDIRECT_URI=http://localhost:3000/callback
NEXT_PUBLIC_IRIDIUM_CLIENT_ID=${your-iridium-client-id}
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see how Iridium works with Next.js.

