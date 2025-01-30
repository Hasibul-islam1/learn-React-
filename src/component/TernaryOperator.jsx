

const TernaryOperator = () => {
    let age=19;
    let mark=80;
    let waight=60;
    let find=waight>=60?<h1>over waight</h1>:<h1>normal waight</h1>;
    return ( 
        <div>
           {age>=18?<>Ready to vote</>:<>no ready to vote</>}
            {mark >= 80 ? <h1>A+</h1> : <h1>Fail</h1>}
            {find}
        </div>
    );
};

export default TernaryOperator;