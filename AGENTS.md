# AGENTS

## Scope

These instructions apply to the entire repository.

## Build Rules

- Treat `dist/` as generated output only.
- Do not manually edit `dist/gkd.json5`, `dist/gkd.version.json5`, `dist/README.md`, or `dist/CHANGELOG.md`.
- Do not "hand-sync" generated files after editing source files.
- Make all rule changes in `src/` first, then regenerate outputs with the standard build command.

## Standard Workflow

1. Edit subscription sources under `src/`.
2. Run `pnpm install` when dependencies are missing or changed.
3. Run `pnpm run build` to regenerate `dist/`.
4. Review the generated diffs in both `src/` and `dist/`.

## Environment

- Use Node.js 22 or newer.
- Use `pnpm` for dependency installation and builds.
