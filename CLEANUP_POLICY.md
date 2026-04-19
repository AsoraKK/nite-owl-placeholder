# Repository Cleanup Policy

## Purpose
Keep the repository lean, reviewable, and fast to clone by committing source code and intentional artifacts only.

## Rules
1. Do not commit dependency folders (`node_modules/`).
2. Do not commit generated build output (`dist/`, `build/`) unless explicitly requested for a release snapshot.
3. Keep `.gitignore` authoritative and updated when new tools introduce generated files.
4. Before every commit, run `git status --short` and verify only intentional changes are staged.
5. If generated files are accidentally tracked, remove them from Git tracking with:
   `git rm -r --cached <path>`

## Standard Cleanup Workflow
1. Run the cleanup script:
   `powershell -ExecutionPolicy Bypass -File .\scripts\cleanup.ps1`
2. Verify with:
   `git status --short`
3. Stage only intended source files and docs.

## Exception Rule
If a full workspace snapshot is explicitly requested, state that the commit intentionally includes generated/dependency artifacts.
