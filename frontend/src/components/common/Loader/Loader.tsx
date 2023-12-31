import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div
      className={styles.container}
    >
      <div
        className={[styles.size, "spinner-grow text-primary"].join(" ")}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
