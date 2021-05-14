import { React, Component } from "react";
import "./magazines.css"

class Magazines extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayValue: this.props.displayValue,
            resolution: this.props.resolution
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            displayValue: nextProps.displayValue,
            resolution: nextProps.resolution,
        };
    }

    render() {
        return (
            <div className="Magazines">
                <header>
                    <h1>FIREHOUSE MAGAZINE</h1>
                </header>
            </div>
        );
    }
}

export default Magazines;