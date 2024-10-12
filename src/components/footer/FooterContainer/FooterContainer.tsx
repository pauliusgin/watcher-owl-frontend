import "./FooterContainer.scss";

function Footer() {
    return (
        <footer className="footer">
                <p className="footer__app-version">alpha build: v0.0.1</p>
                <p className="footer__text">Nuomonės ir pageidavimai: <a href="mailto:paulius000@gmail.com" className="footer__email">paulius000@gmail.com</a></p>
        </footer>
    );
}

export { Footer };
