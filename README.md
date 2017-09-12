# Technical requirements

You'll need Node.js 6+ or Docker.

## How to run it with Node.js

```
$ cd path/to/hangman
$ npm install
$ npm test
```

If all went well, just run:

```
$ npm start
```

Navigate to http://localhost:9090/ to start playing.

# Configuration

You can set custom settings by changing the `config.json` file.
The possible keys are `maxMisses` (integer) and `availableWords` (array of strings)
