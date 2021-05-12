export default {
  template: `
    <div  class="container">
      <h2 class="text-center">Vue를 이용한 게시판</h2>
      <div class="text-right">
        <button class="btn btn-primary" @click="movePage">등록</button>
      </div>
      <div v-if="boards.length>0">
        <table class="table  table-boardered  table-condensed">
          <colgroup>
            <col width="10%" />
            <col width="50%" />
            <col width="15%" />
            <col width="25%" />
          </colgroup>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
          <tr v-for="board in boards">
            <td>{{board.no}}</td>
            <td><a :href="'search.html?no='+board.no">{{board.title}}</a></td>
            <td v-text="board.writer"></td>
            <td v-html="board.regtime"></td>
          </tr>
        </table>
      </div>
      <div v-else>게시글이 없습니다.</div>
    </div>
    `,
  methods: {
    movePage() {
      location.href = "create.html";
    }
  },
  created() {
    const board = localStorage.getItem("board");
    let newBoard = { sequence: 0, items: [] };

    if (board) {
      //문자열로 된 JSON데이타를 객체로 변환
      newBoard = JSON.parse(board);
      newBoard.items.sort((a, b) => {
        return a.no - b.no;
      });
    } else {
      //객체를 JSON 문자열로 변환
      localStorage.setItem("board", JSON.stringify(newBoard));
    }

    this.boards = newBoard.items;
  }
};
