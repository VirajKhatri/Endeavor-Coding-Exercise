import { React, Component } from "react";
import Magazines from "../Magazines/Magazines"

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayValue: "grid-featured",
            resolution: "1280*720"
        }
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

                    <label>Select a resolution: </label>
                    <select value={this.state.resolution} onChange={(event) => this.setState({ resolution: event.target.value })}>
                        <option value="640*360">640 * 360</option>
                        <option value="800*600">800	* 600</option>
                        <option value="1024*768">1024 * 768</option>
                        <option value="1280*720">1280 * 720</option>
                        <option value="1280*800">1280 * 800</option>
                        <option value="1280*1024">1280 * 1024</option>
                        <option value="1360*768">1360 * 768</option>
                        <option value="1366*768">1366 * 768</option>
                        <option value="1440*900">1440 * 900</option>
                        <option value="1536*864">1536 * 864</option>
                        <option value="1600*900">1600 * 900</option>
                        <option value="1680*1050">1680 * 1050</option>
                        <option value="1920*1080">1920 * 1080</option>
                        <option value="1920*1200">1920 * 1200</option>
                        <option value="2048*1152">2048 * 1152</option>
                        <option value="2560*1080">2560 * 1080</option>
                        <option value="2560*1440">2560 * 1440</option>
                        <option value="3440*1440">3440 * 1440</option>
                        <option value="3840*2160">3840 * 2160</option>
                    </select>
                </form>

                <Magazines displayValue={this.state.displayValue} resolution={this.state.resolution} />
            </div>
        );
    }
}

export default Home;