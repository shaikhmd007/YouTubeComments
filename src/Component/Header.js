// import bootstrap from "bootstrap";
import { useEffect, useState } from "react";

import Table from "./Table";

// import bootstrap from "bootstrap";
function Header() {
  const [filterPage, setFilterPage] = useState(10);
  const [simpleData, setSimpleData] = useState();
  const [numPage, setNumPage] = useState(0);
  const [search, setSearch] = useState("");

  const submitHandle = async () => {
    // Do something that could throw
    const fetchData = await fetch(`https://dev.ylytic.com/ylytic/test`);
    const response = await fetchData.json();

    // console.log(response);
    setSimpleData(response);
    // console.log(response.comments);

    // console.log(response.comments.at);
  };
  useEffect(() => {
    submitHandle();
  }, []);
  console.log(
    simpleData?.comments.filter((list) => list.author.includes(search))
  );
  const data = [
    { filter: 50, num: 1, set: 0 },
    { filter: 50, num: 2, set: 50 },
    { filter: 30, num: 1, set: 0 },
    { filter: 30, num: 2, set: 30 },
    { filter: 30, num: 3, set: 60 },
    { filter: 30, num: 4, set: 90 },
    { filter: 20, num: 1, set: 0 },
    { filter: 20, num: 2, set: 20 },
    { filter: 20, num: 3, set: 40 },
    { filter: 20, num: 4, set: 60 },
    { filter: 20, num: 5, set: 80 },
    { filter: 10, num: 1, set: 0 },
    { filter: 10, num: 2, set: 10 },
    { filter: 10, num: 3, set: 20 },
    { filter: 10, num: 4, set: 30 },
    { filter: 10, num: 5, set: 40 },
    { filter: 10, num: 6, set: 50 },
    { filter: 10, num: 7, set: 60 },
    { filter: 10, num: 8, set: 70 },
    { filter: 10, num: 9, set: 80 },
    { filter: 10, num: 10, set: 90 }
  ];
  return (
    <div>
      <div className="bg-primary d-flex justify-content-around">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <h5 className="mt-1" style={{ color: "white" }}>
          {simpleData?.comments?.length} Results
        </h5>
        <select onChange={(event) => setFilterPage(event.target.value)}>
          <option value="10">10 pages</option>
          <option value="20">20 pages</option>
          <option value="30">30 pages</option>
          <option value="50">50 pages</option>
        </select>
      </div>
      <br />
      <Table
        data={
          search === ""
            ? simpleData?.comments.slice(0 + numPage, numPage + filterPage)
            : simpleData?.comments.filter((list) =>
                list.author.toUpperCase().includes(search.toUpperCase())
              )
        }
      />
      <br />
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-around ">
        <ul className="pagination" style={{ cursor: "pointer" }}>
          {data
            .filter((list) => list.filter === filterPage)
            .map((item) => (
              <li className="page-item ">
                <span
                  className={
                    numPage === item.set
                      ? "page-link bg-primary text-white"
                      : "page-link"
                  }
                  onClick={() => setNumPage(item.set)}>
                  {item.num}
                </span>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
export default Header;
