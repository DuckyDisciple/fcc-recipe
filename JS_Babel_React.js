var data = [
  {
    title: "Cookies",
    ingredients: [
      "1 pack cookie dough"
    ],
    directions: [
      "Open package",
      "Bake them for 20 min"
    ]
  },
  {
    title: "Salsa",
    ingredients: [
      "1 tomato",
      "1 red pepper",
      "1 onion",
      "1 can tomato sauce",
      "Vegetable oil"
    ],
    directions: [
      "Dice up tomato, pepper, and onion",
      "Add a little oil to a pan and sautee veggies",
      "Put sauce in pan with veggies and let simmer for 5 minutes"
    ]
  }
];

var Box = React.createClass({
  editMode: false,
  curIndex: 0,
  titleList: function(){
    var titles = [];
    for(var i in this.props.data){
      titles.push(this.props.data[i].title);
    }
    return titles;
  },
  showCard: function(){
    return this.props.data[this.curIndex];
  },
  cardItemClicked: function(index){
    this.curIndex = index;
    this.forceUpdate();
  },
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
            <List titles={this.titleList()} cardClicked={this.cardItemClicked} />
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
          <List titles={this.titleList()} cardClicked={this.cardItemClicked} />
        </div>
        <div className="right-side">
          <Card cardData={this.showCard()} />
          <Add addClicked={this.addBtnClick} />
          <Edit editClicked={this.editBtnClick} />
          <Delete />
        </div>
      </div>
    );
  }
});

var List = React.createClass({
  clicked: function(e){
    this.props.cardClicked(e.target.value);
  },
  render: function(){
    var titles = this.props.titles;
    return (
      <div className="cards">
        <ul className="card-list">
          {titles.map(function(title, index){
            return (<li onClick={this.clicked} value={index}>{title}</li>);
            }.bind(this)
          )}
        </ul>
      </div>
    );
  }
});

var Card = React.createClass({
  render: function(){
    return (
      <div className="card">
        <h2>{this.props.cardData.title}</h2>
        <Ingredients ingrList={this.props.cardData.ingredients} />
        <Directions dirList={this.props.cardData.directions} />
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
    var ingreds = this.props.ingrList.map(function(item){
      return (<li>{item}</li>);
    });
    return (
      <ul className="ingredients">
        {ingreds}
      </ul>
    );
  }
});

var Directions = React.createClass({
  render: function(){
    var dirs = this.props.dirList.map(function(item){
      return (<li>{item}</li>);
    });
    return (
      <ol className="directions">
        {dirs}
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

React.render(<Box data={data} />, document.getElementById("content"));
