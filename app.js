import { Blinker, Pulsar, Toad } from './patterns.js';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getNeighbours(arr, i, j) {
  const len = arr.length;
  let neighbours = 0;
  if (i > 0 && arr[i - 1][j] == 1) neighbours++;
  if (j > 0 && arr[i][j - 1] == 1) neighbours++;
  if (i > 0 && j > 0 && arr[i - 1][j - 1] == 1) neighbours++;
  if (i < len - 1 && arr[i + 1][j] == 1) neighbours++;
  if (j < len - 1 && arr[i][j + 1] == 1) neighbours++;
  if (i < len - 1 && j < len - 1 && arr[i + 1][j + 1] == 1) neighbours++;
  if (i < len - 1 && j > 0 && arr[i + 1][j - 1] == 1) neighbours++;
  if (i > 0 && j < len - 1 && arr[i - 1][j + 1] == 1) neighbours++;
  return neighbours;
}

function applyRules(state, neighbours) {
  if (state == 1 && neighbours < 2) return 0;
  if (state == 1 && neighbours > 3) return 0;
  if (state == 1 && (neighbours == 2 || neighbours == 3)) return 1;
  if (state == 0 && neighbours == 3) return 1;
  return state;
}

function gameOfLife(arr) {
  const arrLen = arr.length;
  let newArr = new Array(arrLen).fill(0).map(() => new Array(arrLen).fill(0));
  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < arrLen; j++) {
      newArr[i][j] = applyRules(arr[i][j], getNeighbours(arr, i, j));
    }
  }
  return newArr;
}

async function main() {
  const arrLen = 30 * 2;
  const generationDelay = 500;
  const margin = Math.floor(arrLen / 4);
  let arr = new Array(arrLen).fill(0).map(() => new Array(arrLen).fill(0));

  // Examples

  arr = Pulsar(arr, margin);
  // arr = Toad(arr, margin);
  // arr = Blinker(arr, margin);

  for (let gen = 1; true; gen++) {
    for (let i = margin; i < arrLen - margin; i++) {
      for (let j = margin; j < arrLen - margin; j++) {
        if (arr[i][j] == 1) process.stdout.write(`■ `);
        else process.stdout.write(`  `);
      }
      process.stdout.write(`\n`);
    }
    process.stdout.write(`\n\nGeneration: ${gen}`);
    arr = gameOfLife(arr);
    await sleep(generationDelay);
    console.clear();
  }
}

main();
