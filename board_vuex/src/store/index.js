import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boards: [], //전체 게시글
    board: {} //update, search할때 현재 보는 게시글
  },
  getters: {
    boards(state) {
      return state.boards;
    },
    board(state) {
      return state.board;
    }
  },
  mutations: {
    setBoards(state, payload) {
      state.boards = payload;
    },
    setBoard(state, payload) {
      state.board = payload;
    }
  },
  actions: {
    getBoards(context) {
      http
        .get("board")
        .then(({ data }) => {
          context.commit("setBoards", data);
        })
        .catch(() => {
          alert("수행 중 오류가 발생했습니다.");
        });
    },
    getBoard(context, payload) {
      http
        .get(payload)
        .then(({ data }) => {
          context.commit("setBoard", data);
        })
        .catch(() => {
          alert("오류 발생");
        });
    }
  }
});
