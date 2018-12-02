console.log("hey what");

class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count:0
        }
    }
    render () {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    };
    handleAddOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            }
        });
    };
    handleSubOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        });
    };
    handleReset () {
        this.setState(prevState => {
            return {
                count:0
            }
        });
    };
}

ReactDOM.render(<Counter />, document.getElementById('app'));