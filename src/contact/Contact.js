import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [showGroom, setShowGroom] = useState(false);
  const [showBride, setShowBride] = useState(false);

  return (
    <div className="contact_container">
      <div className="contact_text1">신랑 신부에게 마음 전하기</div>
      <div className="contact_text2">축복의 의미로 축의금을 전달해보세요.</div>
      <button onClick={() => setShowGroom(true)}>신랑측 계좌번호</button>
      <button onClick={() => setShowBride(true)}>신부측 계좌번호</button>
      {showGroom && (
        <div className="modal">
          <div>신랑측 계좌번호: 국민 123456789 홍길동</div>
          <button onClick={() => setShowGroom(false)}>닫기</button>
        </div>
      )}
      {showBride && (
        <div className="modal">
          <div>신부측 계좌번호: 신한 987654321 김유진</div>
          <button onClick={() => setShowBride(false)}>닫기</button>
        </div>
      )}
    </div>
  );
}

export default Contact;
