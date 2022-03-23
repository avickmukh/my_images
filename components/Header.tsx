import headerStyles from '../styles/Header.module.css'


const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}><span>MY Images </span></h1>
            <p className={headerStyles.description}>Keep up to date with the latest Images</p>
        </div>
    );
}

export default Header;
