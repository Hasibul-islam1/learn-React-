
const RespoindingEvent = () => {
    function btn04() {
        alert("btn 04 clicked")
    }
    return (
        <div>
            <button onClick={alert("btn 01 clicked")}>btn01</button>
            <button onClick={()=>{
                alert("btn 02 clicked")
            }}>btn02</button>
            <button onClick={
                function hellow() {
                    alert("btn 03 clicked")
                }
            }>btn 03</button>
            <button onClick={btn04}>btn04</button>
        </div>
    );
};

export default RespoindingEvent;