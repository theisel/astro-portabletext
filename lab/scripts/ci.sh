#!/bin/sh
pnpm --filter astro-portabletext check || exit $? # Check for `astro-portabletext` component errors
pnpm check || exit $? # Check for Astro errors
pnpm test:lib || exit $?
pnpm test:component || exit $?