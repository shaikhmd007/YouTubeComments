import React from "react";
function Table({ data }) {
  return (
    <div>
      {
        <table className="table">
          <thead>
            <tr>
              <th scope="col">At</th>
              <th scope="col">Author</th>
              <th scope="col">Likes</th>
              <th scope="col">Reply</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.at}</th>
                <td>{item.author}</td>
                <td>{item.like}</td>
                <td>{item.reply}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}
export default Table;
