// Skill Seekers Skill
// Transforms documentation websites into production-ready Claude AI skills

const { exec } = require('child_process');
const { promisify } = require('util');
const fs = require('fs').promises;
const path = require('path');
const execAsync = promisify(exec);

class SkillSeekersSkill {
  constructor(config = {}) {
    this.config = {
      enabled: true,
      version: '1.0.0',
      baseUrl: 'https://github.com/yusufkaraaslan/Skill_Seekers.git',
      tempDir: '/tmp/skill-seekers',
      outputDir: './generated-skills',
      ...config
    };
  }

  // Initialize the skill
  async init() {
    console.log('Skill Seekers skill initialized');

    // Ensure output directory exists
    try {
      await fs.mkdir(this.config.outputDir, { recursive: true });
    } catch (error) {
      console.error('Error creating output directory:', error);
    }

    return true;
  }

  // Main skill functionality
  async execute(options = {}) {
    try {
      const {
        action = 'scrape',
        url = null,
        config = null,
        skillName = null,
        enhance = false,
        package: shouldPackage = false
      } = options;

      // Ensure Skill Seekers repo is available
      await this.ensureSkillSeekersRepo();

      let result;
      switch (action) {
        case 'scrape':
          result = await this.scrapeDocumentation(url, config, skillName);
          break;
        case 'enhance':
          result = await this.enhanceSkill(skillName);
          break;
        case 'package':
          result = await this.packageSkill(skillName);
          break;
        case 'estimate':
          result = await this.estimatePages(url);
          break;
        case 'list-configs':
          result = await this.listConfigs();
          break;
        default:
          throw new Error(`Unknown action: ${action}`);
      }

      if (enhance && action === 'scrape' && result.success) {
        console.log('Enhancing skill...');
        await this.enhanceSkill(skillName);
      }

      if (shouldPackage && result.success) {
        console.log('Packaging skill...');
        await this.packageSkill(skillName);
      }

      return result;
    } catch (error) {
      return {
        success: false,
        message: `Error executing Skill Seekers: ${error.message}`,
        error: error.toString()
      };
    }
  }

  // Ensure Skill Seekers repository is cloned
  async ensureSkillSeekersRepo() {
    try {
      await fs.access(this.config.tempDir);
      console.log('Skill Seekers repo already exists');
    } catch {
      console.log('Cloning Skill Seekers repository...');
      await execAsync(`git clone ${this.config.baseUrl} ${this.config.tempDir}`);

      // Install dependencies
      console.log('Installing dependencies...');
      await execAsync('pip install -r requirements.txt', {
        cwd: this.config.tempDir
      });
    }
  }

  // Scrape documentation website
  async scrapeDocumentation(url, configFile, skillName) {
    if (!url && !configFile) {
      return {
        success: false,
        message: 'Either URL or config file must be provided'
      };
    }

    try {
      let command = 'python cli/doc_scraper.py';

      if (configFile) {
        command += ` --config ${configFile}`;
      } else {
        command += ` --url "${url}"`;
        if (skillName) {
          command += ` --skill-name "${skillName}"`;
        }
      }

      const { stdout, stderr } = await execAsync(command, {
        cwd: this.config.tempDir,
        maxBuffer: 10 * 1024 * 1024 // 10MB buffer for large outputs
      });

      return {
        success: true,
        message: 'Documentation scraped successfully',
        data: {
          stdout: stdout.trim(),
          stderr: stderr ? stderr.trim() : null,
          skillName: skillName || 'Generated skill'
        }
      };
    } catch (error) {
      return {
        success: false,
        message: `Error scraping documentation: ${error.message}`,
        error: error.toString()
      };
    }
  }

  // Enhance skill with AI
  async enhanceSkill(skillName) {
    if (!skillName) {
      return {
        success: false,
        message: 'Skill name is required for enhancement'
      };
    }

    try {
      const command = `python cli/enhance_skill.py --skill-name "${skillName}"`;

      const { stdout, stderr } = await execAsync(command, {
        cwd: this.config.tempDir,
        maxBuffer: 10 * 1024 * 1024
      });

      return {
        success: true,
        message: 'Skill enhanced successfully',
        data: {
          stdout: stdout.trim(),
          stderr: stderr ? stderr.trim() : null,
          skillName
        }
      };
    } catch (error) {
      return {
        success: false,
        message: `Error enhancing skill: ${error.message}`,
        error: error.toString()
      };
    }
  }

  // Package skill into .zip format
  async packageSkill(skillName) {
    if (!skillName) {
      return {
        success: false,
        message: 'Skill name is required for packaging'
      };
    }

    try {
      const command = `python cli/package_skill.py --skill-name "${skillName}"`;

      const { stdout, stderr } = await execAsync(command, {
        cwd: this.config.tempDir
      });

      return {
        success: true,
        message: 'Skill packaged successfully',
        data: {
          stdout: stdout.trim(),
          stderr: stderr ? stderr.trim() : null,
          skillName,
          packageFile: `${skillName}.zip`
        }
      };
    } catch (error) {
      return {
        success: false,
        message: `Error packaging skill: ${error.message}`,
        error: error.toString()
      };
    }
  }

  // Estimate number of pages on documentation site
  async estimatePages(url) {
    if (!url) {
      return {
        success: false,
        message: 'URL is required for page estimation'
      };
    }

    try {
      const command = `python estimate_pages.py --url "${url}"`;

      const { stdout } = await execAsync(command, {
        cwd: this.config.tempDir
      });

      return {
        success: true,
        message: 'Page estimation completed',
        data: {
          estimate: stdout.trim(),
          url
        }
      };
    } catch (error) {
      return {
        success: false,
        message: `Error estimating pages: ${error.message}`,
        error: error.toString()
      };
    }
  }

  // List available preset configurations
  async listConfigs() {
    try {
      const configsDir = path.join(this.config.tempDir, 'configs');
      const files = await fs.readdir(configsDir);

      const configs = files
        .filter(f => f.endsWith('.json'))
        .map(f => f.replace('.json', ''));

      return {
        success: true,
        message: 'Available configurations',
        data: {
          configs,
          count: configs.length
        }
      };
    } catch (error) {
      return {
        success: false,
        message: `Error listing configs: ${error.message}`,
        error: error.toString()
      };
    }
  }

  // Setup MCP server
  async setupMCPServer() {
    try {
      const { stdout, stderr } = await execAsync('./setup_mcp.sh', {
        cwd: this.config.tempDir
      });

      return {
        success: true,
        message: 'MCP server setup completed',
        data: {
          stdout: stdout.trim(),
          stderr: stderr ? stderr.trim() : null
        }
      };
    } catch (error) {
      return {
        success: false,
        message: `Error setting up MCP server: ${error.message}`,
        error: error.toString()
      };
    }
  }

  // Cleanup
  async cleanup() {
    console.log('Skill Seekers skill cleanup');
    return true;
  }
}

module.exports = SkillSeekersSkill;
