#!/bin/sh
pnpm check || exit $? # Check for Astro errors
pnpm test:lib || exit $?
pnpm test:component || exit $?
rm -rf components/src || exit $?