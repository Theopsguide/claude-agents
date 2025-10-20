# claude-agents

<<<<<<< HEAD
> **CLI-installable Claude skills and sub-agents organized into focused plugins for enhancing Claude Code capabilities.**
=======
CLI-installable Claude agents and sub-agents for enhancing Claude Code capabilities.
>>>>>>> origin/main

A comprehensive collection of **21 specialized skills** organized into **7 focused plugins** to supercharge your Claude Code development workflow.

## Table of Contents

- [Quick Start](#quick-start)
- [All Skills (Quick Search)](#all-skills-quick-search)
- [All Agents (Quick Search)](#all-agents-quick-search)
- [Plugins by Category](#plugins-by-category)
- [Installation](#installation)
- [Usage](#usage)
- [Repository Structure](#repository-structure)
- [Contributing](#contributing)

---

## Quick Start

```bash
# Quick Install
curl -fsSL https://raw.githubusercontent.com/Theopsguide/claude-skills/main/install.sh | bash

# List available skills
claude-skill list

# Install a specific skill
claude-skill install <skill-name>
```

---

## All Skills (Quick Search)

Complete alphabetical listing of all 21 skills for quick reference:

| Skill Name | Plugin | Description |
|------------|--------|-------------|
| **brainstorming** | development-workflow | Refines rough ideas into fully-formed designs through structured Socratic questioning |
| **changelog-generator** | automation | Automatically creates user-facing changelogs from git commits |
| **condition-based-waiting** | testing-quality | Replaces arbitrary timeouts with condition polling to eliminate flaky tests |
| **defense-in-depth** | debugging | Validates at every layer data passes through to make bugs structurally impossible |
| **dispatching-parallel-agents** | agent-orchestration | Dispatches multiple Claude agents to investigate independent problems concurrently |
| **executing-plans** | development-workflow | Loads plan, reviews critically, executes tasks in batches with review checkpoints |
| **finishing-a-development-branch** | development-workflow | Guides completion of development work with structured options for merge or PR |
| **receiving-code-review** | code-review | Ensures technical rigor when receiving code review feedback |
| **requesting-code-review** | code-review | Dispatches code reviewer subagent to verify work meets requirements |
| **root-cause-tracing** | debugging | Systematically traces bugs backward through call stack to identify source |
| **sharing-skills** | meta-skills | Guides process of contributing skills back to upstream repository via PR |
| **subagent-driven-development** | agent-orchestration | Dispatches fresh subagent for each task with code review between tasks |
| **systematic-debugging** | debugging | Four-phase framework ensuring understanding before attempting solutions |
| **test-driven-development** | testing-quality | Write the test first, watch it fail, write minimal code to pass |
| **testing-anti-patterns** | testing-quality | Prevents testing mock behavior and production pollution with test-only methods |
| **testing-skills-with-subagents** | meta-skills | Applies RED-GREEN-REFACTOR cycle to process documentation |
| **using-git-worktrees** | development-workflow | Creates isolated git worktrees with smart directory selection |
| **using-superpowers** | meta-skills | Establishes mandatory workflows for finding and using skills |
| **verification-before-completion** | testing-quality | Requires running verification commands before making success claims |
| **writing-plans** | development-workflow | Creates comprehensive implementation plans with exact file paths and examples |
| **writing-skills** | meta-skills | Applies TDD to process documentation by testing with subagents |

---

## All Agents (Quick Search)

Currently available sub-agents:

| Agent Name | Plugin | Description |
|------------|--------|-------------|
| **example-agent** | - | Example sub-agent showing the structure |

*More agents coming soon!*

---

## Plugins by Category

### 🔧 Development Workflow
**Plugin:** `development-workflow`

Complete workflow management from ideation to completion.

- **brainstorming** - Use when creating or developing anything, before writing code or implementation plans
- **writing-plans** - Creates comprehensive implementation plans assuming engineer has minimal domain knowledge
- **executing-plans** - Loads plan, reviews critically, executes tasks in batches, reports for review between batches
- **finishing-a-development-branch** - Guides completion of development work by presenting structured options for merge, PR, or cleanup
- **using-git-worktrees** - Creates isolated git worktrees with smart directory selection and safety verification

### 🧪 Testing & Quality
**Plugin:** `testing-quality`

Comprehensive testing practices and quality assurance.

- **test-driven-development** - Write the test first, watch it fail, write minimal code to pass
- **testing-anti-patterns** - Prevents testing mock behavior, production pollution with test-only methods
- **condition-based-waiting** - Replaces arbitrary timeouts with condition polling to wait for actual state changes
- **verification-before-completion** - Requires running verification commands and confirming output before making success claims

### 👀 Code Review
**Plugin:** `code-review`

Structured code review processes for both requesting and receiving reviews.

- **requesting-code-review** - Dispatches superpowers:code-reviewer subagent to review implementation against plan
- **receiving-code-review** - Requires technical rigor and verification, not performative agreement or blind implementation

### 🔍 Debugging
**Plugin:** `debugging`

Advanced debugging techniques and defensive programming.

- **systematic-debugging** - Four-phase framework (root cause investigation, pattern analysis, hypothesis testing, implementation)
- **root-cause-tracing** - Systematically traces bugs backward through call stack, adding instrumentation when needed
- **defense-in-depth** - Validates at every layer data passes through to make bugs structurally impossible

### 🤖 Agent Orchestration
**Plugin:** `agent-orchestration`

Multi-agent coordination and parallel processing.

- **dispatching-parallel-agents** - Dispatches multiple Claude agents to investigate and fix independent problems concurrently
- **subagent-driven-development** - Dispatches fresh subagent for each task with code review between tasks

### 📚 Meta Skills
**Plugin:** `meta-skills`

Skills for creating, testing, and managing skills themselves.

- **writing-skills** - Applies TDD to process documentation by testing with subagents before writing
- **testing-skills-with-subagents** - Applies RED-GREEN-REFACTOR cycle to process documentation
- **sharing-skills** - Guides process of branching, committing, pushing, and creating PR to contribute skills upstream
- **using-superpowers** - Establishes mandatory workflows for finding and using skills

### ⚙️ Automation
**Plugin:** `automation`

Tools and utilities for automation.

- **changelog-generator** - Automatically creates user-facing changelogs from git commits

---

## Installation

### Quick Install

```bash
curl -fsSL https://raw.githubusercontent.com/Theopsguide/claude-agents/main/install.sh | bash
```

### Manual Install

```bash
git clone https://github.com/Theopsguide/claude-agents.git
cd claude-agents
chmod +x install.sh
./install.sh
```

---

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

# Install an entire plugin (all skills in a category)
claude-plugin install <plugin-name>
```

### Example Workflows

**1. Set up a complete development workflow:**
```bash
claude-plugin install development-workflow
```

**2. Install testing best practices:**
```bash
claude-plugin install testing-quality
```

**3. Add debugging capabilities:**
```bash
claude-plugin install debugging
```

---

## Repository Structure

```
claude-agents/
├── .claude-plugin/
│   └── marketplace.json      # Plugin configuration and metadata
├── plugins/                  # Plugin-based organization
│   ├── development-workflow/
│   │   ├── agents/          # Sub-agents for this category
│   │   ├── commands/        # Slash commands
│   │   └── skills/          # Skills (brainstorming, writing-plans, etc.)
│   ├── testing-quality/
│   │   ├── agents/
│   │   ├── commands/
│   │   └── skills/          # Skills (test-driven-development, etc.)
│   ├── code-review/
│   ├── debugging/
│   ├── agent-orchestration/
│   ├── meta-skills/
│   └── automation/
├── skills/                   # Legacy flat structure (maintained for compatibility)
├── subagents/               # Legacy sub-agents directory
├── docs/                    # Documentation
└── install.sh               # Installation script
```

**Each plugin is completely isolated** with its own agents, commands, and skills. Install only what you need!

---

## Adding Skills

### To Plugin Structure (Recommended)

1. Choose or create a plugin directory under `plugins/`
2. Add your skill files to `plugins/<plugin-name>/skills/<skill-name>/`
3. Update `.claude-plugin/marketplace.json` with skill metadata
4. Push changes

### To Legacy Structure (Compatibility)

1. Create a directory under `skills/` with your skill name
2. Add your skill files
3. Update `skills/index.json` with skill metadata
4. Push changes

---

## Adding Sub-agents

1. Create a directory under `plugins/<plugin-name>/agents/<agent-name>/`
2. Add your agent files
3. Update plugin metadata in `.claude-plugin/marketplace.json`
4. Push changes

---

## Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch
3. Add your skill/agent following the structure above
4. Update relevant index files and documentation
5. Submit a pull request

For detailed contribution guidelines, see [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## Credits

This repository includes skills from:
- [obra/superpowers](https://github.com/obra/superpowers) - 20 imported skills
- [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) - changelog-generator

---

## License

MIT License - See [LICENSE](./LICENSE) file for details.

---

## Need Help?

- 📖 [Documentation](./docs/)
- 🐛 [Report Issues](https://github.com/Theopsguide/claude-skills/issues)
- 💬 [Discussions](https://github.com/Theopsguide/claude-skills/discussions)

---

**Made with ❤️ for the Claude Code community**
