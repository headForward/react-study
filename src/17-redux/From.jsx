import react from "react";
import { connect } from "react-redux";
import {putList,deleteList} from './store/actionCreator'
const mapDispatchProps = (dispatch) => {
  return {
    putData(task) {
      dispatch(putList(task));
    },
  };
};

@connect(null, mapDispatchProps)
class From extends react.Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleKeyUp =(e)=>{
      if(e.keyCode==13){
          this.props.putData(this.state.value)
          this.setState({
              value:''
          })
      }
  }
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          value={this.state.value}
          type="text"
          name=""
          id=""
        />
      </div>
    );
  }
  componentDidMount(){
      console.log(this);
  }
}

export default From;
