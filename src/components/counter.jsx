import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  // state = {
  //   value: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold",
  //   };

  //   constructor() {
  //     super();
  //     the line below creates a new instance to the handleIncrement function which this references the current counter object
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.state.tags.length === 0) return "There are no tags";
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   Handling Events do not have access to this so we have to bind them to the Counter object
  //   I create the constructo r method in order to do this
  //   Another option is to use an arrow function for the handleIncrement method like below
  // handleIncrement = () => {
  // console.log("Increment button clicked!", this);
  //the below line merges or overwrite the count property
  // console.log(product);
  // this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    // console.log("Props", this.props);
    console.log("Counter - Rendered");
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        {/* the below line works when you define the style as an object */}
        {/* <span style={this.styles}>{this.formatCount()}</span>  */}

        {/* <span style={{ fontSize: 10 }}>{this.formatCount()}</span> */}
        <button
          // In the line below I make a reference to the handleIncrement method ie no parenthesis after the method name
          // onClick={this.handleIncrement}

          //the line below works when i need to pass arguments to a function, like the id of a product
          // onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <span>{this.renderTags()}</span> */}
        {/* 
        <ul>
            {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
