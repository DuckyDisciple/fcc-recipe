var Box = React.createClass({
  editMode: false,
  addBtnClick: function(){
    this.editMode = true;
    this.forceUpdate();
  },
  editBtnClick: function(){
    this.editMode = true;
    this.forceUpdate();
  },
  saveBtnClick: function(){
    this.editMode = false;
    this.forceUpdate();
  },
  render: function(){
    if(this.editMode){
      return (
        <div className="box">
          <div className="left-side">
            <List />
          </div>
          <div className="right-side">
            <EditCard />
            <Save saveClicked={this.saveBtnClick} />
          </div>
        </div>
      );
    }
    return (
      <div className="box">
        <div className="left-side">
          <List />
        </div>
        <div className="right-side">
          <Card />
          <Add addClicked={this.addBtnClick} />
          <Edit editClicked={this.editBtnClick} />
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

var EditCard = React.createClass({
  render: function(){
    return (
      <div className="edit-card">
        <label>Title</label>
        <input type="text" name="title-txt" className="title" />
        <label>Ingredients</label>
        <input type="text" className="ingr-txt" />
        <label>Directions</label>
        <input type="text" className="dir-txt" />
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
  clicked: function(){
    this.props.addClicked();
  },
  render: function(){
    return (
      <button onClick={this.clicked} className="add-btn">Add</button>
    );
  }
});

var Edit = React.createClass({
  clicked: function(){
    this.props.editClicked();
  },
  render: function(){
    return (
      <button className="edit-btn" onClick={this.clicked}>Edit</button>
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

var Save = React.createClass({
  clicked: function(){
    this.props.saveClicked();
  },
  render: function(){
    return (
      <button className="save-btn" onClick={this.clicked}>Save</button>
    );
  }
});

React.render(<Box />,document.getElementById("content"));
