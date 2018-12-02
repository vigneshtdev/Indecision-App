//Create a component
class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isVisible:false
        }
        this.toggleVisibilty = this.toggleVisibilty.bind(this);
    }
    toggleVisibilty () {
        this.setState(prevState => {
            return {
                isVisible: !prevState.isVisible
            }
        });
    }
    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibilty}>
                    {this.state.isVisible? 'Hide Details': 'Show Details'}
                </button>
                {
                    this.state.isVisible && (
                        <div>
                            <p>Hey These are the details you should see!</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));