This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

note in my current mind:
1- if the type is acting as a unit that wont change then use "type" to define a type
2- if you extending a type so it accepts multiple types and maybe extend it later further more, use "interface" (easier to read) and use it for component props

3- if im working with components like shadcn and extend type of Card for example and then
extend it to a type further and there is a conflict, I should avoid using Omit<> on Card
because I would mostly need to use that prop for example that has the naming conflict,
so I should remove the conflict my renaming my other type if possible, in exchange i maybe
lose naming consistency (for example I use title for any data with title) .. it wont be
a big problem if i renamed that one (jobTitle) for example. typescript will help me anyway
to identify what exists in an object and thats a good exchange i guess

4- instead of getting the icons from outside the component, generate it based on the input
if the icon is based on an input (like JobCard for example)
