import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="Message">
      <div className="Message-title">INVITATION</div>
      <div className="Message-message">
        새로운 마음과 새 의미를 간직하며<br />
        저희 두 사람이 새 출발의 첫 걸음을 내딛습니다.<br />
        축복과 격려 주시면 더 없는 기쁨으로 간직하겠습니다.<br />
      </div>
      <div className="message_member">
        <b className="message_member_highligt">홍길동 · 김유진</b>의&nbsp;&nbsp;장남 <b className="message_member_highligt">홍길동</b><br/>
        <b className="message_member_highligt">이철수 · 박영희</b>의&nbsp;&nbsp;차녀 <b className="message_member_highligt">김유진</b>
      </div>
    </div>
  );
}

export default Message;
