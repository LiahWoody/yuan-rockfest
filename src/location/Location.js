import "./Location.css";
import { format } from "react-string-format";
import imageLocation from "../images/location_image.png";

function Location() {
  const lat = 37.210388;
  const lng = 127.089737;
  const kakao = "kakaomap://route?ep={0},{1}&name={2}&by=CAR";
  const naver = "nmap://route/car?dlat={0}&dlng={1}&dname={2}";
  const tmap = "tmap://route?rGoY={0}&rGoX={1}&rGoName={2}";
  const href = (scheme) => {
    window.location.href = format(scheme, lat, lng, '소르티르');
  };

  return (
    <div className="location_container">
      <div className="title">오시는길</div>
      <hr className="divider" />
      <img className="image_location" src={imageLocation} />
      <div className="shortcut_container">
        <button
          className="shortcut_button"
          onClick={() => {
            href(naver);
          }}
        >
          네이버 지도 바로가기
        </button>
        &nbsp;
        <button
          className="shortcut_button"
          onClick={() => {
            href(kakao);
          }}
        >
          카카오맵 바로가기
        </button>
        &nbsp;
        <button
          className="shortcut_button"
          onClick={() => {
            href(tmap);
          }}
        >
          티맵 바로가기
        </button>
      </div>
      <div className="location_text1">
        경기 화성시 동탄첨단산업1로 27 A동 514호
      </div>
      <div className="location_text2">소르티르 2호점</div>
      <div className="location_detail_container">
        <div>
          <b>주차 안내</b>
          <br />
          &nbsp;- 경기 화성시 동탄첨단산업1로 27 <b>A동</b> 지상 5층
          <br />
          &nbsp;- 지상 5층으로 올라오신후 <b>E, G, F 주차 구역</b>에 주차, <b>A-2번 게이트</b>로 들어오시면 됩니다.
          <br />
          &nbsp;- 차량이 많을 경우 이중 주차 가능합니다.
          <br />
          <br />
          <b>버스</b>
          <br />
          푸르지오.한미약품 정류장
          <br />
          &nbsp;- 시내버스: 708, 709-1, 710
          <br />
          &nbsp;- 시외버스: 6001, 6004, 6008, 7200
          <br />
        </div>
        <br />
        <br />
      </div>
      <div className="attendance_request">
        바쁘시더라도 참석 가능 여부를 알려주시면
        <br />
        마음 담아 정성껏 준비하겠습니다.
      </div>
    </div>
  );
}

export default Location;
