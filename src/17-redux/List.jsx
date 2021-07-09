import react from "react";
import { connect } from "react-redux";
import {deleteList,getList} from './store/actionCreator'

const mapStateProps = (state) => {
  return {
    List: state.List,
  };
};

const mapDispatchProps = (dispatch)=>{
    return {
        putData(index){
            dispatch(deleteList(index))
        },
        getData(){
            dispatch(getList())
        }
    }
}

@connect(mapStateProps,mapDispatchProps)
class List extends react.Component {
  handleClick = (index) => {
    return ()=>{
        console.log(this);
        this.props.putData(index)
    }
};
  render() {
    return (
      <ul>
        {this.props.List.map((val, index) => {
          return (
            <li key={index}>
              {val.positionName} <button onClick={this.handleClick(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    );
  }
  componentDidMount() {
    console.log(this.props.List);
    this.props.getData()
  }
}

export default List;
