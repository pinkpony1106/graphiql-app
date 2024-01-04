import { useContext, useEffect, useState } from 'react';
import styles from './header.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import IconClose from './IconClose/IconClose';
import IconBurger from './IconBurger/IconBurger';
import { TranslateContext, tKeys } from '../../Context/Context';
import { ELangs } from '../../Locales/LanguagesConstants';
import { auth } from '../../Shared/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import LogOut from '../LogOut/LogOut';

function Header() {
  const [animatedHeader, setAnimatedHeader] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const { t, setLang, lang } = useContext(TranslateContext);
  const [isLoggedIn, setLoggedIn] = useState(!!auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

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
    setLang((storedData as ELangs) ?? ELangs.en);
  }, [setLang]);

  const handleLang = (language: ELangs) => {
    setLang(language);
    localStorage.setItem('currentLanguage', language);
  };

  return (
    <header
      className={classNames(styles.header, {
        [styles.scroll]: animatedHeader,
      })}
    >
      <div className={styles.container}>
        <Link to={'/'} className={styles.logo}>
          <img
            className={styles.logoImg}
            src="/src/assets/graphql-logo.svg"
            alt="Graphql logo"
          />
          <div className={styles.title}>{t(tKeys.to_graphiql)}</div>
        </Link>
        <div className={styles.navDesktop}>
          <Link to={'/'} className={styles.home}>
            {t(tKeys.home)}
          </Link>
          {isLoggedIn ? (
            <div className={styles.authButtonsContainer}>
              <Link className={styles.home} to={'/graph-ql'}>
                {t(tKeys.mainPage)}
              </Link>
              <LogOut />
            </div>
          ) : (
            <div className={styles.authButtonsContainer}>
              <Link to={'/signIn'} className={styles.pinkButton}>
                {t(tKeys.signIn)}
              </Link>
              <Link to={'/signUp'} className={styles.pinkButton}>
                {t(tKeys.signUp)}
              </Link>
            </div>
          )}
          <button className={styles.blackButtonLang}>
            <div
              className={classNames({
                [styles.langActive]: lang === ELangs.en,
              })}
              onClick={() => handleLang(ELangs.en)}
            >
              EN
            </div>
            <div
              className={classNames({
                [styles.langActive]: lang === ELangs.ru,
              })}
              onClick={() => handleLang(ELangs.ru)}
            >
              RU
            </div>
            <div
              className={classNames({
                [styles.langActive]: lang === ELangs.bel,
              })}
              onClick={() => handleLang(ELangs.bel)}
            >
              BLR
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
            {isLoggedIn ? (
              <div className={styles.authButtonsBurger}>
                <Link className={styles.home} to={'/graph-ql'}>
                  {t(tKeys.mainPage)}
                </Link>
                <LogOut />
              </div>
            ) : (
              <div>
                <Link to={'/signIn'} className={styles.pinkButton}>
                  {t(tKeys.signIn)}
                </Link>
                <Link to={'/signUp'} className={styles.pinkButton}>
                  {t(tKeys.signUp)}
                </Link>
              </div>
            )}

            <button className={styles.blackButtonLang}>
              <div
                className={classNames({
                  [styles.langActive]: lang === ELangs.en,
                })}
                onClick={() => handleLang(ELangs.en)}
              >
                EN
              </div>
              <div
                className={classNames({
                  [styles.langActive]: lang === ELangs.ru,
                })}
                onClick={() => handleLang(ELangs.ru)}
              >
                RU
              </div>
              <div
                className={classNames({
                  [styles.langActive]: lang === ELangs.bel,
                })}
                onClick={() => handleLang(ELangs.bel)}
              >
                BLR
              </div>
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
