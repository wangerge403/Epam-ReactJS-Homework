import React from 'react';

export default List = (props) => {
  const list = props?.movies;
  return list.map((item) => (
    <div key={item.id}>
      <div>{item.title}</div>
      <div>{item.rating}</div>
      <button>add</button>
      <button>remove</button>
    </div>
  ));
};
