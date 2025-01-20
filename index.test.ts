import { treegen, validate } from './index';

describe('linux-treegen', () => {
  describe('validate', () => {
    it('returns no errors for valid nodes', () => {
      const nodes = [{name: 'root', children: [{name: 'child'}]}];
      expect(validate(nodes)).toEqual([]);
    });

    it('returns error for missing name', () => {
      const nodes = [{children: []}];
      expect(validate(nodes as any)).toEqual(["Missing 'name' at index 0"]);
    });

    it('returns error for non-array children', () => {
      const nodes = [{name: 'root', children: {}}];
      expect(validate(nodes as any)).toEqual(
        ["'children' must be an array at index 0."]);
    });

    it('returns multiple errors for invalid nodes', () => {
      const nodes = [{children: {}}, {name: 'root', children: 'invalid'}];
      expect(validate(nodes as any)).toEqual(
        [
          "Missing 'name' at index 0",
          "'children' must be an array at index 0.",
          "'children' must be an array at index 1.",
        ],
      );
    });
  });

  describe('treegen', () => {
    it('returns tree structure for valid nodes', () => {
      const nodes = [{name: 'root', children: [{name: 'child'}]}];
      const expected = '└── root\n    └── child';
      expect(treegen(nodes)).toBe(expected);
    });

    it('returns error message for invalid JSON structure', () => {
      expect(treegen('invalid' as any)).toBe('Invalid JSON structure');
    });

    it('handles nested children correctly', () => {
      const nodes = [
        {
          name: 'root',
          children: [{name: 'child', children: [{name: 'grandchild'}]}],
        }];
      const expected = '└── root\n    └── child\n        └── grandchild';
      expect(treegen(nodes)).toBe(expected);
    });
  });
});
