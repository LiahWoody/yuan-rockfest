import "./Message.css";

function Message() {
  return (
    <div className="Message">
      <div className="footer_container">
        2025. 09. 25. 목요일 PM 12:50
        <br />
        소르티르
      </div>
      <header className="Message-header">
        <div className="Message-title">INVITATION</div>
        <div className="Message-message">
          사랑과 기쁨 속에 태어난
          <br />
          저희 아이가 어느덧 첫해를 맞이합니다.
          <br />
          건강하게 자라온 발걸음을 함께 축하해 주시고,
          <br />
          밝고 바르게 성장할 수 있도록
          <br />
          따뜻한 축복과 격려를 나누어 주시면
          <br />
          큰 기쁨으로 간직하겠습니다.
          <br />
        </div>
      </header>
    </div>
  );
}

export default Message;
