export default {
  template: `
    <div>
      <h2 class="text-center">게시글 등록</h2>
      <table class=" table table-condensed w-25 ">
        <tr>
          <th>글쓴이</th>
          <td>
            <input
              type="text"
              v-model="writer"
              ref="writer"
              id="writer"
              placeholder="작성자를 입력해주세요"
            />
          </td>
        </tr>
        <tr>
          <th>제목</th>
          <td>
            <input
              type="text"
              v-model="title"
              ref="title"
              id="title"
              placeholder="제목을 입력해주세요"
            />
          </td>
        </tr>
        <tr>
          <th>내용</th>
          <td>
            <textarea id="content" v-model="content" ref="content" cols="30" rows="10"></textarea>
          </td>
        </tr>
      </table>

      <div class="text-right">
        <button class="btn btn-primary" @click="createHandler">등록</button>
        <button class="btn btn-primary" @click="moveHandler">목록</button>
      </div>
    </div>
    `,
  methods: {
    moveHandler() {
      location.href = "list.html";
    },
    createHandler() {
      //데이타 검증
      let err = true;
      let msg = "";

      !this.writer && ((msg = "작성자를 입력해 주세요"), (err = false), this.$refs.writer.focus());
      err &&
        !this.title &&
        ((msg = "제목을 입력해 주세요"), (err = false), this.$refs.title.focus());
      err &&
        !this.content &&
        ((msg = "내용을 입력해 주세요"), (err = false), this.$refs.content.focus());

      if (!err) {
        alert(msg);
      } else {
        //localstorage에 등록하기
        //localstorage에 저장된 기존 데이타 추출
        const board = localStorage.getItem("board");
        let newBoard = {
          sequence: 0,
          items: []
        };

        if (board) {
          newBoard = JSON.parse(board);
        }
        newBoard.sequence += 1; //새글이 추가 되므로 sequnce를 증가
        //새글을 배열에 추가
        newBoard.items.push({
          no: newBoard.sequence,
          writer: this.writer,
          title: this.title,
          regtime: moment(new Date()).format("YYYY.MM.DD"),
          content: this.content
        });
        //추가된 데이타를 localstorage에 저장
        localStorage.setItem("board", JSON.stringify(newBoard));
        alert("등록 완료");
        location.href = "list.html";
      }
    }
  }
};
