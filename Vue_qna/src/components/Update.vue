<template>
  <div>
    <h4 class="text-center">질문글 수정</h4>
    <table class="table table-condensed w-25">
      <tr>
        <th>제목</th>
        <td>
          <input
            type="text"
            id="title"
            ref="title"
            placeholder="제목을 입력해주세요"
            v-model="title"
          />
        </td>
      </tr>
      <tr>
        <th>내용</th>
        <td>
          <textarea
            id="content"
            cols="30"
            rows="10"
            ref="content"
            v-model="content"
          ></textarea>
        </td>
      </tr>
    </table>

    <div class="text-right">
      <button class="btn btn-primary" @click="updateHandler">수정</button>
      <button class="btn btn-primary" @click="moveHandler">목록</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      no: "",
      regtime: "",
      writer: "",
      title: "",
      content: "",
    };
  },
  methods: {
    updateHandler: function () {
      let err = true;
      let msg = "";
      //필수 요건 검사
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

      if (!err) alert(msg);
      else {
        const no = this.$route.query.no;
        axios
          .put(`http://localhost:8080/qna/${no}`, {
            no: this.no,
            title: this.title,
            writer: this.writer,
            content: this.content,
          })
          .then(({ data }) => {
            if (data == "success") {
              console.log("update................", data);
              alert("수정 완료!!!");
              this.moveHandler();
            } else {
              alert("수정 중 오류 발생");
            }
          })
          .catch(() => {
            alert("오류 발생");
          });
      } // else end
    }, //function end
    moveHandler: function () {
      this.$router.push("/");
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
      })
      .catch(() => {
        alert("오류 발생");
      });
  },
};
</script>   
