import react from 'react'
import {connect} from 'react-redux'

import {deleteList} from './store/actionCreator'


const mapStateToProps=(state)=>{
    return{
        List:state.List
    }
}


const mapDispatchToProps = dispatch=>{
    return {
        deleteData(index){
            dispatch(deleteList(index))
        }
    }
}

// 返回的是高阶组件
@connect(mapStateToProps,mapDispatchToProps)
class List extends react.Component{
    handleClick=(index)=>{
        return ()=>{
            console.log(index);
            this.props.deleteData(index)
        }
    }
    render() {
        return (
            <ul>
                {
                    this.props.List.map((value,index)=>{
                      return <li key={index}>{value} <span onClick={this.handleClick(index)}>x</span></li>
                    })
                }
            </ul>
        );
    }
    componentDidMount(){
        console.log(this.props.List);
    }
}

export default List