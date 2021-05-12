export default {
  template: `
        <div>삭제중...</div>
    `,
  created() {
    const params = new URL(document.location).searchParams;
    const no = params.get("no");
    const board = JSON.parse(localStorage.getItem("board"));

    board.items = board.items.filter(item => {
      // no와 같지 않은 데이타만 추출  => no와 같은 데이타는 추출하지 않기 때문에 삭제 효과
      return no != item.no;
    });

    localStorage.setItem("board", JSON.stringify(board));
    alert("삭제 완료!!!");
    location.href = "list.html";
  }
};
