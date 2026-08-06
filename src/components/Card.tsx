const NUMBERS = [...Array(35)].map((_, i) => i + 2);

function Card(props: any) {
    function handleValueChange(e: any) {
        let value: string = e.target.value;

        while (value.length > 1) {
            if (value[0] === '0') {
                value = value.substring(1);
            } else break;
        }
        if (value.length == 0) {
            value = '0';
        }

        props.onValueChange(value);
    }

    function handleBaseChange(e: any) {
        props.onBaseChange(e.target.value);
    }

    return (
    <div className="">
        <div className="bg-sky-600 p-4 rounded-t-xl rounded-b-xs flex flex-wrap">
            <h2 className="text-xl text-left grow"><b>
                {props.title}
            </b></h2>
            <form className="text-lg text-right grow">
                <label >Base: </label>
                <select onChange={handleBaseChange} value={props.base}>
                    {NUMBERS.map((n) => (
                        <option value={n}>{n}</option>
                    ))}
                </select>
            </form>
        </div>
        
        <div className="bg-white p-4 text-lg rounded-t-xs rounded-b-xl">
            <b><input value={props.value} onChange={handleValueChange} className="w-full"/></b>
        </div>
    </div>);
}

export default Card