<template>
  <div>
    <h2 class="text-center">질문글 등록</h2>
    <table class="table table-condensed w-70">
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
          <textarea
            id="content"
            v-model="content"
            ref="content"
            cols="30"
            rows="10"
          ></textarea>
        </td>
      </tr>
    </table>

    <div class="text-right">
      <button class="btn btn-primary" @click="createHandler">등록</button>
      <button class="btn btn-primary" @click="moveHandler">목록</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      writer: "",
      title: "",
      content: "",
    };
  },
  methods: {
    createHandler() {
      //데이타 검증
      let err = true;
      let msg = "";

      !this.writer &&
        ((msg = "작성자를 입력해 주세요"),
        (err = false),
        this.$refs.writer.focus());
      err &&
        !this.title &&
        ((msg = "제목을 입력해 주세요"),
        (err = false),
        this.$refs.title.focus());
      err &&
        !this.content &&
        ((msg = "내용을 입력해 주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) {
        alert(msg);
      } else {
        const no = this.$route.query.no;
        axios
          .post(`http://localhost:8080/qna/${no}`, {
            writer: this.writer,
            title: this.title,
            content: this.content,
          })
          .then(({ data }) => {
            if (data == "success") {
              alert("등록이 완료 됐습니다.");
              this.moveHandler();
            } else {
              alert("등록 실패");
            }
          })
          .catch(() => {
            alert("error 발생");
          });
      }
    },
    moveHandler() {
      this.$router.push("/");
    },
  },
};
</script>
