// Example Claude Sub-Agent
// This file demonstrates the structure of a Claude sub-agent

class ExampleAgent {
  constructor(config = {}) {
    this.config = {
      name: 'example-agent',
      type: 'assistant',
      version: '1.0.0',
      ...config
    };
  }

  // Initialize the agent
  async init() {
    console.log(`Sub-agent ${this.config.name} initialized`);
    return true;
  }

  // Process input
  async process(input, context = {}) {
    console.log('Processing input:', input);

    // Add your agent logic here
    const response = {
      success: true,
      agent: this.config.name,
      message: `Processed by ${this.config.name}`,
      result: this.transform(input),
      context
    };

    return response;
  }

  // Transform data (example method)
  transform(data) {
    // Add transformation logic
    return {
      original: data,
      processed: true,
      timestamp: new Date().toISOString()
    };
  }

  // Cleanup
  async cleanup() {
    console.log(`Sub-agent ${this.config.name} cleanup`);
    return true;
  }
}

module.exports = ExampleAgent;