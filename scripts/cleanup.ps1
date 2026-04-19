$ErrorActionPreference = "Stop"

$targets = @(
  "dist",
  "build",
  "node_modules",
  ".vite",
  ".cache",
  "coverage"
)

foreach ($target in $targets) {
  $fullPath = Join-Path -Path (Get-Location) -ChildPath $target
  if (Test-Path -LiteralPath $fullPath) {
    Remove-Item -LiteralPath $fullPath -Recurse -Force
    Write-Host "Removed: $target"
  } else {
    Write-Host "Not found: $target"
  }
}

Write-Host "Cleanup completed."
