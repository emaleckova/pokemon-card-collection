/* FOOTER function to display the GitHub link */
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <a
        href="https://github.com/emaleckova/pokemon-card-collection"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={16} />
        View source
      </a>
    </footer>
  );
}

export default Footer;
