<template>
  <div>
    <h6 class="text-center">
      'Q&A 게시판'은 질문과 답변을 통해 유용한 정보를 공유하고 서로 도움을 받을
      수 있는 목적의 소통하는 공간입니다.
    </h6>
    <h6 class="text-center">
      다양한 의견과 글을 자유롭게 게시하고 공유해주세요.
    </h6>
    <div class="text-right">
      <button class="btn btn-primary" @click="movePage">등록</button>
    </div>
    <div v-if="boards.length > 0">
      <table class="table table-boardered table-condensed">
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
        <tr v-for="(board, index) in boards" :key="index">
          <td>{{ board.no }}</td>
          <td>
            <router-link :to="'search?no=' + board.no"
              >{{ board.title }}
              <div v-if="board.replewriter != null">[답변 완료]</div>
            </router-link>
          </td>
          <td v-text="board.writer"></td>
          <td>{{ board.regtime | toDate }}</td>
        </tr>
      </table>
    </div>
    <div v-else>게시글이 없습니다.</div>
  </div>
</template>
<script>
// import http from '@/util/http-common.js'
import moment from "moment";
import axios from "axios";
export default {
  name: "list",
  data() {
    return { boards: [] };
  },
  filters: {
    toDate: function (regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD");
    },
  },
  methods: {
    movePage() {
      this.$router.push("/create");
    },
  },
  created() {
    axios
      .get("http://localhost:8080/qna")
      // .then(result => {
      //   console.log(result);
      //   console.log(result.data);
      // })
      .then(({ data }) => {
        //결과 Object에서 data만 추출
        this.boards = data;
        console.log("list......", data);
      })
      .catch((err) => {
        console.log(err);
        alert("오류 발생!!");
      });
  },
};
</script>
