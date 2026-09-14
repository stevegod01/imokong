$ErrorActionPreference = 'Stop'
$sourceApp = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../vercel-preview'))
$targetApp = [IO.Path]::GetFullPath('C:/Users/ejiog/Documents/imokong/redesign')
$backupDir = Join-Path $PSScriptRoot 'before-maintained'
$relativeFiles = @(
  'app/layout.tsx',
  'app/about/page.tsx',
  'app/about/about.module.css',
  'app/leadership/board-of-directors/page.tsx',
  'app/leadership/executive-management/page.tsx',
  'components/about-nav.tsx',
  'components/about-nav.module.css',
  'components/about-menu.tsx',
  'components/about-menu.module.css',
  'components/mobile-menu.tsx',
  'components/mobile-menu.module.css',
  'components/site-footer.tsx',
  'components/leader-card.tsx',
  'components/leadership-page.tsx',
  'components/leadership.module.css',
  'lib/leadership.ts'
)
$relativeFiles += Get-ChildItem -LiteralPath (Join-Path $sourceApp 'public/images/leadership') -Filter '*.webp' | ForEach-Object { 'public/images/leadership/' + $_.Name }
$results = foreach ($relativeFile in $relativeFiles) {
  $sourceFile = [IO.Path]::GetFullPath((Join-Path $sourceApp $relativeFile))
  $targetFile = [IO.Path]::GetFullPath((Join-Path $targetApp $relativeFile))
  if (-not $targetFile.StartsWith($targetApp + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw "Target outside maintained source: $targetFile" }
  if (Test-Path -LiteralPath $targetFile) {
    $backupFile = Join-Path $backupDir $relativeFile
    New-Item -ItemType Directory -Force -Path (Split-Path $backupFile) | Out-Null
    if (-not (Test-Path -LiteralPath $backupFile)) { Copy-Item -LiteralPath $targetFile -Destination $backupFile }
  }
  New-Item -ItemType Directory -Force -Path (Split-Path $targetFile) | Out-Null
  Copy-Item -LiteralPath $sourceFile -Destination $targetFile
  $sourceHash = (Get-FileHash -LiteralPath $sourceFile -Algorithm SHA256).Hash
  $targetHash = (Get-FileHash -LiteralPath $targetFile -Algorithm SHA256).Hash
  if ($sourceHash -ne $targetHash) { throw "Copy verification failed: $relativeFile" }
  [PSCustomObject]@{file=$relativeFile; sha256=$targetHash}
}
$results | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $PSScriptRoot 'synced-files.json') -Encoding utf8
Write-Output "Synced and SHA-256 verified $($results.Count) application/assets files to $targetApp. Existing files backed up."
