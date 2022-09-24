#!/bin/sh
pnpm compile || exit $? # Check for Typescript errors
pnpm check || exit $? # Check for Astro errors
pnpm test:lib || exit $?
pnpm test:component || exit $?
