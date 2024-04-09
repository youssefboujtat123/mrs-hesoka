<<<<<<< HEAD
console.log('✅ㅤstarting...');
console.log('🧿 𝑴𝑹𝑺 ❤️ 𝑯𝑬𝑺𝑺𝑶𝑲𝑨 🍀');
=======
console.log('[ ℹ️ ] Iniciando...');
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83
import {join, dirname} from 'path';
import {createRequire} from 'module';
import {fileURLToPath} from 'url';
import {setupMaster, fork} from 'cluster';
import {watchFile, unwatchFile} from 'fs';
import cfonts from 'cfonts';
import {createInterface} from 'readline';
import yargs from 'yargs';
const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const {name, author} = require(join(__dirname, './package.json'));
const {say} = cfonts;
const rl = createInterface(process.stdin, process.stdout);

<<<<<<< HEAD

say('MRS - Bot\nWhatsApp Bot MD', {
=======
say('The Mystic\nBot', {
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']});
say(`Bot mrs hesoka`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']});

let isRunning = false;
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
  if (isRunning) return;
  isRunning = true;
  const args = [join(__dirname, file), ...process.argv.slice(2)];

  /** say('[ ℹ️ ] Escanea el código QR o introduce el código de emparejamiento en WhatsApp.', {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']}); **/

  setupMaster({
    exec: args[0],
    args: args.slice(1)});
  const p = fork();
  p.on('message', (data) => {
    console.log('[RECIBIDO]', data);
    switch (data) {
      case 'reset':
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        p.send(process.uptime());
        break;
    }
  });
  p.on('exit', (_, code) => {
    isRunning = false;
<<<<<<< HEAD
    console.error('❎ㅤerror:', code);
=======
    console.error('[ ℹ️ ] Ocurrio un error inesperado:', code);
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83

    p.process.kill();
    isRunning = false;
    start.apply(this, arguments);

    if (process.env.pm_id) {
      process.exit(1);
    } else {
      process.exit();
    }
  });
  const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
  if (!opts['test']) {
    if (!rl.listenerCount()) {
      rl.on('line', (line) => {
        p.emit('message', line.trim());
      });
    }
  }
}
start('main.js');
