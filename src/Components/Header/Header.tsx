import { useContext, useEffect, useState } from 'react';
import styles from './header.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import IconClose from './IconClose/IconClose';
import IconBurger from './IconBurger/IconBurger';
import { TranslateContext, tKeys } from '../../Context/Context';
import { ELangs } from '../../Locales/LanguagesConstants';

function Header() {
  const [animatedHeader, setAnimatedHeader] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [t, setLang] = useContext(TranslateContext);

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

  useEffect(() => {
    const storedData = localStorage.getItem('currentLanguage');
    if (storedData === 'en') {
      setLang(ELangs.en);
    } else {
      setLang(ELangs.ru);
    }
  }, [setLang]);

  const handleToEnLang = () => {
    setLang(ELangs.en);
    localStorage.setItem('currentLanguage', 'en');
  };

  const handleToRuLang = () => {
    setLang(ELangs.ru);
    localStorage.setItem('currentLanguage', 'rus');
  };

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
          <div className={styles.title}>{t(tKeys.to_graphiql)}</div>
        </Link>
        <div className={styles.navDesktop}>
          <Link to={'/'} className={styles.home}>
            {t(tKeys.home)}
          </Link>
          <Link to={'/signIn'} className={styles.pinkButton}>
            {t(tKeys.signIn)}
          </Link>
          <Link to={'/signUp'} className={styles.pinkButton}>
            {t(tKeys.signUp)}
          </Link>
          <button className={styles.blackButtonLang}>
            <div className={styles.en} onClick={handleToEnLang}>
              EN
            </div>
            <div className={styles.ru} onClick={handleToRuLang}>
              RU
            </div>
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
              {t(tKeys.home)}
            </Link>
            <Link to={'/signIn'} className={styles.pinkButton}>
              {t(tKeys.signIn)}
            </Link>
            <Link to={'/signUp'} className={styles.pinkButton}>
              {t(tKeys.signUp)}
            </Link>
            <button className={styles.blackButtonLang}>
              <div className={styles.en}>EN</div>
              <div className={styles.ru}>RU</div>
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
