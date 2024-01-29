import { memo, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Pagination } from 'antd';


const TablePagination = ({ totalItems }) => {

  // const [limit, setLimit] = useState(10);

  let limit=10, skip=0, currentPage=1;


  const location = useLocation();
  const [queryParams, setQueryParams] = useSearchParams(location.search);

  let current = 1;
  let toLimit = 10;

  if(queryParams.has("skip")){

    let toSkip = Number(queryParams.get("skip"));
    

    if(queryParams.has("limit")){
      toLimit = Number(queryParams.get("limit"));
    }

    current = Math.floor((toSkip+toLimit)/toLimit);
  }

  // // const limitOptions = [10, 20, 50];


  const handlePageChange = (pageNumber) => {
    // console.log("pagenumber", pageNumber);
    currentPage = pageNumber;
    skip = (currentPage - 1) * limit;

    if (currentPage !== 1) {
      // if (queryParams.has("skip")) {
      //   queryParams.delete("skip");
      queryParams.set("skip", skip);
      // } else {
      //   queryParams.set("skip", skip);
      // }
    } else {
      queryParams.delete("skip");
    }

    if (limit !== 10) {
      // if (queryParams.has("limit")) {
      //   queryParams.delete("limit");
      queryParams.set("limit", limit);
      // } 
      // else {
      //   queryParams.set("limit", limit);
      // }
    } else {
      queryParams.delete("limit");
    }

    setQueryParams(queryParams);
  }

  const handleLimitChange = (current, pageSize) => {
    // console.log(current, pageSize);
    currentPage = current;
    limit = pageSize;
    skip = (currentPage - 1) * limit;

    if (currentPage !== 1) {
      // if (queryParams.has("skip")) {
      //   queryParams.delete("skip");
      queryParams.set("skip", skip);
      // } else {
      //   queryParams.set("skip", skip);
      // }
    } else {
      queryParams.delete("skip");
    }

    if (limit !== 10) {
      // if (queryParams.has("limit")) {
      //   queryParams.delete("limit");
      queryParams.set("limit", limit);
      // } 
      // else {
      //   queryParams.set("limit", limit);
      // }
    } else {
      queryParams.delete("limit");
    }

    setQueryParams(queryParams);

  }

  // useEffect(() => {

  //   console.log("limit", limit);
  //   console.log("skip", skip);
  //   console.log("current", currentPage);

  //   if (currentPage !== 1) {
  //     // if (queryParams.has("skip")) {
  //     //   queryParams.delete("skip");
  //     queryParams.set("skip", skip);
  //     // } else {
  //     //   queryParams.set("skip", skip);
  //     // }
  //   } else {
  //     queryParams.delete("skip");
  //   }

  //   if (limit !== 10) {
  //     // if (queryParams.has("limit")) {
  //     //   queryParams.delete("limit");
  //     queryParams.set("limit", limit);
  //     // } 
  //     // else {
  //     //   queryParams.set("limit", limit);
  //     // }
  //   } else {
  //     queryParams.delete("limit");
  //   }

  //   setQueryParams(queryParams);
  // }, [currentPage, limit, skip]);




  return (
    <Pagination
      current={current}
      total={totalItems}
      pageSize={toLimit}
      showSizeChanger
      showQuickJumper
      showTotal={(total) => `Total ${total} items`}
      onShowSizeChange={handleLimitChange}
      onChange={handlePageChange}
    />
  )

}


export default memo(TablePagination);
