#!/usr/bin/env bash
rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m deploy
git remote add origin git@github.com:jiangyongting0810/reacte-blueberryLedger-1-Preview.git
git push -f origin main
cd -