const rewireAliases = require('react-app-rewire-aliases');
const path = require('path');
 
module.exports = function override(config, env) {
    config = rewireAliases.aliasesOptions({
        '@actions': path.resolve(__dirname, `src/store/actions`),
        '@creators': path.resolve(__dirname, `src/store/creators`),
    })(config, env);
  return config;
}