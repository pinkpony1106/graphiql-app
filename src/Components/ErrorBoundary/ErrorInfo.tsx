import styles from './index.module.css';

function ErrorInfo() {
  return (
    <div className={styles.error_info}>
      {'Something went wrong. Please, reload the page.'}
    </div>
  );
}

export default ErrorInfo;
