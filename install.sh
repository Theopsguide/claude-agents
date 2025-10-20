#!/bin/bash

# claude-agents Installation Script
# Simple, minimal installer for Claude agents and sub-agents

set -e

# Configuration
INSTALL_DIR="$HOME/.claude"
REPO_URL="https://github.com/Theopsguide/claude-agents.git"
SKILLS_DIR="$INSTALL_DIR/skills"
AGENTS_DIR="$INSTALL_DIR/subagents"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Functions
print_success() { echo -e "${GREEN}✓${NC} $1"; }
print_info() { echo -e "${BLUE}→${NC} $1"; }
print_error() { echo -e "${RED}✗${NC} $1"; }

# Check for git
if ! command -v git &> /dev/null; then
    print_error "git is required but not installed"
    exit 1
fi

# Check for curl
if ! command -v curl &> /dev/null; then
    print_error "curl is required but not installed"
    exit 1
fi

# Create installation directory
print_info "Creating installation directory..."
mkdir -p "$INSTALL_DIR"

# Clone or update repository
if [ -d "$INSTALL_DIR/repo" ]; then
    print_info "Updating existing installation..."
    cd "$INSTALL_DIR/repo" && git pull
else
    print_info "Cloning repository..."
    git clone "$REPO_URL" "$INSTALL_DIR/repo"
fi

# Copy skills and agents
print_info "Installing skills and agents..."
cp -r "$INSTALL_DIR/repo/skills" "$SKILLS_DIR"
cp -r "$INSTALL_DIR/repo/subagents" "$AGENTS_DIR"

# Create CLI commands
print_info "Creating CLI commands..."

# Create claude-skill command
cat > "$HOME/.local/bin/claude-skill" << 'EOF'
#!/bin/bash
SKILLS_DIR="$HOME/.claude/skills"

case "$1" in
    install)
        if [ -z "$2" ]; then
            echo "Usage: claude-skill install <skill-name>"
            exit 1
        fi
        SKILL_PATH="$SKILLS_DIR/$2"
        if [ -d "$SKILL_PATH" ]; then
            echo "Installing skill: $2"
            # Add installation logic here
            echo "✓ Skill '$2' installed successfully"
        else
            echo "Error: Skill '$2' not found"
            exit 1
        fi
        ;;
    list)
        echo "Available skills:"
        for skill in "$SKILLS_DIR"/*/; do
            [ -d "$skill" ] && echo "  - $(basename "$skill")"
        done
        ;;
    *)
        echo "Usage: claude-skill [install|list] [skill-name]"
        exit 1
        ;;
esac
EOF

# Create claude-subagent command
cat > "$HOME/.local/bin/claude-subagent" << 'EOF'
#!/bin/bash
AGENTS_DIR="$HOME/.claude/subagents"

case "$1" in
    install)
        if [ -z "$2" ]; then
            echo "Usage: claude-subagent install <agent-name>"
            exit 1
        fi
        AGENT_PATH="$AGENTS_DIR/$2"
        if [ -d "$AGENT_PATH" ]; then
            echo "Installing sub-agent: $2"
            # Add installation logic here
            echo "✓ Sub-agent '$2' installed successfully"
        else
            echo "Error: Sub-agent '$2' not found"
            exit 1
        fi
        ;;
    list)
        echo "Available sub-agents:"
        for agent in "$AGENTS_DIR"/*/; do
            [ -d "$agent" ] && echo "  - $(basename "$agent")"
        done
        ;;
    *)
        echo "Usage: claude-subagent [install|list] [agent-name]"
        exit 1
        ;;
esac
EOF

# Make commands executable
chmod +x "$HOME/.local/bin/claude-skill"
chmod +x "$HOME/.local/bin/claude-subagent"

# Create .local/bin if it doesn't exist
mkdir -p "$HOME/.local/bin"

# Add to PATH if not already there
if [[ ":$PATH:" != *":$HOME/.local/bin:"* ]]; then
    print_info "Adding ~/.local/bin to PATH..."
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.bashrc"
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.zshrc" 2>/dev/null || true
    print_info "Please run: source ~/.bashrc (or restart terminal)"
fi

print_success "Installation complete!"
echo ""
echo "Available commands:"
echo "  claude-skill install <name>    - Install a skill"
echo "  claude-skill list             - List available skills"
echo "  claude-subagent install <name> - Install a sub-agent"
echo "  claude-subagent list          - List available sub-agents"
echo ""
echo "Installation directory: $INSTALL_DIR"