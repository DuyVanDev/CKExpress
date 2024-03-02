import { useEffect, useState } from 'react';
import MenuPc from './MenuPc';
import MenuMobile from './MenuMobile';

const Headers = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={``}>
      {innerWidth > 900 && <MenuPc  />}
      {innerWidth <= 900 && (
        <MenuMobile
          open={toggleMenu}
          onClose={setToggleMenu}
          innerWidth={innerWidth}
        />
      )}
    </header>
  );
};

export default Headers;