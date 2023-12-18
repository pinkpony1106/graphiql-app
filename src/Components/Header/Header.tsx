import { useEffect, useState } from 'react';
import styles from './header.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import IconClose from './IconClose/IconClose';
import IconBurger from './IconBurger/IconBurger';

function Header() {
  const [openLanguage, setOpenLanguage] = useState(false);
  const [animatedHeader, setAnimatedHeader] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const handleOpenLanguage = () => {
    setOpenLanguage(!openLanguage);
  };

  useEffect(() => {
    const headerListener = () => {
      if (window.scrollY > 0) {
        setAnimatedHeader(true);
      } else setAnimatedHeader(false);
    };
    window.addEventListener('scroll', headerListener);
    return () => {
      window.removeEventListener('scroll', headerListener);
    };
  }, []);

  return (
    <header
      className={classNames(styles.header, {
        [styles.scroll]: animatedHeader,
      })}
    >
      <div className={styles.container}>
        <Link to={'/graph-ql'} className={styles.logo}>
          <img
            className={styles.logoImg}
            src="src/assets/graphql-logo.svg"
            alt="Graphql logo"
          />
          <div className={styles.title}>GraphQL</div>
        </Link>
        <div className={styles.navDesktop}>
          <Link to={'/'} className={styles.home}>
            Home
          </Link>
          <Link to={'/signIn'} className="pinkButton">
            Sign In
          </Link>
          <Link to={'/signUp'} className="pinkButton">
            Sign Up
          </Link>

          <button className="blackButtonLang" onClick={handleOpenLanguage}>
            {openLanguage ? (
              <>
                <div>English</div>
                <img src="src/assets/lang-arrow.svg" />
              </>
            ) : (
              <>
                <div>Russian</div>
                <img src="src/assets/lang-arrow.svg" />
              </>
            )}
          </button>
        </div>
        {openBurgerMenu ? (
          <IconClose onClick={() => setOpenBurgerMenu(false)} />
        ) : (
          <IconBurger onClick={() => setOpenBurgerMenu(true)} />
        )}
      </div>

      {openBurgerMenu ? (
        <div className={styles.mobileMenu}>
          <div className={styles.navMobile}>
            <Link to={'/'} className={styles.home}>
              Home
            </Link>
            <Link to={'/signIn'} className="pinkButton">
              Sign In
            </Link>
            <Link to={'/signUp'} className="pinkButton">
              Sign Up
            </Link>

            <button className="blackButtonLang" onClick={handleOpenLanguage}>
              {openLanguage ? (
                <>
                  <div>English</div>
                  <img src="src/assets/lang-arrow.svg" />
                </>
              ) : (
                <>
                  <div>Russian</div>
                  <img src="src/assets/lang-arrow.svg" />
                </>
              )}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
