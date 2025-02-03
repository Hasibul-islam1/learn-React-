const LogingBtn=(status)=>{
if(status){
    return <button>Logout</button>
    
}
else{
    return <button>Login</button>

}
}
const Conditionl_Ifelse = () => {
    return (
        <div>
            <h1>Loging Status</h1>
            {LogingBtn}
        </div>
    );
};

export default Conditionl_Ifelse;