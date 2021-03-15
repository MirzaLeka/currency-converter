const { exec } = require('child_process');

const cmd = process.argv[2];

// don't use in prod 😁
let toExecute;

switch (cmd) {
  case 'go':
    toExecute = `start chrome www.${process.argv[3]}`
    break;
  case 'print':
    const words = process.argv.slice(3).join(' ');
    toExecute = `echo ${words}`
    break;
  case 'search':
    const criteria = process.argv.slice(3).join('+');
    toExecute = `start chrome www.google.com/search?q=${criteria}`;
    break;
}

// open dir/file.type
// take last index of . in array, followed by js, ts, png, etc.

// --color='red' => only if print

// console.log(toExecute);

	exec(toExecute,
        (error, stdout, stderr) => {
            console.log(stdout);
     //       console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
