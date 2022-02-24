import React from 'react';

function Sidebar({ selectedSizes, products, handleClick }) {
  let sizes = products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let uniqueSizes = [...new Set(sizes)];
  return (
    <>
      <aside className="flex-20 sidebar">
        <div className="flex wrap">
          {uniqueSizes.map((size, id) => (
            <span
              key={id}
              onClick={() => handleClick(size)}
              className={`size ${selectedSizes.includes(size) ? 'active' : ''}`}
            >
              {size}
            </span>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
