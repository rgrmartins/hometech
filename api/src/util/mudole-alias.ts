import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');

// Adicionando Alias para src, facilitando os imports
moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
});