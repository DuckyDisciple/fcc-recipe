var Box = React.createClass({
  render: function(){
    return (
      <div className="box">
        <div className="left-side">
          <List />
          <Add />
        </div>
        <div className="right-side">
          <Card />
          <Edit />
          <Delete />
        </div>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <div className="cards">
        <ul className="card-list">
          <li>Cookies</li>
        </ul>
      </div>
    );
  }
});

var Card = React.createClass({
  render: function(){
    return (
      <div className="card">
        <h2>How to make cookies</h2>
        <Ingredients />
        <Directions />
      </div>
    );
  }
});

var Ingredients = React.createClass({
  render: function(){
    return (
      <ul className="ingredients">
        <li>cookie dough</li>
      </ul>
    );
  }
});

var Directions = React.createClass({
  render: function(){
    return (
      <ol className="directions">
        <li>Open package</li>
        <li>Bake them</li>
      </ol>
    );
  }
});

var Add = React.createClass({
  render: function(){
    return (
      <button className="add-btn">Add</button>
    );
  }
});

var Edit = React.createClass({
  render: function(){
    return (
      <button className="edit-btn">Edit</button>
    );
  }
});

var Delete = React.createClass({
  render: function(){
    return (
      <button className="del-btn">Delete</button>
    );
  }
});

React.render(<Box />,document.getElementById("content"));
