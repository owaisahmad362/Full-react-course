function Hello() {

    let myName = 'Owais';
    let number = 24;
    let fullName = () => {
        return 'Owais Ahmad'
    }

    return <h2>
        MessageNo: {number} and my FullName is: {fullName()}
    </h2>

}

export default Hello;