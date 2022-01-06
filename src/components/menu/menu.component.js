/* global SITE_CONFIG */
import React from 'react';
import ToolButton from '../tool-button';


const MenuComponent = ({ toolList, menuFocus, searchTools, onSubmit, focus }) => (
  <div id='menu'>
    <header id='menu-header'>
      <img src="https://s4.aconvert.com/convert/p3r68-cdx67/aa2vb-836v9.svg" style={{height:"250px"}}/>
      <h1 style={{fontFamily:"'Prata', serif",margin:'20px'}}><em>CLIMATE B</em></h1>
    </header>
    <section
      id='search'
   onClick={focus}
    >
      <form onSubmit={onSubmit}>
        <input
          autoComplete="off"
          className='gt-input'
          id='search-input'
          onChange={searchTools}
          placeholder='Search Tools...'
          type='text'
        />
      </form>
    </section>
    <section
      className={menuFocus ? 'focus' : ''}
      id='content'
    >
      <div id='tool-button-container' style={{display:"block"}}>
        {
          toolList.map(({ name, iconUrl, path }) => {
            return <ToolButton
              iconUrl={iconUrl}
              key={name}
              name={name}
              path={path}
            />
          })
        }
      </div>
    </section>
  </div>
);

export default MenuComponent;
