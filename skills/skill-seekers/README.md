# Skill Seekers

Transforms any documentation website into a production-ready Claude AI skill automatically. Convert online documentation into uploadable skills for Claude without manual effort.

## Installation

```bash
claude-skill install skill-seekers
```

## When to Use This Skill

- Converting official documentation sites into Claude skills
- Creating custom skills from API documentation
- Building framework-specific Claude skills (React, Vue, Django, etc.)
- Automating skill creation from large documentation sets (10K+ pages)
- Generating skills with real code examples from documentation
- Setting up MCP servers for natural language documentation access
- Creating skills for internal company documentation

## What This Skill Does

1. **Scrapes Documentation**: Automatically extracts content from documentation websites
2. **Smart Categorization**: Organizes content by topics, APIs, guides, and examples
3. **Code Detection**: Identifies and extracts code samples in multiple languages
4. **AI Enhancement**: Transforms basic templates into comprehensive guides using Claude
5. **Skill Packaging**: Creates ready-to-upload .zip files for Claude
6. **MCP Integration**: Sets up MCP servers for natural language documentation queries
7. **Handles Scale**: Efficiently processes large documentation sites (10K-40K+ pages)

## How to Use

### Basic Documentation Scraping

```
Scrape the React documentation and create a skill
```

```
Convert the Godot documentation at https://docs.godotengine.org into a Claude skill
```

### Using Preset Configurations

The skill includes 8 preset configurations for popular frameworks:

```
Create a skill from Django documentation using the django preset
```

```
Use the FastAPI config to scrape FastAPI docs
```

Available presets:
- `godot` - Godot Engine documentation
- `react` - React.js documentation
- `vue` - Vue.js documentation
- `django` - Django framework
- `fastapi` - FastAPI framework
- `nextjs` - Next.js framework
- `tailwind` - Tailwind CSS
- `typescript` - TypeScript documentation

### Estimating Documentation Size

Before scraping large sites, estimate the page count:

```
Estimate how many pages are in the Vue.js documentation at https://vuejs.org/guide/
```

### Enhancing Skills with AI

```
Scrape the TensorFlow docs and enhance with AI to add comprehensive examples
```

### Packaging Skills

```
Package the nextjs skill into a .zip file for upload
```

### Advanced Workflow

```
1. Scrape the Python FastAPI documentation
2. Enhance it with Claude to add real-world examples
3. Package it into a .zip file
```

## Example Output

When you run the skill, it will:

1. **Clone and setup** the Skill Seekers repository (first time only)
2. **Scrape** the documentation website
3. **Extract** code examples and organize content
4. **Generate** SKILL.md with comprehensive documentation
5. **Optionally enhance** with AI-generated examples
6. **Optionally package** into uploadable .zip format

Example output structure:
```
generated-skills/
└── react-skill/
    ├── SKILL.md              # Main skill documentation
    ├── examples/             # Code examples
    ├── api-reference/        # API documentation
    └── guides/               # Tutorial guides
```

## Features

### Scraping Capabilities
- Automatic content extraction from documentation sites
- Smart navigation and link following
- Support for complex documentation structures
- Code language detection (Python, JavaScript, GDScript, C++, etc.)
- Checkpoint/resume for large documentation sets
- Parallel processing for faster scraping

### AI Enhancement
- Transforms basic templates into comprehensive guides
- Adds real-world code examples
- Improves documentation clarity
- Both API-based and local enhancement options

### Integration Options
- **MCP Server**: Natural language interface in Claude Code
- **Command-line tools**: Direct CLI access
- **Programmatic API**: Use as a Node.js module

### Performance
- Handles 10K-40K+ pages efficiently
- Caching system for faster re-runs
- Parallel scraping support
- Checkpoint/resume capability

## Tips

- Start with preset configurations for popular frameworks
- Use page estimation for large documentation sites first
- Enable AI enhancement for better skill quality
- Package skills for easy sharing and uploading
- The MCP server provides 9 tools for Claude Code integration
- Scraping respects robots.txt and rate limits
- First run installs dependencies (requires Python and pip)

## Technical Requirements

- Python 3.7+ (installed automatically on first use)
- pip (Python package manager)
- Internet connection for documentation access
- Git (for cloning the Skill Seekers repository)

## Configuration Options

Customize behavior in the config.json file:

- `autoEnhance`: Automatically enhance skills after scraping
- `autoPackage`: Automatically package skills into .zip
- `maxBufferSize`: Buffer size for large output (default: 10MB)
- `tempDir`: Temporary directory for Skill Seekers repo
- `outputDir`: Output directory for generated skills

## Related Use Cases

- Creating documentation search skills
- Building API reference skills
- Generating framework guide skills
- Converting technical docs to Claude skills
- Setting up documentation MCP servers
- Creating internal knowledge base skills

## Credits

Original repository: [Skill Seekers by yusufkaraaslan](https://github.com/yusufkaraaslan/Skill_Seekers)

## Troubleshooting

**Issue**: First run takes a long time
- **Solution**: The skill is cloning the repository and installing dependencies. Subsequent runs will be faster.

**Issue**: Scraping fails on certain pages
- **Solution**: Check if the site blocks automated access. Try using a preset config if available.

**Issue**: Out of memory on large documentation
- **Solution**: The skill uses checkpointing. If it fails, it will resume from the last checkpoint.

**Issue**: Python dependencies not found
- **Solution**: Ensure Python 3.7+ and pip are installed on your system.
