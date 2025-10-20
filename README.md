# claude-agents

> **Note:** Recently updated with 27 production-ready plugins for enhanced development workflows.

Production-ready Claude Code plugins, skills, and agents for solo developers and small teams - no Kubernetes complexity, just practical development tools.

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

## What's Included

This repository contains **27 production-ready plugins**, **20+ skills**, and **multiple specialized agents** organized for practical development workflows.

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
```

## Directory Structure

```
claude-agents/
├── .claude-plugin/      # Plugin marketplace manifest
├── plugins/             # 27 production-ready plugins
│   ├── debugging-toolkit/
│   ├── python-development/
│   ├── backend-development/
│   └── ...
├── skills/              # Claude skills
│   ├── systematic-debugging/
│   ├── test-driven-development/
│   └── ...
├── subagents/           # Specialized sub-agents
│   └── example-agent/
└── install.sh           # Installation script
```

## Philosophy

This collection is curated for **solo developers and small teams** who need:

- Production-ready tools without over-engineering
- Simple deployment strategies (skip the Kubernetes complexity)
- Quality without excessive ceremony
- Practical workflows over theoretical perfection

## Adding Content

### Adding Plugins

1. Create a directory under `plugins/` with your plugin name
2. Add agents, commands, and skills subdirectories
3. Update `.claude-plugin/marketplace.json` with plugin metadata
4. Push changes

### Adding Skills

1. Create a directory under `skills/` with your skill name
2. Add your skill files and SKILL.md
3. Update `skills/index.json` with skill metadata
4. Push changes

### Adding Sub-agents

1. Create a directory under `subagents/` with your agent name
2. Add your agent files
3. Update `subagents/index.json` with agent metadata
4. Push changes

## Attribution

Plugins imported from [wshobson/agents](https://github.com/wshobson/agents) - curated and optimized for The Operations Guide workflows.

## License

MIT License - See LICENSE file for details.