import React, { useState } from 'react';

function Menu1() {
  return <div>Menu 1 content</div>;
}

function Menu2() {
  return <div>Menu 2 content</div>;
}

function App() {
  const [activeMenu, setActiveMenu] = useState('menu1');

  const handleMenuToggle = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div>
      <button onClick={() => handleMenuToggle('menu1')}>Show Menu 1</button>
      <button onClick={() => handleMenuToggle('menu2')}>Show Menu 2</button>

      {activeMenu === 'menu1' && <Menu1 />}
      {activeMenu === 'menu2' && <Menu2 />}
    </div>
  );
}

export default App;