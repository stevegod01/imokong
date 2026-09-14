$ErrorActionPreference = 'Stop'
$projectRoot = 'C:\Users\ejiog\Documents\imokong\redesign'
$stagingRoot = 'C:\Users\ejiog\OneDrive\Documents\imokong\banner-update'
$assetRoot = 'C:\Users\ejiog\.codex\visualizations\2026\09\06\01a07787-d179-7b23-bf3d-0ed9a66ad962'
$stylesheetPath = Join-Path $projectRoot 'app\globals.css'
$stylesheet = Get-Content -LiteralPath $stylesheetPath -Raw
$sectionStart = $stylesheet.IndexOf('/* Homepage highlight banners')
$sectionEnd = $stylesheet.IndexOf('/* Company information and specifications from the supplied product brochure. */')
if ($sectionStart -lt 0 -or $sectionEnd -le $sectionStart) {
  throw 'The banner stylesheet boundaries have changed.'
}
$bannerStyles = Get-Content -LiteralPath (Join-Path $stagingRoot 'banner.css') -Raw
$supplyClips = Get-Content -LiteralPath (Join-Path $assetRoot 'banner-supply-clips.css') -Raw
$industrialClips = Get-Content -LiteralPath (Join-Path $assetRoot 'banner-industrial-clips.css') -Raw
foreach ($piece in @('warehouse','truck','container','pallet')) {
  if (!$supplyClips.Contains('.banner-piece-' + $piece)) { throw ('Missing supply clip: ' + $piece) }
}
foreach ($piece in @('drum','glycerine','soap','sacks')) {
  if (!$industrialClips.Contains('.banner-piece-' + $piece)) { throw ('Missing industrial clip: ' + $piece) }
}
$updatedStyles = $stylesheet.Substring(0, $sectionStart) + $bannerStyles + "`r`n" + $supplyClips + "`r`n" + $industrialClips + "`r`n" + $stylesheet.Substring($sectionEnd)
foreach ($theme in @('supply','industrial','food')) {
  $source = Join-Path $assetRoot ('banner-' + $theme + '-sprites.png')
  $destination = Join-Path $projectRoot ('public\images\banner-' + $theme + '-parts.png')
  if (!(Test-Path -LiteralPath $source)) { throw ('Missing artwork: ' + $source) }
  if (Test-Path -LiteralPath $destination) { throw ('Artwork destination already exists: ' + $destination) }
}
foreach ($theme in @('supply','industrial','food')) {
  Copy-Item -LiteralPath (Join-Path $assetRoot ('banner-' + $theme + '-sprites.png')) -Destination (Join-Path $projectRoot ('public\images\banner-' + $theme + '-parts.png'))
}
Copy-Item -LiteralPath (Join-Path $stagingRoot 'hero-banner.tsx') -Destination (Join-Path $projectRoot 'components\hero-banner.tsx') -Force
[System.IO.File]::WriteAllText($stylesheetPath, $updatedStyles, [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::WriteAllText((Join-Path $stagingRoot 'banner.css'), ($bannerStyles + "`r`n" + $supplyClips + "`r`n" + $industrialClips), [System.Text.UTF8Encoding]::new($false))
Copy-Item -LiteralPath (Join-Path $assetRoot 'banner-sprite-prompts.json') -Destination (Join-Path $projectRoot 'design\banner-motion-prompts.json')
Copy-Item -LiteralPath (Join-Path $stagingRoot 'banner-motion-notes.md') -Destination (Join-Path $projectRoot 'design\banner-motion-notes.md')
Write-Output 'Installed twelve independent banner objects, motion controls and sprite assets.'
