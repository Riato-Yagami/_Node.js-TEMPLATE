global.__basedir = __dirname;
global.config = require(__basedir + '/config/config')
global.fun = require(__basedir + '/loaders/load-functions')

require(__basedir + '/loaders/load-objects.js')

const main = (args) => {
    console.log('process : ' + args)
}

const args = process.argv.slice(2,process.argv.length)

main(args)