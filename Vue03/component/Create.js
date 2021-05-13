export default {
  template: `
    <div>
      <h2 class="text-center">사원 정보 등록</h2>
      <table class=" table table-condensed w-25 ">
        <tr>
          <th>이름</th>
          <td>
            <input
              type="text"
              v-model="name"
              ref="name"
              id="name"
              placeholder="이름을 입력해주세요"
            />
          </td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>
            <input
              type="text"
              v-model="mailid"
              ref="mailid"
              id="mailid"
              placeholder="email을 입력해주세요"
            />
          </td>
        </tr>
        <tr>
          <th>고용일</th>
          <td>
            <input
              type="date"
              v-model="start_date"
              ref="start_date"
              id="start_date"
              placeholder="고용일을 입력해주세요"
            />
          </td>
        </tr>
        <tr>
          <th>관리자</th>
          <td>
            <input
              type="text"
              v-model="manager_id"
              ref="manager_id"
              id="manager_id"
              placeholder="관리자의 아이디를 입력해주세요"
            />
          </td>
        </tr>
        <tr>
          <th>직책</th>
          <td>
            <select id="title" v-model="title">
              <option value="사원">사원</option>
              <option value="과장">과장</option>
              <option value="인사부장">인사부장</option>
              <option value="총무부장">총무부장</option>
              <option value="기획부장">기획부장</option>
              <option value="영업부장">영업부장</option>
              <option value="영업대표이사">영업대표이사</option>
              <option value="사장">사장</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>부서</th>
          <td>
            <select id="dept_id" v-model="dept_id">
              <option value="인사부">인사부</option>
              <option value="총무부">총무부</option>
              <option value="기획부">기획부</option>
              <option value="영업부">영업부</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>월급</th>
          <td>
            <input
              type="number"
              v-model="salary"
              ref="salary"
              id="salary"
              placeholder="월급을 입력해주세요"
            />
          </td>
        </tr>
        <tr>
          <th>커미션</th>
          <td>
            <select id="commission_pct" v-model="commission_pct" ref="commission_pct">
              <option value="10">10</option>
              <option value="12.5">12.5</option>
              <option value="15">15</option>
              <option value="17.5">17.5</option>
              <option value="20">20</option>
            </select>
          </td>
        </tr>
      </table>

      <div class="text-right">
        <button class="btn btn-primary" @click="createHandler">사원 등록</button>
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

      !this.name && ((msg = "이름을 입력해 주세요"), (err = false), this.$refs.name.focus());
      err &&
        !this.commission_pct &&
        ((msg = "커미션을 선택해 주세요"), (err = false), this.$refs.commission_pct.focus());

      if (!err) {
        alert(msg);
      } else {
        //localstorage에 등록하기
        //localstorage에 저장된 기존 데이타 추출
        const emps = localStorage.getItem("emps");
        let newEmps = {
          sequence: 0,
          items: []
        };

        if (emps) {
          newEmps = JSON.parse(emps);
        }
        newEmps.sequence += 1; //새글이 추가 되므로 sequnce를 증가
        //새글을 배열에 추가
        newEmps.items.push({
          id: newEmps.sequence,
          name: this.name,
          mailid: this.mailid,
          start_date: this.start_date,
          manager_id: this.manager_id,
          title: this.title,
          dept_id: this.dept_id,
          salary: this.salary,
          commission_pct: this.commission_pct
        });
        //추가된 데이타를 localstorage에 저장
        localStorage.setItem("emps", JSON.stringify(newEmps));
        alert("등록 완료");
        location.href = "list.html";
      }
    }
  }
};