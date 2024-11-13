// const Heading = React.createElement("h1",{},"HOW ARE YOU?");
// const Root = ReactDOM.createRoot(document.getElementById("root"));
// Root.render(Heading);


const parent = React.createElement("div", { id: "parent" },
  [  React.createElement("div", { id: "child" },
     [ React.createElement("h1", {}, "hy i am heading")
        ,React.createElement("h2",{},"hi i am second heading") ]
    ),
    React.createElement("div", { id: "child2" },
        [ React.createElement("h1", {}, "hy i am heading2")
           ,React.createElement("h2",{},"hi i am second heading2")])
 ] );
  
 ~
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  