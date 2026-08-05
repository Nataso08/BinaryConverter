import '../scripts/converter.ts'

function Card(props: any) {
    return (
    <div className="">
        <h2 className="text-black bg-sky-600 p-4 text-xl text-center rounded-t-xl rounded-b-xs">
            {props.title}
        </h2>
        
        <div className="text-black bg-white p-4 text-lg rounded-t-xs rounded-b-xl">
            <input value={props.value} onChange={e => props.onChange(e.target.value)}/>
        </div>
    </div>);
}

export default Card