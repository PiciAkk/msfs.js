const chokidar = require('chokidar');
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

console.log("Activating MSFS.js...")

var watcher = chokidar.watch(__dirname, {ignored: /^\./, persistent: true});

watcher
  .on('add', function(path) {
   	if (path.includes("node_modules")) {
   		console.log("Failed installation detected...");
   	} else if (path.includes("msfsKillSignal")) {
      console.log("Deactivating MSFS.js...")
   	}
  })
  //.on('change', function(path) {console.log('File', path, 'has been changed');})
  //.on('unlink', function(path) {console.log('File', path, 'has been removed');})
  //.on('error', function(error) {console.error('Error happened', error);})
