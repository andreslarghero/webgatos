param(
  [string]$RepoUrl = "https://github.com/Summer87Intelligence/webgatos.git"
)

Write-Host "== Git push webgatos =="

git init
git add .
git commit -m "init: Adrianuzca's Cat Cafe web v1"

git branch -M main

# set or reset origin
git remote remove origin 2>$null
git remote add origin $RepoUrl

git push -u origin main

Write-Host "== Done =="
