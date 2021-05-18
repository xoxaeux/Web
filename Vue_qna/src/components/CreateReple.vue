<template>
  <div>
    <h2 class="text-center">답변 등록</h2>
    <table class="table table-condensed w-70">
      <tr>
        <th>답글 작성자</th>
        <!-- 나중에 바꾸면 됨. 답글 작성자는 로그인한 계정-->
        <td>
          <input
            type="text"
            v-model="replewriter"
            ref="replewriter"
            id="replewriter"
            placeholder="이름을 입력해주세요"
          />
        </td>
      </tr>
      <tr>
        <th>내용</th>
        <td>
          <textarea
            id="rep"
            v-model="rep"
            ref="rep"
            cols="50"
            rows="10"
          ></textarea>
        </td>
      </tr>
    </table>

    <div class="text-right">
      <button class="btn btn-primary" @click="createHandler">등록</button>
      <button class="btn btn-warning" @click="moveHandler">취소</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      writer: "",
      content: "",
    };
  },
  methods: {
    createHandler() {
      //데이타 검증
      let err = true;
      let msg = "";

      !this.writer &&
        ((msg = "이름을 입력해 주세요"),
        (err = false),
        this.$refs.replewriter.focus());
      err &&
        !this.content &&
        ((msg = "내용을 입력해 주세요"), (err = false), this.$refs.rep.focus());

      if (!err) {
        alert(msg);
      } else {
        const no = this.$route.query.no;
        axios
          .post(`http://localhost:8080/qna/${no}`, {
            no: this.no,
            title: this.title,
            writer: this.writer,
            content: this.content,
            replewriter: this.replewriter,
            rep: this.rep,
          })
          .then(({ data }) => {
            if (data == "success") {
              alert("답변이 등록되었습니다.");
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
      this.$router.push(`'/search?no='+${this.$route.query.no}`);
    },
  },
  created() {
    axios
      .get(`http://localhost:8080/qna/${this.$route.query.no}`)
      .then(({ data }) => {
        console.log(data);
        this.no = data.no;
        this.title = data.title;
        this.writer = data.writer;
        this.regtime = data.regtime;
        this.content = data.content;
        this.replewriter = data.replewriter;
        this.rep = data.rep;
      })
      .catch(() => {
        alert("오류 발생");
      });
  },
};
</script>
