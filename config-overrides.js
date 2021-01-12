const rewireAliases = require('react-app-rewire-aliases');
const path = require('path');
 
module.exports = function override(config, env) {
    config = rewireAliases.aliasesOptions({
        '@actions': path.resolve(__dirname, `src/store/actions`)
    })(config, env);
  return config;
}