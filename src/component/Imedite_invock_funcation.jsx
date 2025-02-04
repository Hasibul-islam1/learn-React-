
const Imedite_invock_funcation = () => {
    const data=true;
    return (
        <div>
            {(()=>{
                if (data) {
                   return <p>imedite invock funcation is on</p> 
                }
                else{
                    return <p>funcation is off</p>
                }
            })()}
        </div>
    );
};

export default Imedite_invock_funcation;