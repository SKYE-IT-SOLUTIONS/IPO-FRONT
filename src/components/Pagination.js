import React, { useState, useEffect } from "react";
import { Row,Icon } from "./CommonComponents";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const PageData = styled(Row)`
  width: 100%;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content:center;
`;

const Paging = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Current = styled(Button)`
  background: #fff;
  border: 2px solid rgb(7, 2, 49);
  padding: 10px 15px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  position: relative;
  margin: 0 5px;
  cursor: pointer;
  color: #000;
  font-weight: 500;
  & > span {
    /* border: 2px solid blue; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.active {
    border: 1px solid #888;
    color: #ffff;
    pointer-events: none;
    background-color: rgb(7, 2, 49);
  }
`;
const Direct = styled(Button)`
  background: transparent;
  border: none;
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
  color: rgb(7, 2, 49);
  & > :disabled {
    pointer-events: none;
    box-shadow: none;
    color: #999;
  }
`;

const PaginIcon = styled(Icon)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  ::hover {
    color: #fff;
  }
`;

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
  const [datalimit, setdatalimit] = useState(dataLimit);
  const [pages, setPages] = useState(Math.ceil(data.length / datalimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      if (window.innerWidth > 1400) {
        setdatalimit(6);
        setPages(Math.ceil(data.length / 6));
      } else if (window.innerWidth > 1200 && window.innerWidth <= 1400) {
        setdatalimit(4);
        setPages(Math.ceil(data.length / 4));
      } else if (window.innerWidth > 992 && window.innerWidth <= 1200) {
        setdatalimit(4);
        setPages(Math.ceil(data.length / 4));
      } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
        setdatalimit(3);
        setPages(Math.ceil(data.length / 3));
      } else if (window.innerWidth > 576 && window.innerWidth <= 768) {
        setdatalimit(2);
        setPages(Math.ceil(data.length / 3));
      } else {
        setdatalimit(1);
        setPages(Math.ceil(data.length / 1));
      }
    }
    window.addEventListener("resize", handleResize);
  }, [data]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * datalimit - datalimit;
    const endIndex = startIndex + datalimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return pages >= 1 ? (
    <div>
      {/* show the posts */}
      <PageData>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} news={d} />
        ))}
      </PageData>

      {/* show the pagination
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
      <Paging>
        {/* previous button */}
        <Direct
          variant="light"
          onClick={goToPreviousPage}
          disabled={currentPage === 1 ? true : false}
        >
          <PaginIcon icon="ic:baseline-arrow-circle-left" />
        </Direct>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <Current
            key={index}
            active={currentPage === item ? true : false}
            onClick={changePage}
          >
            <span>{item}</span>
          </Current>
        ))}

        {/* next button */}
        <Direct
          variant="light"
          onClick={goToNextPage}
          disabled={currentPage === pages ? true : false}
        >
          <PaginIcon icon="ic:baseline-arrow-circle-right" />
        </Direct>
      </Paging>
    </div>
  ) : (
    <div></div>
  );
}

export default Pagination;
