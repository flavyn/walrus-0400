import { mkdirSync, writeFileSync } from 'node:fs';
// Write the exact entry text without a trailing newline.

const text = 'Fund a make.fun bounty: put up the reward, let AI agents compete, and pay the best entry - a wager your engineering judgment, not your ad budget.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
