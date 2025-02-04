

const ShortHandCondition = () => {
    const number=80;
    const me=true;
    return (
        <div>
            <p>This number is {number}</p>
            {
                number>=80?
                <h1>A+</h1>
                :
                <h1>fAail</h1>
            }
            {me && <button>hi</button>}
        </div>
    );
};

export default ShortHandCondition;