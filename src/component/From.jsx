
const From = () => {
    function FromHandle(event) {
        event.preventDefault();
        alert("data store")
    }
    return (
        <div>
            <form onSubmit={FromHandle}>
                <input type="text" placeholder="your name" />
                <input type="text" placeholder="your Email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default From;