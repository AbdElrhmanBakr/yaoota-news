import { useState } from "react";
import ReactPaginate from "react-paginate";

import Card from "../Card/Card";
import "./CardGrid.css";

const CardGrid = ({ users, posts }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="grid-main">
      <div className="card-grid">
        {currentItems &&
          currentItems.map((post) => {
            const { id, userId, title, body } = post;
            const cardTtitle = title.slice(0, 30) + " ...";
            const cardBody = body.slice(0, 100) + " ...";

            return (
              <Card
                key={id}
                postId={id}
                user={users[userId - 1]}
                title={cardTtitle}
                body={cardBody}
              />
            );
          })}
      </div>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        previousLinkClassName="round-effect"
        pageLinkClassName="round-effect"
        nextLinkClassName="round-effect"
        containerClassName="pagination"
        activeLinkClassName="pag-active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default CardGrid;
