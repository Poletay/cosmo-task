import React from 'react';
import Menu from './Menu';

const menuItems = [
  { id: 0, name: 'HOME', path: '' },
  { id: 1, name: 'BLOG', path: '' },
  { id: 2, name: 'PLACES', path: '' },
  { id: 3, name: 'CONTACTS', path: '' },
  { id: 4, name: 'ABOUT', path: '' },
];

const Top = () => (
  <div className="top-part">
    <div className="logo top-part-element left-part">
      COSMO
    </div>
    <div className="main-menu top-part-element right-part">
      <Menu menuItems={menuItems} />
    </div>
  </div>
);

export default Top;
