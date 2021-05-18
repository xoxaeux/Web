<template>
  <div>
    <h4 class="text-center">질문글 내용</h4>
    <table class="table table-condensed w-70" v-if="board">
      <tr>
        <th>번호</th>
        <td v-text="board.no"></td>
      </tr>
      <tr>
        <th>글쓴이</th>
        <td v-text="board.writer"></td>
      </tr>
      <tr>
        <th>제목</th>
        <td v-text="board.title"></td>
      </tr>
      <tr>
        <th>날짜</th>
        <td>{{ board.regtime | toDate }}</td>
      </tr>
      <tr>
        <td colspan="2" v-text="board.content"></td>
      </tr>
    </table>
    <hr />
    <div class="text-right">
      <router-link class="btn btn-primary" to="/list">목록</router-link>
      <router-link class="btn btn-success" :to="'/createreple?no=' + board.no"
        >답변</router-link
      >
      <router-link class="btn btn-warning" :to="'/update?no=' + board.no"
        >수정</router-link
      >
      <router-link class="btn btn-danger" :to="'/remove?no=' + board.no"
        >삭제</router-link
      >
    </div>

    <div v-if="board.rep != NULL">
      <h4 class="text-left">질문에 대한 답이 있습니다.</h4>
      <table class="table table-condensed w-70" v-if="board">
        <tr>
          <th>답변 내용</th>
          <td v-text="board.rep"></td>
        </tr>
      </table>
    </div>
    <div v-else>
      <!-- <td v-text="board.rep"></td> -->
      <h6 class="text-center">아직 등록된 답변이 없습니다.</h6>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return { board: {} };
  },
  filters: {
    toDate: function (regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD");
    },
  },
  created() {
    axios
      .get(`http://localhost:8080/qna/${this.$route.query.no}`)
      .then(({ data }) => {
        this.board = data;
      })
      .catch((err) => {
        console.log(err);
        alert("게시글 조회 중 오류 발생");
      });
  },
};
</script>
