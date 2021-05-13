export default {
  template: `
  <div>
  <h2 class="text-center">사원 목록</h2>
  <div class="text-center">
    <input type="text" v-model.trim="name" />
    <button class="btn btn-primary" @click="searchName">검색</button>
  </div>
  <div class="text-right">
    <button class="btn btn-primary" @click="movePage">등록</button>
  </div>
  <div v-if="emps.length>0">
    <table class="table table-boardered table-condensed">
      <colgroup>
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
      </colgroup>
      <tr>
        <th>아이디</th>
        <th>사원명</th>
        <th>부서</th>
        <th>직책</th>
        <th>연봉</th>
      </tr>
      <tr v-for="emp in emps">
        <td>{{emp.id}}</td>
        <td><a :href="'search.html?id='+emp.id">{{emp.name}}</a></td>
        <td v-text="emp.dept_id"></td>
        <td v-text="emp.title"></td>
        <td v-text="emp.salary"></td>
      </tr>
    </table>
  </div>
  <div v-else>등록된 사원 정보가 없습니다.</div>
  </div>
    `,
  methods: {
    movePage() {
      location.href = "create.html";
    },
    searchName() {
      if (this.name) {
        this.emps = this.src.filter((emp) => {
          return emp.name.includes(this.name);
        });
      } else {
        this.emps = this.src;
      }
    },
  },
  created() {
    const emps = localStorage.getItem("emps");
    let newEmps = { sequence: 0, items: [] };

    if (emps) {
      //문자열로 된 JSON데이타를 객체로 변환
      newEmps = JSON.parse(emps);
      newEmps.items.sort((a, b) => {
        return a.id - b.id;
      });
    } else {
      //객체를 JSON 문자열로 변환
      localStorage.setItem("emps", JSON.stringify(newEmps));
    }

    this.emps = newEmps.items;
    this.src = newEmps.items;
  },
}