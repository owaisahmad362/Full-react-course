function Random() {
    let number = Math.random() * 100;

    return <h1 style={{'backgroundColor': '#776693'}}>Random numnber is: {Math.round(number)} </h1>

}

export default Random;