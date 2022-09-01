#! /bin/sh
pnpm compile --noEmit # Check for Typescript errors
pnpm check # Check for Astro errors
pnpm test:lib
pnpm test:component
