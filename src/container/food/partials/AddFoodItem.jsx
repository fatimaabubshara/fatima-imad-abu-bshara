import React from "react";

const AddFoodItem = (props) => {
  return (
    <div class="container">
      <form onSubmit={props.addFoodItem}>
        <div className="form-group">
          <button id="plus2" className="plus">
            +
          </button>
          <br></br>
          <button className="plus">+</button>
          <input
            id="food_type"
            placeholder="Food Type"
            type="text"
            className="form-control"
            name="food_type"
            value={props.food_type}
            onChange={props.handleInputChange}
            required
            list="exampleList"
          />
          <datalist id="exampleList">
            <option value="Food" />
            <option value="Desire" />
            <option value="Drinks" />
          </datalist>
        </div>

        <div className="form-group">
          <input
            id="food"
            placeholder="Enter Food Name"
            type="text"
            className="form-control"
            name="food"
            value={props.food}
            onChange={props.handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            min="1"
            placeholder="Enter Food price"
            type="number"
            className="form-control"
            name="cost"
            value={props.cost}
            onChange={props.handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            id="description"
            placeholder="Enter Food Description"
            type="text"
            className="form-control"
            name="description"
            value={props.description}
            onChange={props.handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Enter Food URL"
            type="text"
            className="form-control"
            name="url"
            value={props.url}
            onChange={props.handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            id="food_sub_type"
            placeholder="Food Sub Type"
            type="text"
            className="form-control"
            name="food_sub_type"
            value={props.food_sub_type}
            onChange={props.handleInputChange}
            required
            list="exampleList"
          />
          <datalist id="exampleList">
            <option value="Food" />
            <option value="Desire" />
            <option value="Drinks" />
          </datalist>
        </div>

        <button id="add" className="btn btn-success mt-2">
          {" "}
          Add To Menu{" "}
        </button>
      </form>
    </div>
  );
};

export default AddFoodItem;
