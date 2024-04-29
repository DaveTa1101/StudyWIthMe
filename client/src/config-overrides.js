const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins.push(new MonacoWebpackPlugin(
    {
      languages: ['json', 'javascript', 'css', 'html', 'typescript', 'python', 'java', 'c', 'cpp', 'csharp', 'php', 'go', 'ruby', 'swift', 'kotlin', 'rust', 'scala', 'perl', 'shell', 'sql', 'yaml', 'xml', 'plaintext']
    }
  ));
  return config;
};
