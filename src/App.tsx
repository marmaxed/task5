import React, { type FC, type PropsWithChildren } from "react";
import "./App.css";
import Card from "./component/Card";

function App() {
  return ( 
    <div>
      <Card title="SimpleCard" text="Just text and title"/>
      <Card title="SuperCard" text="Text, title, button, picture, and custom element" click="clickMe" picture="./assets/react.svg"> 
        <p>custom</p>
      </Card>
    </div>
  );
}

export default App;