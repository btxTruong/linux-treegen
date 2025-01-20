# linux-treegen
linux-treegen is a lightweight JavaScript library for generating folder-like tree structures, inspired by the Linux tree command.

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
This project is licensed under the MIT License. See the LICENSE file for more details.

## Author
Developed by Truong Bui
