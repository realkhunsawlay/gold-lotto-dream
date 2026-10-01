#!/usr/bin/env bash
# First upload of this project to your (empty) GitHub repo.
# Usage: ./publish.sh https://github.com/YOUR-NAME/gold-lotto.git
set -e
URL="$1"
if [ -z "$URL" ]; then echo "Usage: ./publish.sh https://github.com/YOUR-NAME/REPO.git"; exit 1; fi
[ -d .git ] || git init -b main
git add -A
git commit -m "Gold & Lotto app" || echo "(nothing new to commit)"
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "$URL"
git push -u origin main
echo
echo "Uploaded. Next: add the 4 signing secrets on GitHub (README → Signing), then run ./release.sh 1.0.0"
