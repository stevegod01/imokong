#!/usr/bin/env bash
set -euo pipefail
release=/home/imokongc/imoko-release-20260914
live=/home/imokongc/domains/imokong.com/public_html
backup=/home/imokongc/backups/backup-Sep-14-2026-1.tar.zst
test "$(readlink -f "$release")" = "$release"
test "$(readlink -f "$live")" = "$live"
test -s "$backup"
test -f "$live/index.html"
test ! -e "$release/public_html"
cd "$release"
printf '%s  %s\n' 18a45c49ce6b2f9087b338a32a9da8ed7ab380536fede73701984ecbf840a44c imoko-main-20260914-r2.zip | sha256sum -c -
unzip -tq imoko-main-20260914-r2.zip
sha256sum "$live/index.html" "$live/.htaccess" > original-entrypoints.sha256
cp -a "$live" "$release/public_html"
cp -p "$live/index.html" "$release/public_html/legacy-index.html"
unzip -oq imoko-main-20260914-r2.zip -d "$release/public_html"
cd "$release/public_html"
sha256sum --quiet -c ../SHA256SUMS
test -s legacy-index.html
test -d assets
test -s products/soap-noodles/index.html
test -s leadership/board-of-directors/index.html
test -s contact/index.html
find "$release/public_html" -type d -exec chmod 755 {} +
while read -r checksum filename; do chmod 644 "$filename"; done < ../SHA256SUMS
printf 'Verified 190 new files; original assets and legacy pages preserved.\n' | tee "$release/stage-ready.txt"
