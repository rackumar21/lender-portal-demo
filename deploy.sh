#!/usr/bin/env bash
# Build the static export and publish it to the gh-pages branch.
# Usage: ./deploy.sh
#
# `next build` recreates out/ from scratch, which wipes out/.git, so the deploy
# branch has to be re-initialised every time rather than committed to.
set -euo pipefail

cd "$(dirname "$0")"
REPO="https://github.com/rackumar21/lender-portal-demo.git"

echo "==> Building static export"
GITHUB_PAGES=true pnpm exec next build

echo "==> Publishing out/ to gh-pages"
cd out
rm -rf .git
touch .nojekyll            # stop Jekyll from swallowing the _next/ directory
git init -q -b gh-pages
git add -A
git -c user.email=rachita@getstrada.com -c user.name="Rachita Kumar" \
    commit -q -m "Deploy $(date -u '+%Y-%m-%d %H:%M UTC')"
git push -q --force "$REPO" gh-pages

echo "==> Done: https://rackumar21.github.io/lender-portal-demo/"
echo "    Pages takes ~1 minute to rebuild."
