import { useEffect, useState } from "react";
import * as appConfig from "utills/appUtill";


// TODO:: readme
// version npm 9.8.0
// 시작 명령어 npm start


function App() {
  const [result, setResult] = useState([]);

  // https://narup.tistory.com/215  // Promise 참고 사이트
  // Promise 객체를 생성하고 resolve에 parameter를 넣어주면 Promise가 이행상태로 넘어감.
  // 이후 then()을 활용하면 결과 값을 받을 수 있음.

  // resolve()를 통해 Promise 실행

  const clickBtn = () => {
    const action = document.querySelector("#action").value;

    appConfig.resolveData(action).then((resolvedData) => setResult(resolvedData));
  }

  useEffect(() => {
    // clickBtn("test");
  }, []);

  return (
    <div className="App">
      <input type="text" id="action" />
      <button onClick={() => clickBtn()}>버튼클릭</button>
      <p>
        Node DB connected & get data
      </p>
      {
        // DB 통신 결과 데이터
        !!result &&
        result.map((data) => (
          <div key={data.s_id}>
            {data.s_name}
          </div>
        ))
      }
    </div>
  );
}

export default App;
