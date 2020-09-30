import React, { FC } from "react";
import { Button } from "antd";
import { basicData } from "../../libs/statistics";
const HomeInfo: FC = (props) => (
  <div className="home-info-wrapper">
    <div className="home-info-top">
      <span>戏言</span>
      <p>这个社团</p>
    </div>
    <div className="home-info-body">
      <div className="home-info-desc">
        <p>成立于</p>
        <p>演过</p>
        <p>有</p>
      </div>
      <div className="home-info-number">
        <p>2015</p>
        <p>{basicData.totalPlays}</p>
        <p>{basicData.audience}</p>
      </div>
      <div className="home-info-desc desc-right">
        <p>年</p>
        <p>部剧</p>
        <p>人次观众看过我们的剧</p>
      </div>
    </div>
    <Button
      danger
      type="primary"
      className="home-info-button home-info-button-left"
    >
      了解戏言
    </Button>
    <Button danger className="home-info-button home-info-button-right">
      成员
    </Button>
  </div>
);

export default HomeInfo;
