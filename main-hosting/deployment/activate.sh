#!/usr/bin/env bash
set -euo pipefail
release=/home/imokongc/imoko-release-20260914
live=/home/imokongc/domains/imokong.com/public_html
previous=/home/imokongc/domains/imokong.com/public_html.before-20260914
test "$(readlink -f "$live")" = "$live"
test "$(readlink -f "$release/public_html")" = "$release/public_html"
test -s /home/imokongc/backups/backup-Sep-14-2026-1.tar.zst
test -s "$release/stage-ready.txt"
test ! -e "$previous"
sha256sum --quiet -c "$release/original-entrypoints.sha256"
cd "$release/public_html"
sha256sum --quiet -c ../SHA256SUMS
cd "$release"
mv "$live" "$previous"
if mv "$release/public_html" "$live"; then
  printf 'Activated https://imokong.com/\nPrevious complete website: %s\n' "$previous" | tee "$release/activated.txt"
else
  mv "$previous" "$live"
  printf 'Activation failed; original website restored.\n' >&2
  exit 1
fi
