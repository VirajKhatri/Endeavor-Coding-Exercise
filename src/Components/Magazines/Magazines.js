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
            var imgWidth;
            if (nextProps.displayValue === "grid") {
                imgWidth = Math.round((res / 4) - 6)
            }
            else if (nextProps.displayValue === "grid-featured") {
                imgWidth = Math.round(((res * 0.6) / 4) - 6)
            }
            else {
                imgWidth = res
            }
            return {
                displayValue: nextProps.displayValue,
                resolution: nextProps.resolution,
                displayCSS: {
                    width: res + "px",
                },
                gridImgCSS: {
                    width: imgWidth + "px",
                },
                featuredImgCSS: {
                    width: imgWidth + "px",
                }
            };
        }
        else
            return null
    }

    componentDidMount() {
        var res = this.state.resolution
        var imgWidth;
        if (this.state.displayValue === "grid") {
            imgWidth = Math.round((res / 4) - 6)
        }
        else if (this.state.displayValue === "grid-featured") {
            imgWidth = Math.round(((res * 0.6) / 4) - 6)
        }
        else {
            imgWidth = res
        }
        this.setState({
            displayCSS: {
                width: res + "px",
            },
            gridImgCSS: {
                width: imgWidth + "px",
            },
            featuredImgCSS: {
                width: imgWidth + "px",
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
                        <img className="featured-img" src={this.state.issues[0].FrontPage} alt={this.state.issues[0].PublishedDate} />
                        <div className="featured-values">
                            <h2>{this.state.issues[0].PublishedDate}</h2>
                            <div>
                                <button>Subscribe</button>
                                <button>Archives</button>
                                <button>Renewal</button>
                            </div>
                        </div>
                    </div>
                    <div className="old">
                        <Issues issues={this.state.issues} displayValue={this.state.displayValue} gridImgCSS={this.state.gridImgCSS} />
                    </div>
                </div>
            case "grid":
                return <div className="display">
                    <div className="old">
                        <Issues issues={this.state.issues} displayValue={this.state.displayValue} gridImgCSS={this.state.gridImgCSS} />
                    </div>
                </div>
            case "featured":
                return <div>
                    <img style={this.state.featuredImgCSS} src={this.state.issues[0].FrontPage} alt={this.state.issues[0].PublishedDate} />
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
            return <img key={index} style={props.gridImgCSS} src={row.FrontPage} alt={row.PublishedDate} />
        else if (props.displayValue === "grid-featured" && index !== 0)
            return <img key={index} style={props.gridImgCSS} src={row.FrontPage} alt={row.PublishedDate} />
        return null
    })
}

export default Magazines;