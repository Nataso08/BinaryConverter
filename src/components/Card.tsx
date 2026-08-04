function Card(props) {
    return (
    <div className="">
        <h2 className="text-black bg-sky-600 p-4 text-xl text-center rounded-t-xl rounded-b-xs">
            {props.title}
        </h2>
        
        <form className="text-black bg-white p-4 text-lg rounded-t-xs rounded-b-xl">
            <input id={props.cardId}>
            </input>
        </form>
    </div>);
}

export default Card