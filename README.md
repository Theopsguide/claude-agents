# claude-agents

CLI-installable Claude agents and sub-agents for enhancing Claude Code capabilities.

## Quick Install

```bash
curl -fsSL https://raw.githubusercontent.com/Theopsguide/claude-agents/main/install.sh | bash
```

## Manual Install

```bash
git clone https://github.com/Theopsguide/claude-agents.git
cd claude-agents
chmod +x install.sh
./install.sh
```

## Usage

After installation, use these commands:

```bash
# Install a skill
claude-skill install <skill-name>

# Install a sub-agent
claude-subagent install <agent-name>

# List available items
claude-skill list
claude-subagent list
```

## Directory Structure

```
claude-agents/
├── skills/           # Claude skills
│   └── example/     # Example skill
├── subagents/       # Sub-agents
│   └── example/     # Example agent
├── docs/            # Documentation
└── install.sh       # Installation script
```

## Adding Skills

1. Create a directory under `skills/` with your skill name
2. Add your skill files
3. Update `skills/index.json` with skill metadata
4. Push changes

## Adding Sub-agents

1. Create a directory under `subagents/` with your agent name
2. Add your agent files
3. Update `subagents/index.json` with agent metadata
4. Push changes

## License

MIT License - See LICENSE file for details.