import styles from '../styles/Layout.module.css'
import Header from './Header'
import Meta from './Meta'
import Nav from './Nav'

type LayoutProps = {
    children: React.ReactNode;
}
const Layout = ({children}: LayoutProps) => {
  return (
    <>
    <Meta />
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </div>
  </>
  );
}

export default Layout;
