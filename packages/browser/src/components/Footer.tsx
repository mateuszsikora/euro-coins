import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">Images sourced from ECB, converted to normalized JPEG format.</p>
      <a
        className="footer-link"
        href="https://github.com/mateuszsikora/euro-coins/issues"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Report missing coins or data issues (opens in a new tab)"
      >
        Report missing coins or data issues
      </a>
    </footer>
  );
}
