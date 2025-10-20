# claude-agents

Production-ready Claude Code plugins, skills, and agents for solo developers and small teams - no Kubernetes complexity, just practical development tools.

A comprehensive collection of **27 production-ready plugins** and **21 specialized skills** organized into focused categories to supercharge your Claude Code development workflow.

## Table of Contents

- [Quick Start](#quick-start)
- [What's New: 27 Production Plugins](#whats-new-27-production-plugins)
- [All Skills (Quick Reference)](#all-skills-quick-reference)
- [All Agents (Quick Reference)](#all-agents-quick-reference)
- [Skills by Category](#skills-by-category)
- [Installation](#installation)
- [Usage](#usage)
- [Repository Structure](#repository-structure)
- [Contributing](#contributing)
- [Attribution](#attribution)

---

## Quick Start

```bash
# Quick Install
curl -fsSL https://raw.githubusercontent.com/Theopsguide/claude-agents/main/install.sh | bash

# List available items
claude-plugin list
claude-skill list
claude-subagent list

# Install a specific plugin
claude-plugin install <plugin-name>

# Install a specific skill
claude-skill install <skill-name>
```

---

## What's New: 27 Production Plugins

This repository now includes **27 production-ready plugins** imported and curated for practical development workflows.

### Core Development (8 plugins)
Essential tools for daily development work:

- **debugging-toolkit** - Problem solving fundamentals and smart debugging workflows
- **python-development** - Python development with FastAPI, Django, and async patterns
- **javascript-typescript** - Frontend/full-stack JavaScript and TypeScript development
- **backend-development** - API design, architecture patterns, and microservices
- **git-pr-workflows** - Version control, pull requests, and team onboarding
- **code-documentation** - Technical writing and automated documentation generation
- **unit-testing** - Test automation for Python and JavaScript
- **code-review-ai** - AI-powered architectural review and quality analysis

### Database & Data (3 plugins)

- **database-design** - Schema design and database architecture
- **database-migrations** - Safe database change management
- **data-engineering** - ETL pipelines and data processing workflows

### Infrastructure & Operations (6 plugins)

- **cloud-infrastructure** - AWS/Azure/GCP deployment (no K8s complexity)
- **cicd-automation** - Automated build and deployment pipelines
- **deployment-strategies** - Deployment patterns and strategies
- **incident-response** - Production problem solving and diagnostics
- **error-diagnostics** - Root cause analysis and debugging
- **application-performance** - Performance optimization and monitoring

### Quality & Maintenance (4 plugins)

- **code-refactoring** - Technical debt management and code cleanup
- **dependency-management** - Dependency auditing and security scanning
- **security-scanning** - Vulnerability detection and security analysis
- **backend-api-security** - API security hardening and best practices

### Business/Content (5 plugins)

- **seo-content-creation** - SEO content strategy and creation
- **seo-technical-optimization** - Technical SEO implementation
- **content-marketing** - Content marketing and growth strategies
- **business-analytics** - KPI tracking and business metrics
- **api-scaffolding** - Quick API generation and scaffolding

### Additional Plugins

- **frontend-mobile-development** - UI development and cross-platform mobile apps

---

## All Skills (Quick Reference)

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

## All Agents (Quick Reference)

Currently available sub-agents:

| Agent Name | Plugin | Description |
|------------|--------|-------------|
| **example-agent** | - | Example sub-agent showing the structure |

*More agents coming soon!*

---

## Skills by Category

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
# Install a plugin
claude-plugin install <plugin-name>

# Install a skill
claude-skill install <skill-name>

# Install a sub-agent
claude-subagent install <agent-name>

# List available items
claude-plugin list
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

**4. Install production-ready Python development tools:**
```bash
claude-plugin install python-development
```

---

## Repository Structure

```
claude-agents/
├── .claude-plugin/              # Plugin marketplace manifest
│   └── marketplace.json         # Plugin configuration and metadata
├── plugins/                     # 27 production-ready plugins
│   ├── debugging-toolkit/
│   ├── python-development/
│   ├── javascript-typescript/
│   ├── backend-development/
│   ├── git-pr-workflows/
│   ├── code-documentation/
│   ├── unit-testing/
│   ├── code-review-ai/
│   ├── database-design/
│   ├── database-migrations/
│   ├── data-engineering/
│   ├── cloud-infrastructure/
│   ├── cicd-automation/
│   ├── deployment-strategies/
│   ├── incident-response/
│   ├── error-diagnostics/
│   ├── application-performance/
│   ├── code-refactoring/
│   ├── dependency-management/
│   ├── security-scanning/
│   ├── backend-api-security/
│   ├── seo-content-creation/
│   ├── seo-technical-optimization/
│   ├── content-marketing/
│   ├── business-analytics/
│   ├── api-scaffolding/
│   └── frontend-mobile-development/
├── skills/                      # 21 specialized skills
│   ├── brainstorming/
│   ├── systematic-debugging/
│   ├── test-driven-development/
│   └── ...
├── subagents/                   # Specialized sub-agents
│   └── example-agent/
└── install.sh                   # Installation script
```

**Each plugin is completely isolated** with its own agents, commands, and skills. Install only what you need!

---

## Philosophy

This collection is curated for **solo developers and small teams** who need:

- Production-ready tools without over-engineering
- Simple deployment strategies (skip the Kubernetes complexity)
- Quality without excessive ceremony
- Practical workflows over theoretical perfection

---

## Contributing

We welcome contributions! Here's how:

### Adding Plugins

1. Create a directory under `plugins/` with your plugin name
2. Add agents, commands, and skills subdirectories
3. Update `.claude-plugin/marketplace.json` with plugin metadata
4. Push changes

### Adding Skills

**To Plugin Structure (Recommended):**
1. Choose or create a plugin directory under `plugins/`
2. Add your skill files to `plugins/<plugin-name>/skills/<skill-name>/`
3. Update `.claude-plugin/marketplace.json` with skill metadata

**To Legacy Structure (Compatibility):**
1. Create a directory under `skills/` with your skill name
2. Add your skill files and SKILL.md
3. Update `skills/index.json` with skill metadata
4. Push changes

### Adding Sub-agents

1. Create a directory under `plugins/<plugin-name>/agents/<agent-name>/`
2. Add your agent files
3. Update plugin metadata in `.claude-plugin/marketplace.json`
4. Push changes

For detailed contribution guidelines, see [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## Attribution

**Skills:** Imported from [obra/superpowers](https://github.com/obra/superpowers) and [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)

**Plugins:** Curated from [wshobson/agents](https://github.com/wshobson/agents) and optimized for The Operations Guide workflows

---

## License

MIT License - See [LICENSE](./LICENSE) file for details.

---

## Need Help?

- 📖 [Documentation](./docs/)
- 🐛 [Report Issues](https://github.com/Theopsguide/claude-agents/issues)
- 💬 [Discussions](https://github.com/Theopsguide/claude-agents/discussions)

---

Made with ❤️ from Big Tex
