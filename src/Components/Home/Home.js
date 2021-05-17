import { React, Component } from "react";
import Magazines from "../Magazines/Magazines"

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayValue: "grid-featured",
            resolution: window.innerWidth
        }
    }

    updateRes = () => {
        this.setState({resolution: window.innerWidth})
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateRes);
    }

    render() {
        return (
            <div className="Home">
                <form>
                    <label>Select a display type: </label>
                    <select value={this.state.displayValue} onChange={(event) => this.setState({ displayValue: event.target.value })}>
                        <option value="grid">Grid</option>
                        <option value="featured">Featured</option>
                        <option value="grid-featured">Grid + Featured</option>
                    </select>
                    &nbsp;
                    <label>Resolution: </label>{this.state.resolution}
                </form>

                <Magazines displayValue={this.state.displayValue} resolution={this.state.resolution} />
            </div>
        );
    }
}

export default Home;