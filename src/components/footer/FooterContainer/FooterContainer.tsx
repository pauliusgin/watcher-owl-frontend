import "./FooterContainer.scss";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__app-version">alpha build: v0.0.1</p>
            <div className="footer__text">
                <p className="footer__text-text">Nuomonės ir pageidavimai:</p>
                <a
                    href="mailto:paulius000@gmail.com"
                    className="footer__text-email">
                    paulius000@gmail.com
                </a>
            </div>
        </footer>
    );
}

export { Footer };
