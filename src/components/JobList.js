import React from "react";
import { Container, Row } from "./CommonComponents";
import JobCard from "./JobCard"

function JobList() {
  const job1 = {
    logo : "https://images.unsplash.com/photo-1572094382897-21abe88fb269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Fiverr’s Generic Recruitment Video",
    time: "4 min",
    url : "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
  };

  const job2 = {
    logo : "https://images.unsplash.com/photo-1601158935942-52255782d322?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=436&q=80",
    title: "Napoleon Dynamite-inspired ads from MailChimp",
    time: "4 min",
    url : "https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
  };

  return (
    <Container fluid>
      <Row>
        <JobCard news={job1}/>
        <JobCard news={job2}/>
      </Row>
    </Container>
  );
}

export default JobList;
