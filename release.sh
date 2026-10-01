#!/usr/bin/env bash
# Publish a new Android release. GitHub builds the APK and attaches it to the release.
# Usage: ./release.sh 1.0.0      (next time: ./release.sh 1.1.0, ./release.sh 1.2.0 …)
set -e
V="${1#v}"
if [ -z "$V" ]; then echo "Usage: ./release.sh 1.0.0"; exit 1; fi
git add -A
git commit -m "Release $V" || echo "(no changes to commit)"
git push
git tag -a "v$V" -m "Gold & Lotto $V"
git push origin "v$V"
REPO=$(git remote get-url origin | sed -E 's#(git@github.com:|https://github.com/)##; s#\.git$##')
echo
echo "Building… the APK appears in about 5–10 minutes at:"
echo "  https://github.com/$REPO/releases/tag/v$V"
echo "Progress: https://github.com/$REPO/actions"
