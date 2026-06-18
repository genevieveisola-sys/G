# GitHub MCP Setup for Cursor

This project uses the [official GitHub MCP Server](https://github.com/github/github-mcp-server) in **Cursor** (not GitHub Copilot IDE). Cursor reads MCP config from `mcpServers` in `mcp.json`.

## What was configured

| Location | Purpose |
|----------|---------|
| `~/.cursor/mcp.json` | Your global config — GitHub + existing Playwright server |
| `.cursor/mcp.json` | Project template for the team (GitHub only; no secrets) |

### JSON added (remote — recommended)

```json
"github": {
  "url": "https://api.githubcopilot.com/mcp/",
  "headers": {
    "Authorization": "Bearer ${env:GITHUB_PERSONAL_ACCESS_TOKEN}"
  }
}
```

**Why remote?** No Docker required, always up to date, and officially supported by GitHub for Cursor v0.48.0+ (Streamable HTTP).

### Alternative: local Docker (if you install Docker later)

```json
"github": {
  "command": "docker",
  "args": [
    "run",
    "-i",
    "--rm",
    "-e",
    "GITHUB_PERSONAL_ACCESS_TOKEN",
    "ghcr.io/github/github-mcp-server"
  ],
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "${env:GITHUB_PERSONAL_ACCESS_TOKEN}"
  }
}
```

> **Do not use** `@modelcontextprotocol/server-github` via npx — it was deprecated in April 2025 and no longer works.

## Authentication: PAT required (OAuth does not work)

Cursor supports OAuth for *some* MCP servers, but **GitHub MCP currently requires a Personal Access Token** — including the remote endpoint at `https://api.githubcopilot.com/mcp/`. Copilot in VS Code can use OAuth; Cursor does not for this server.

### 1. Create a GitHub PAT

1. Open [Fine-grained personal access tokens](https://github.com/settings/personal-access-tokens/new) (or [classic tokens](https://github.com/settings/tokens/new) if you prefer).
2. **Resource owner:** your account (`genevieveisola-sys`) or the org that owns `quincecreative`.
3. **Repository access:** select `genevieveisola-sys/quincecreative` (or “All repositories” if you need broader access).
4. **Permissions** (minimum for clone/push and repo operations):
   - **Contents** — Read and write (push, clone, file CRUD)
   - **Metadata** — Read-only (always required)
   - **Pull requests** — Read and write (if you want PR tools)
   - **Issues** — Read and write (optional)
5. For org-owned repos, you may also need **`read:org`** (classic scope) or org membership approval for fine-grained tokens.

### 2. Set the token as an environment variable

The config references `${env:GITHUB_PERSONAL_ACCESS_TOKEN}` — **never paste the token into `mcp.json`**.

**macOS (recommended for Cursor GUI apps):**

```bash
# Add to ~/.zshrc or ~/.bash_profile
export GITHUB_PERSONAL_ACCESS_TOKEN="ghp_your_token_here"
```

Because Cursor is a GUI app, it may not inherit shell-only exports. If the server fails to authenticate after restart, set the variable for GUI sessions:

```bash
launchctl setenv GITHUB_PERSONAL_ACCESS_TOKEN "ghp_your_token_here"
```

Or set it in **Cursor → Settings → Tools & MCP → github → pencil icon** and paste the token there (stored locally, not in the repo).

### 3. Restart Cursor

1. **Quit Cursor completely** (Cmd+Q), not just close the window.
2. Reopen Cursor and this project.
3. Go to **Settings → Tools & MCP** and confirm **github** shows a **green dot**.
4. In Agent/Composer, open **Available Tools** and test: *“List my GitHub repositories”* or *“Show open PRs on genevieveisola-sys/quincecreative”*.

## Security

- Do **not** commit PATs to git. `.cursor/mcp.json` in this repo uses only `${env:...}` — safe to commit.
- Rotate tokens periodically at [github.com/settings/tokens](https://github.com/settings/tokens).
- Restrict token scope to the `quincecreative` repo when possible.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Red dot / server not loading | Validate JSON in `mcp.json`; restart Cursor fully |
| 401 / auth errors | Confirm `GITHUB_PERSONAL_ACCESS_TOKEN` is set; use `launchctl setenv` on macOS |
| Streamable HTTP errors | Upgrade Cursor to v0.48.0+ |
| Tools missing | Check **Settings → Tools & MCP**; review Cursor logs |
| Docker path fails | Install Docker Desktop; run `docker pull ghcr.io/github/github-mcp-server` |

## References

- [GitHub MCP — Cursor install guide](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-cursor.md)
- [Cursor MCP documentation](https://cursor.com/docs/mcp)
