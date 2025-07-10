import type { FC, ReactNode } from "react";

export type CardProps = {
  title: string;
  text: string;
  picture?: string;
  click?: string;
  children?: ReactNode;
};

const Card: FC<CardProps> = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {props.picture && (
        <img src={props.picture} className="card-img-top" alt="Card image" />
      )}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>

        {props.children}

        {props.click && <a href="#" className="btn btn-primary">{props.click}</a>}
      </div>
    </div>
  );
};

export default Card;
