
const DataDrivenObject = (props) => {
    return (
        <div>
            <h4>{props.itme["firstName"] +" " +props.itme["lastName"]} Data</h4>
            <p>{props.itme["firstName"]}</p>
            <p>{props.itme["lastName"]}</p>
            <p>{props.itme["age"]}</p>
            <p>{props.itme["occupation"]}</p>
            <p>{props.itme["isPresident"]}</p>
            <p>{props.itme["famousQuote"]}</p>
          
        </div>
    );
};

export default DataDrivenObject;