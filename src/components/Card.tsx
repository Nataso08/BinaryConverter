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
        <h2 className="text-black bg-sky-600 p-4 text-xl text-center rounded-t-xl rounded-b-xs">
            {props.title}
        </h2>
        <form action="/action_page.php">
            <label >Choose a car:</label>
            <select onChange={handleBaseChange} defaultValue={props.base}>
                {NUMBERS.map((n) => (
                    <option value={n}>{n}</option>
                ))}
            </select>
        </form>
        
        <div className="text-black bg-white p-4 text-lg rounded-t-xs rounded-b-xl">
            <input value={props.value} onChange={handleValueChange}/>
        </div>
    </div>);
}

export default Card