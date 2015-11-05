# EXPRESS.JS & MONGOOSE REST API

## Description

This excerpt from a nascent project can be used as a nice bootstrap for developping resfulls service serving mongodb collections

In this basic example we serve documents called "votes" which are bound to a mongoose schema

##Project structure:

```

app
├── controllers
│   ├── index.js << Controllers single entry point
│   └── voteController.js
├── log
│   └── all.log
├── logger.js 
├── model << Model definitions
│   └── vote.js 
├── server.js
└── util
    └── logger.js << Logging config
```
