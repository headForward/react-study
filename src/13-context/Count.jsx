import react, { createContext } from "react";
import Child from "./Child";
import ChildHood from "./ChildHood";
let countContext = createContext();
let { Provider, Consumer: CountConsumer } = createContext();

class CountText extends react.Component {
    constructor(props){
        super(props)
        this.add= this.add.bind(this)
    }
  state = {
    count: 0,
  };
  add(ages) {
    console.log("111");
    // let count = this.state.count
    // console.log("count",count);
    // count+=1
    this.setState((state) => {
      return {
        count: state.count+ages,
      };
    });
  }
  subtract() {}
  render() {
    return (
      <Provider
        value={{
          count: this.state.count,
          add: this.add,
          subtract: this.subtract,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
  componentDidMount() {
    (function(arr=[2,3,4]) {
        // arrList存储全部组合
        var flag = 1
        var arrList = [];
        // var repetitionArr =[]
        getArrList(arr,[])
        function getArrList(arr, getArr = []) {
            arr.map((item, index) => {
                let newGetArr = [...getArr];
                newGetArr.push(item);
                if(newGetArr.length!==1){
                    if(arrList.length==0){
                        arrList.push(newGetArr);
                        console.log(newGetArr);
                    }else{
                    try{
                        arrList.map((arrItem,arrIndex)=>{
                            if(JSON.stringify(arrItem.sort())!==JSON.stringify(newGetArr.sort())&&arrIndex==arrList.length-1){
                                arrList.push(newGetArr)
                                console.log(newGetArr);
                            }else if(JSON.stringify(arrItem.sort())===JSON.stringify(newGetArr.sort())) {
                                throw new Error()
                            }
                        })
                    }catch{
                        
                    }
                    }
                }
                let newArr = arr.slice(index+1)
                // flag+=1
                getArrList(newArr, newGetArr);
              });
        
        }
        console.log("arrList",arrList.length);
      })()
  }
}

export { CountText, CountConsumer, Provider, countContext };
