import React, { useState } from "react";
import "./Share.css";

function Share() {
  const [copied, setCopied] = useState(false);
  const link = "https://yuan-rockfest.com";

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="share_container">
      <button onClick={copyLink}>링크 복사하기</button>
      {copied && <div className="toast">링크가 복사되었습니다!</div>}
    </div>
  );
}

export default Share;
