// enum Player {
//     Player1,
//     Player2,
//   }
export default class {
  block;
  row = [0, 1, 2];
  constructor(block) {
    this.row = [0, 1, 2];
    this.block = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  }
  clicked(row_id, col_id) {
    this.block[row_id][col_id] = 1;

    console.log(this.block)
  }
};