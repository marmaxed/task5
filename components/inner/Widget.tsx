import type { FC } from "react";
import type { WidgetProps } from "../../interfaces/DeafultInterface";

/**
 * Виджет для информации под поиском
 */
const Widget: FC<WidgetProps> = (props) => {
  return (
      <div className="card">
        <h5 className="card-title">{props.ttl}</h5>
        {props.children}
      </div>
  );
};

export default Widget;