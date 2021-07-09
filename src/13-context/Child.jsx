import react from 'react'
import {CountConsumer,countContext} from './Count'

class Child extends react.Component{
    // static contextType = countContext
    render() {
        console.log("this",this);
        return (
            <div>
                <CountConsumer>
                    {
                        ({count,add})=>{
                            return <div>{count}</div>
                        }
                    }
                </CountConsumer>
            </div>
        );
    }
}

export default Child