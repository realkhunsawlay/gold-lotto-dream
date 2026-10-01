#!/usr/bin/env bash
# Adds the 4 Android signing secrets to your GitHub repo in one go (no copy-pasting).
# Needs the GitHub CLI:  brew install gh   then   gh auth login
#
# Usage:  ./set-secrets.sh YOUR-NAME/gold-lotto  /path/to/folder-with-the-key-files
#   The folder must contain: goldlotto-release.jks and goldlotto-signing-secrets.txt
set -e
REPO="$1"; KEYS="${2:-.}"
if [ -z "$REPO" ]; then echo "Usage: ./set-secrets.sh YOUR-NAME/REPO /path/to/key-folder"; exit 1; fi
command -v gh >/dev/null || { echo "Install the GitHub CLI first:  brew install gh   then   gh auth login"; exit 1; }
JKS="$KEYS/goldlotto-release.jks"; TXT="$KEYS/goldlotto-signing-secrets.txt"
[ -f "$JKS" ] || { echo "Not found: $JKS"; exit 1; }
[ -f "$TXT" ] || { echo "Not found: $TXT"; exit 1; }

# The password is the "Value:" line right after the ANDROID_KEYSTORE_PASSWORD name
PW=$(awk '/ANDROID_KEYSTORE_PASSWORD/{getline; sub(/^[[:space:]]*Value:[[:space:]]*/, ""); print; exit}' "$TXT")
[ -n "$PW" ] || { echo "Couldn't read the password from $TXT"; exit 1; }

base64 < "$JKS" | tr -d '\n' | gh secret set ANDROID_KEYSTORE_BASE64 --repo "$REPO"
printf '%s' "$PW"        | gh secret set ANDROID_KEYSTORE_PASSWORD --repo "$REPO"
printf '%s' "goldlotto"  | gh secret set ANDROID_KEY_ALIAS        --repo "$REPO"
printf '%s' "$PW"        | gh secret set ANDROID_KEY_PASSWORD     --repo "$REPO"

echo
gh secret list --repo "$REPO"
echo "Done. Now run: ./release.sh 1.0.0"
