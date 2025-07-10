import { links } from "../../interfaces/DeafultInterface";

/**
 *  Навигация над поиском
 */
const Navigation = () => {

  return (
    <nav>
      {links.map((link) => (
        <a href="#" key={link}>{link}</a>
      ))}
    </nav>
  );
};

export default Navigation;