#! /bin/sh
pnpm compile # Check for Typescript errors
pnpm check # Check for Astro errors
pnpm test:lib
pnpm test:component
