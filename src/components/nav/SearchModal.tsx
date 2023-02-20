import React from 'react';

interface SearchItem {
  id: number;
  name: string;
}

function SearchModal({ searchList }: any) {
  return (
    <div className="search-list">
      {searchList ? (
        searchList.map((item: SearchItem) => {
          return <p key={item.id}>{item.name}</p>;
        })
      ) : (
        <p> </p>
      )}
    </div>
  );
}

export default SearchModal;
