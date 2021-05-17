import { React, Component } from "react";
import "./Magazines.css"

class Magazines extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayValue: this.props.displayValue,
            resolution: this.props.resolution
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps !== prevState) {
            var res = nextProps.resolution
            return {
                displayValue: nextProps.displayValue,
                resolution: nextProps.resolution,
                displayCSS: {
                    width: res + "px"
                }
            };
        }
        else
            return null
    }

    componentDidMount() {
        var res = this.state.resolution
        this.setState({
            displayCSS: {
                width: res + "px",
            }
        })
        const requestHeaders = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch("./Assets/Data/issues.json", requestHeaders)
            .then(response => response.json())
            .then(result => {
                result.issues.sort((a, b) => new Date(b.PublishedDate) - new Date(a.PublishedDate))
                this.setState({ issues: result.issues })
            })
    }

    renderIssues = () => {
        switch (this.state.displayValue) {
            case "grid-featured":
                return <div className="display">
                    <div className="featured">
                        <img style={{ width: "95%" }} src={this.state.issues[0].FrontPage} alt={this.state.issues[0].PublishedDate} />
                        <div>
                            <h2>{this.state.issues[0].PublishedDate}</h2>
                            <div>
                                <button>Subscribe</button>
                                <button>Archives</button>
                                <button>Renewal</button>
                            </div>
                        </div>
                    </div>
                    <div className="old">
                        <Issues issues={this.state.issues} displayValue={this.state.displayValue} />
                    </div>
                </div >
            case "grid":
                return <div className="grid">
                    <Issues issues={this.state.issues} displayValue={this.state.displayValue} />
                </div>
            case "featured":
                return <div>
                    <img style={{ width: "95%" }} src={this.state.issues[0].FrontPage} alt={this.state.issues[0].PublishedDate} />
                    <div>
                        <h2>{this.state.issues[0].PublishedDate}</h2>
                        <div>
                            <button>Subscribe</button>
                            <button>Archives</button>
                            <button>Renewal</button>
                        </div>
                    </div>
                </div>
            default:
                return null
        }
    }

    render() {
        return (
            <div style={this.state.displayCSS}>
                <header>
                    <h1>FIREHOUSE MAGAZINE</h1>
                </header>

                {this.state.issues ? this.renderIssues() : "Issues Loading"}
            </div>
        );
    }
}

const Issues = (props) => {
    return props.issues.map((row, index) => {
        if (props.displayValue === "grid" && index < 12)
            return <img key={index} src={row.FrontPage} alt={row.PublishedDate} />
        else if (props.displayValue === "grid-featured" && index !== 0)
            return <img key={index} src={row.FrontPage} alt={row.PublishedDate} />
        return null
    })
}

export default Magazines;