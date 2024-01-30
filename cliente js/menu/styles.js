// styles.js
class Styles {
    constructor() {
        // Styles not customizable
        this.margin = '0'; 
        this.padding = '0';
        this.overflow = 'hidden'; 
        this.borderRadius = '10px'; 
        this.bodyStyles = {
            fontFamily: "'Mulish', sans-serif",
            background: '#222',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
        };
        this.navStyles = {
            listStyleType: 'none',
            borderRadius: '10px',
            background: '#666',
            margin: '0',
            padding: '0',
            width: '300px', 
            overflow: 'hidden',
        };
        this.navItemStyles = {
            fontSize: '20px',
            background: '#2ca066',
            borderBottom: '1px solid rgba(63, 46, 73, 0.3)',
        };
        this.navLinkStyles = {
            textDecoration: 'none',
            padding: '16px 20px',
            display: 'block',
            color: '#fff',
        };
        this.navSubmenuStyles = {
            overflow: 'hidden',
            maxHeight: '0',
            transition: 'max-height 0.5s',
            background: '#2e3d49',
        };
        this.navSubmenuLinkStyles = {
            fontSize: '16px',
            background: 'transparent',
            transition: 'background 0.2s ease-in',
        };
        this.navSubmenuLinkHoverStyles = {
            background: '#25303f',
        };
    }
}

export default Styles;
