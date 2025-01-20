type TreeNode = {
  name: string;
  children?: TreeNode[];
};

export function validate(nodes: TreeNode[], path = '', errors: string[] = []) {
  nodes.forEach((node, index) => {
    const nodePath = path ? `${path} > ${node?.name ??
    `Unknown name at index ${index} `}` : `index ${index}`;

    if (!node?.name) {
      errors.push(`Missing 'name' at ${nodePath}`);
    }

    if (node?.children) {
      if (!Array.isArray(node.children)) {
        errors.push(`'children' must be an array at ${nodePath}.`);
      } else {
        validate(node.children, `${nodePath} > children[${index}]`, errors);
      }
    }
  });

  return errors;
}

const SPACE = ' ';

export function treegen(nodes: TreeNode[], prefix = '') {
  if (!Array.isArray(nodes)) {
    return 'Invalid JSON structure';
  }

  const errors = validate(nodes);
  if (errors.length > 0) {
    return errors.join('\n');
  }

  const lines: string[] = [];

  nodes.forEach((node, index) => {
    const isLast = index === nodes.length - 1;
    const linePrefix = isLast ? `└──${SPACE}` : `├──${SPACE}`;
    lines.push(`${prefix}${linePrefix}${node.name}`);

    if (node.children && node.children.length > 0) {
      const childPrefix = isLast ? SPACE.repeat(4) : `│${SPACE.repeat(3)}`;
      lines.push(treegen(node.children, prefix + childPrefix));
    }
  });

  return lines.join('\n');
}
