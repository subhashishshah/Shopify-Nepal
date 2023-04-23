import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Review from "./Review";
import Description from "./Description";
const DescriptionReview = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Description">
        <Description />
      </Tab>
      <Tab eventKey="profile" title="Reviews">
        <Review />
      </Tab>
    </Tabs>
  );
};

export default DescriptionReview;
