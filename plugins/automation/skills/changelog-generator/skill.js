// Changelog Generator Skill
// Automatically creates user-facing changelogs from git commits

const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

class ChangelogGeneratorSkill {
  constructor(config = {}) {
    this.config = {
      enabled: true,
      version: '1.0.0',
      categories: {
        feat: '✨ New Features',
        fix: '🐛 Bug Fixes',
        perf: '⚡ Performance',
        docs: '📚 Documentation',
        style: '💎 Style',
        refactor: '♻️ Code Refactoring',
        test: '🧪 Tests',
        chore: '🔧 Chores',
        security: '🔒 Security',
        breaking: '💥 Breaking Changes'
      },
      excludePatterns: [
        '^Merge branch',
        '^Merge pull request',
        'WIP',
        'work in progress'
      ],
      ...config
    };
  }

  // Initialize the skill
  async init() {
    console.log('Changelog Generator skill initialized');
    return true;
  }

  // Main skill functionality
  async execute(options = {}) {
    try {
      const {
        since = 'HEAD~10',
        until = 'HEAD',
        format = 'markdown',
        outputFile = null
      } = options;

      // Get git log
      const commits = await this.getCommits(since, until);

      // Categorize commits
      const categorized = this.categorizeCommits(commits);

      // Generate changelog
      const changelog = this.formatChangelog(categorized, format);

      // Save if output file specified
      if (outputFile) {
        await this.saveChangelog(changelog, outputFile);
      }

      return {
        success: true,
        message: 'Changelog generated successfully',
        data: {
          changelog,
          commitCount: commits.length,
          categories: Object.keys(categorized)
        }
      };
    } catch (error) {
      return {
        success: false,
        message: `Error generating changelog: ${error.message}`,
        error: error.toString()
      };
    }
  }

  // Get commits from git
  async getCommits(since, until) {
    try {
      const { stdout } = await execAsync(
        `git log ${since}..${until} --pretty=format:"%H|%s|%b|%an|%ae|%ad" --date=short`
      );

      if (!stdout) return [];

      return stdout.split('\n').map(line => {
        const [hash, subject, body, author, email, date] = line.split('|');
        return { hash, subject, body, author, email, date };
      }).filter(commit => {
        // Filter out excluded patterns
        return !this.config.excludePatterns.some(pattern =>
          new RegExp(pattern, 'i').test(commit.subject)
        );
      });
    } catch (error) {
      console.error('Error getting commits:', error);
      return [];
    }
  }

  // Categorize commits by type
  categorizeCommits(commits) {
    const categorized = {};

    commits.forEach(commit => {
      const category = this.detectCategory(commit.subject);
      if (!categorized[category]) {
        categorized[category] = [];
      }

      // Transform technical commit to user-friendly message
      const userFriendlyMessage = this.transformMessage(commit.subject);
      categorized[category].push({
        ...commit,
        userFriendlyMessage
      });
    });

    return categorized;
  }

  // Detect category from commit message
  detectCategory(subject) {
    const lower = subject.toLowerCase();

    // Check for conventional commit format
    const conventionalMatch = subject.match(/^(\w+)(\(.+\))?:/);
    if (conventionalMatch) {
      const type = conventionalMatch[1];
      if (this.config.categories[type]) {
        return type;
      }
    }

    // Fallback to keyword detection
    if (lower.includes('fix') || lower.includes('bug') || lower.includes('issue')) {
      return 'fix';
    }
    if (lower.includes('feat') || lower.includes('add') || lower.includes('new')) {
      return 'feat';
    }
    if (lower.includes('security') || lower.includes('vulnerability')) {
      return 'security';
    }
    if (lower.includes('breaking')) {
      return 'breaking';
    }
    if (lower.includes('perf') || lower.includes('optimize')) {
      return 'perf';
    }
    if (lower.includes('doc')) {
      return 'docs';
    }

    return 'chore';
  }

  // Transform technical message to user-friendly
  transformMessage(subject) {
    // Remove conventional commit prefix
    let message = subject.replace(/^\w+(\(.+\))?:\s*/, '');

    // Capitalize first letter
    message = message.charAt(0).toUpperCase() + message.slice(1);

    // Add period if missing
    if (!message.match(/[.!?]$/)) {
      message += '.';
    }

    // Transform technical terms
    message = message
      .replace(/\bAPI\b/g, 'interface')
      .replace(/\bUI\b/g, 'interface')
      .replace(/\bbug\b/gi, 'issue')
      .replace(/\brefactor/gi, 'improved')
      .replace(/\bfix/gi, 'fixed');

    return message;
  }

  // Format changelog output
  formatChangelog(categorized, format) {
    if (format === 'markdown') {
      return this.formatMarkdown(categorized);
    }
    // Add other formats as needed
    return this.formatPlainText(categorized);
  }

  // Format as markdown
  formatMarkdown(categorized) {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    let changelog = `# Changelog - ${date}\n\n`;

    // Order categories by importance
    const categoryOrder = ['breaking', 'security', 'feat', 'fix', 'perf', 'docs', 'style', 'refactor', 'test', 'chore'];

    categoryOrder.forEach(category => {
      if (categorized[category] && categorized[category].length > 0) {
        changelog += `## ${this.config.categories[category]}\n\n`;
        categorized[category].forEach(commit => {
          changelog += `- ${commit.userFriendlyMessage}\n`;
        });
        changelog += '\n';
      }
    });

    return changelog;
  }

  // Format as plain text
  formatPlainText(categorized) {
    let changelog = '';
    Object.entries(categorized).forEach(([category, commits]) => {
      changelog += `${this.config.categories[category]}:\n`;
      commits.forEach(commit => {
        changelog += `  - ${commit.userFriendlyMessage}\n`;
      });
      changelog += '\n';
    });
    return changelog;
  }

  // Save changelog to file
  async saveChangelog(changelog, filename) {
    const fs = require('fs').promises;
    await fs.writeFile(filename, changelog, 'utf8');
    console.log(`Changelog saved to ${filename}`);
  }

  // Cleanup
  async cleanup() {
    console.log('Changelog Generator skill cleanup');
    return true;
  }
}

module.exports = ChangelogGeneratorSkill;