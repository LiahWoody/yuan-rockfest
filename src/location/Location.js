import React from "react";
import "./Location.css";

function Location() {
  return (
    <div className="location_container">
      <div className="title">LOCATION</div>
      <hr className="divider" />
      <div className="location_text1">서울시 강남구 청첩장홀 (TEL. 02-123-4567)</div>
      <div className="location_text2">청첩장홀 3층</div>
      <div className="location_detail_container">
        <div>
          <b>주차 안내</b><br />
          지하주차장 이용 가능 (2시간 무료)<br /><br />
          <b>지하철</b><br />
          2호선 강남역(도보 5분)<br /><br />
          <b>버스</b><br />
          강남역 정류장<br />
          - 시내버스: 140, 146, 360, 740<br />
        </div>
      </div>
    </div>
  );
}

export default Location;
