import react from "react";
import { getList, asyncGetList, deleteList } from "./store/actionCreator";
import { connect } from "react-redux";

const mapDispatchProps = (dispatch) => {
  return {
    getData() {
      dispatch(asyncGetList());
    },
    deleteData(index) {
      dispatch(deleteList(index));
    },
  };
};

const mapStateProps = (state) => {
  return {
    list: state.list,
  };
};

@connect(mapStateProps, mapDispatchProps)
class List extends react.Component {
  handleClick = (index) => {
    return () => {
      console.log(index);
      this.props.deleteData(index);
    };
  };
  render() {
    return (
      <ul>
        {this.props.list.map((value, index) => {
          return (
            <li key={index}>
              {value.positionName}{" "}
              <button onClick={this.handleClick(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    );
  }
  componentDidMount() {
    console.log(this);
    this.props.getData();
  }
}

export default List;
