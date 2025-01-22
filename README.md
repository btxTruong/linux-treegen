# linux-treegen
[![npm version](https://badgen.net/npm/v/linux-treegen)](https://www.npmjs.com/package/linux-treegen)
[![npm downloads](https://badgen.net/npm/dm/linux-treegen)](https://www.npmjs.com/package/linux-treegen)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

linux-treegen is a lightweight Typescript library for generating folder-like tree structures, inspired by the Linux tree command.

## Features
- Dynamically generate tree structures for nested JSON objects.
- Supports any level of nested structures.

## Installation

### Using npm
```bash
npm install linux-treegen
```

### Using yarn
```bash
yarn add linux-treegen
```

## Usage
```javascript
import { treegen } from 'linux-treegen';

const jsonStructure = [
  { "name": "package.json" },
  { "name": "README.md" },
  {
    "name": "src",
    "children": [
        { "name": "1" },
        { "name": "2" },
        { "name": "3" },
    ],
  },
];

const tree = treegen(jsonStructure);
console.log(tree);
```

## Output
```plaintext
├── package.json
├── README.md
└── src
    ├── 1
    ├── 2
    └── 3
```

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/btxTruong/linux-treegen/blob/main/LICENSE) file for more details.
