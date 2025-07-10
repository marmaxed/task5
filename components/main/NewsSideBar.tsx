import type { ItemArray } from "../../interfaces/DeafultInterface";

/**
 *  Верхнее меню с новостями. Принемает массив Item - см интерфейсы
 */
const NewsSideBar = ({ items = [] }: ItemArray) => {
  return (
    <ul className="item-list">
      {items.map(item =>
        (
          <li> 
            {item.imageUrl && <img src={item.imageUrl} alt={item.imageAlt}/>}
            <p>{item.text}</p>
          </li>
        )
      )}
    </ul>
  );
};

export default NewsSideBar;