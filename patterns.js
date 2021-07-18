export function Blinker(arr, margin) {
  arr[margin + 10][margin + 10] = 1;
  arr[margin + 10][margin + 11] = 1;
  arr[margin + 10][margin + 12] = 1;

  return arr;
}

export function Toad(arr, margin) {
  arr[margin + 10][margin + 11] = 1;
  arr[margin + 10][margin + 12] = 1;
  arr[margin + 10][margin + 13] = 1;
  arr[margin + 11][margin + 10] = 1;
  arr[margin + 11][margin + 11] = 1;
  arr[margin + 11][margin + 12] = 1;

  return arr;
}

export function Pulsar(arr, margin) {
  // Horizontal Lines

  arr[margin + 7][margin + 9] = 1;
  arr[margin + 7][margin + 10] = 1;
  arr[margin + 7][margin + 11] = 1;
  arr[margin + 7][margin + 15] = 1;
  arr[margin + 7][margin + 16] = 1;
  arr[margin + 7][margin + 17] = 1;

  arr[margin + 12][margin + 9] = 1;
  arr[margin + 12][margin + 10] = 1;
  arr[margin + 12][margin + 11] = 1;
  arr[margin + 12][margin + 15] = 1;
  arr[margin + 12][margin + 16] = 1;
  arr[margin + 12][margin + 17] = 1;

  arr[margin + 14][margin + 9] = 1;
  arr[margin + 14][margin + 10] = 1;
  arr[margin + 14][margin + 11] = 1;
  arr[margin + 14][margin + 15] = 1;
  arr[margin + 14][margin + 16] = 1;
  arr[margin + 14][margin + 17] = 1;

  arr[margin + 19][margin + 9] = 1;
  arr[margin + 19][margin + 10] = 1;
  arr[margin + 19][margin + 11] = 1;
  arr[margin + 19][margin + 15] = 1;
  arr[margin + 19][margin + 16] = 1;
  arr[margin + 19][margin + 17] = 1;

  // Vertical Lines
  arr[margin + 9][margin + 7] = 1;
  arr[margin + 10][margin + 7] = 1;
  arr[margin + 11][margin + 7] = 1;
  arr[margin + 15][margin + 7] = 1;
  arr[margin + 16][margin + 7] = 1;
  arr[margin + 17][margin + 7] = 1;

  arr[margin + 9][margin + 12] = 1;
  arr[margin + 10][margin + 12] = 1;
  arr[margin + 11][margin + 12] = 1;
  arr[margin + 15][margin + 12] = 1;
  arr[margin + 16][margin + 12] = 1;
  arr[margin + 17][margin + 12] = 1;

  arr[margin + 9][margin + 14] = 1;
  arr[margin + 10][margin + 14] = 1;
  arr[margin + 11][margin + 14] = 1;
  arr[margin + 15][margin + 14] = 1;
  arr[margin + 16][margin + 14] = 1;
  arr[margin + 17][margin + 14] = 1;

  arr[margin + 9][margin + 19] = 1;
  arr[margin + 10][margin + 19] = 1;
  arr[margin + 11][margin + 19] = 1;
  arr[margin + 15][margin + 19] = 1;
  arr[margin + 16][margin + 19] = 1;
  arr[margin + 17][margin + 19] = 1;

  return arr;
}
