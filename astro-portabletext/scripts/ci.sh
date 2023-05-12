#!/bin/sh
pnpm check || exit $? # Check for Astro errors
pnpm test:lib || exit $?
pnpm test:component || exit $?
