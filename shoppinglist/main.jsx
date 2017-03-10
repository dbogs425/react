var Fruits = React.createClass({
    render: function(){
        return (
        <div>
        <h1>Fruits:</h1>
        <ul>
            <li>Bananas</li>
            <li>Strawberries</li>
            <li>Apples</li>
        </ul>
        </div>
        )
    }
});
var Veggies = React.createClass({
    render: function(){
        return (
        <div>
            <h1>Vegetables:</h1>
            <ul>
                <li>Peppers</li>
                <li>Carrots</li>
                <li>Sweet Potatoes</li>
            </ul>
        </div>)
    }
});
var Meats = React.createClass({
    render: function(){
        return (
        <div>
            <h1>Meat:</h1>
        <ul>
            <li>Beef</li>
            <li>Chicken</li>
            <li>Bacon</li>
        </ul>
        </div>)
    }
})
class List extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
    return(
        <div>
        <Meats/>
        <Veggies/>
        <Fruits/>
        </div>
    );
}
}
 ReactDOM.render(<List/>,document.getElementById('target-div'));
