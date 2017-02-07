var app = new Vue({
  el: "#vueApp",
  data: {
    isX: true,
    board: [
      [
        "X", " ", " "
      ],
      [
        " ", "O", " "
      ],
      [
        " ", "X", " "
      ]
    ]
  },
  methods: {
    changeBrick: function (rowKey, key) {
      if (this.board[rowKey][key] === " ") {
        if (this.isX) {
          this.board[rowKey][key] = "X";
        } else {
          this.board[rowKey][key] = "O";
        }
        this.isX = !this.isX;
        this.$forceUpdate();
      }
    },
    resetGame: function () {
      this.isX = true;
      this.board = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    }
  }
});
