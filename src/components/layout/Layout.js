import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Hangman</h1>
      </header>
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>Terlan Cavadzade 2023</footer>
    </>
  );
};

export default Layout;
