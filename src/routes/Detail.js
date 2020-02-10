import React from "react";
import { Link } from "react-router-dom";


function Info({title}) {
    return(
        <div>
            <span>{title}</span>
            <Link to="/" >Home</Link>
        </div>
    )
}

class Detail extends React.Component{
    
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }

    render(){
        const { location } = this.props;
        if (location.state) {
            return (
                <Info title={location.state.title}> 
                    
                </Info>
            )
        } else {
            return null;
        }
        
    }
}



export default Detail;