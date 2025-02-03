
const If_else = () => {
     let age=18;
    return (
       
        <div>
            {(()=>{
                if (age>=18) {
                    return <h1>Ready to vote</h1>
                }
                else if(age<18&&age>=15){
                    return <h1>Wait some year</h1>
                }
                else{
                    return <h1>You are a baby</h1>
                }
            })()}
        </div>
    );
};

export default If_else;