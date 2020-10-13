import React from "react";
import FoodItemList from "./partials/FoodItemList";
import AddFoodItem from "./partials/AddFoodItem";
import logo from "../../assets/menu.png";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      userId: 1,
      food: "",
      food_type: "",
      food_sub_type: "",
      url: "",
      cost: "",
      description: "",
      status: false,
      foodItem: {},
      foodItems: [],
      editing: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteFoodItem = this.deleteFoodItem.bind(this);
    this.addFoodItem = this.addFoodItem.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  addFoodItem(event) {
    event.preventDefault();
    if (!this.state.food) return;
    const foodItem = {
      id: this.state.foodItems.length + 1,
      food: this.state.food,
      cost: this.state.cost,
      description: this.state.description,
      food_type: this.state.food_type,
      food_sub_type: this.state.food_sub_type,
      url: this.state.url,
      userId: this.state.userId,
      statu: this.state.status,
    };
    this.setState({
      food: "",
      cost: "",
      description: "",
      food_sub_type: "",
      food_type: "",
      url: "",
      foodItem: foodItem,
      foodItems: [...this.state.foodItems, foodItem],
    });
  }

  deleteFoodItem(id) {
    const foodItems = this.state.foodItems.filter((item) => item.id !== id);
    this.setState({ foodItems: foodItems });
    if (this.state.editing === true) {
      window.location.reload();
    }
  }

  render() {
    const { foodItems } = this.state;
    return (
      <div className="App">
        <div class="topnav">
          <a class="active" href="#home">
            Welcome
          </a>
          <a href="#home" id="mobilea">
            {" "}
            , UserName
            <img alt="menu1" id="menu1" src={logo} />
          </a>

          <a id="username" href="#news">
            Username{" "}
          </a>
          <img
            alt="user"
            id="img"
            src="https://t3.ftcdn.net/jpg/01/44/52/94/240_F_144529471_9LhgvhXAYfy50nDjir1aadtMuiMiYUDX.jpg"
          />

          <img
            alt="menu"
            id="menu"
            src="https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg"
          />
        </div>
        <div class="container">
          <div className="row App-main">
            {
              <AddFoodItem
                food={this.state.food}
                cost={this.state.cost}
                description={this.state.description}
                url={this.state.url}
                food_type={this.state.food_type}
                food_sub_type={this.state.food_sub_type}
                handleInputChange={this.handleInputChange}
                addFoodItem={this.addFoodItem}
              />
            }
          </div>

          <div class="vl"></div>
          <div id="divapp" class="col-4">
            <FoodItemList
              id="list"
              foodItems={foodItems}
              deleteFoodItem={this.deleteFoodItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
