#!/usr/bin/env sh

set -env

npm run build

cd dist

git init
git add -add
git commit -m 'new'
git push -f git@github.com:boundarie/vue-pages.git master:gh-pages

cd -