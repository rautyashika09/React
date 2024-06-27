
// const heading = React.createElement("h1", {}, "Hello World from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
    "div",
    {id:"parent" },
    React.createElement(
        "div",
        {id:"child" },
        React.createElement("h1", {}, "Hello I'm h1 tag")
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);