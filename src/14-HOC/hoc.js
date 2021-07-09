import react from 'react'


const hoc =(Comp)=>{
    return class App extends react.Component{
        render() {
            return (
                <Comp {...this.props} title="hello"></Comp>
            );
        }
        componentDidMount(){
        }
    }
}

export default hoc