console.log("App.js is running");

const app = {
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer.',
    options:['One', 'Two']
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }    
}
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
    console.log("resetbtn clicked");
};
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log("-1");
};
const appRoot = document.getElementById('app');

const renderCounterApp = () => {    
    const templateTwo = 
    (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);   
};
// renderCounterApp();
const clearOptions = () => {
    app.options = [];
    renderOptions();
};
const makeDecision = () => {
    const randomNumber = Math.floor(Math.random()*app.options.length);
    const selectedOption = app.options[randomNumber];
    alert(selectedOption);
};
const renderOptions = () => { 
    const template = 
    (
        <div>
            <h1>Indecison App</h1>    
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options':'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={clearOptions}>Clear Options</button>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What To Do</button>
            <ol>
                {
                    app.options.map(option => {
                        return <li key={option}>Option: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input name="option" type="text"/>
                <button>Add option</button>
            </form>
        </div>
    );   
    ReactDOM.render(template, appRoot);   
};
renderOptions();