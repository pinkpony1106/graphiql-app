import { useEffect, useState } from 'react';
import styles from './header.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [animatedHeader, setAnimatedHeader] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
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
    <div
      className={classNames(styles.wrapper, {
        [styles.scroll]: animatedHeader,
      })}
    >
      <div className={styles.container}>
        <div
          className={styles.logo}
          onClick={() => {
            navigate(`/graph-ql`);
          }}
        >
          <img className={styles.logoImg} src="src/assets/graphql-logo.svg" />
          <div className={styles.title}>GraphQL</div>
        </div>
        <div className={styles.nav}>
          <div
            className={styles.home}
            onClick={() => {
              navigate(`/`);
            }}
          >
            Home
          </div>
          <button
            className="pinkButton"
            onClick={() => {
              navigate(`/signIn`);
            }}
          >
            Sign In
          </button>
          <button
            className="pinkButton"
            onClick={() => {
              navigate(`/signUp`);
            }}
          >
            Sign Up
          </button>

          <button className="blackButtonLang" onClick={handleOpen}>
            {open ? (
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
    </div>
  );
}

export default Header;
