const path = require('path');

module.exports = {
  process(_sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`
    };
  }
};
