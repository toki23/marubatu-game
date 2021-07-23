<script lang="ts">
  import Grid from "./Grid.svelte";
  let block = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  let info = "";
  let turn: Player;
  let isgamestarted: boolean = false;
  enum Player {
    Player1,
    Player2,
  }
  const GM = class {
    row = [0, 1, 2];

    player1State = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    player2State = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    constructor() {
      this.row = [0, 1, 2];
      turn = Player.Player1;
    }
    clicked(row_id, col_id) {
      console.log(isgamestarted);
      if (block[row_id][col_id] !== 0 || !isgamestarted) {
        return;
      }
      if (turn == Player.Player1) {
        block[row_id][col_id] = 1;

        info = "プレイヤー2はボタンを押してください";
        this.player2State[row_id][col_id] = 1;
        this.isCleared(row_id, col_id, this.player2State);
        turn = Player.Player2;
      } else {
        // this is player2 turn;
        block[row_id][col_id] = 2;

        info = "プレイヤー1はボタンを押してください";

        this.player1State[row_id][col_id] = 2;
        this.isCleared(row_id, col_id, this.player1State);
        turn = Player.Player1;
      }
    }
    start() {
      info = "プレイヤー1はボタンを押してください";
      isgamestarted = true;
      console.log(isgamestarted);
      block = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
    }

    isCleared(row, col, playerState) {
      let flag1 = 1;
      let flag2 = 1;
      let flag3 = 1;
      let flag4 = 1;

      console.log(playerState);
      for (let i of [0, 1, 2]) {
        if (playerState[row][i] === 0) {
          flag1 = 0;
        }
        if (playerState[i][col] === 0) {
          flag2 = 0;
        }
        if (playerState[i][i] === 0) {
          flag3 = 0;
        }
        if (playerState[i][2 - i] === 0) {
          flag4 = 0;
        }
      }

      if (flag1 === 0 && flag2 === 0 && flag3 === 0 && flag4 === 0) {
        console.log("not cleared");
      } else {
        console.log("cleared");
        this.gameSet();
      }
    }
    gameSet() {
      info = "ゲームが終了しました";
      this.player1State = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      this.player2State = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
    }
  };
  $: gm = new GM();
</script>

<Grid {gm} {block} {turn} />
<p class="text-center">{info}</p>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
