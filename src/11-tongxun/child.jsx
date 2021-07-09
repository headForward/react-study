import react from 'react'
class Child extends react.Component{
    state={
        name:'我是子组件',
        msg:'子组件传值给父组件'
    }
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}


export default Child
