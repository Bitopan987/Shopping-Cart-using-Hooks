import React from 'react';

function OrderBy({ selectedOrder, handleOrderBy }) {
  return (
    <>
      <div className="sort">
        Order By
        <select value={selectedOrder} onChange={handleOrderBy}>
          <option value="">Select</option>
          <option value="lowest">Lowest to highest</option>
          <option value="highest">Highest to lowest</option>
        </select>
      </div>
    </>
  );
}

export default OrderBy;
