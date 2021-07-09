import react from "react";
import { connect } from "react-redux";
import { putData} from './store/actionCreator'
const mapDispatchToProps = (dispatch) => {
  return {
    putData(task) {
      dispatch(putData(task));
    },
  };
};

@connect(null,mapDispatchToProps)
class From extends react.Component {
  state = {
    value: "",
  };
  handleChange=(e) => {
    this.setState({
      value: e.target.value,
    });
  }
  handleKeyUp= (e)=>{
      if(e.keyCode===13){
          console.log(this);
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
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          type="text"
          name=""
          id=""
        />
      </div>
    );
  }
}

export default From;
