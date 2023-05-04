export default function Todo({id, text, handelClick}){
    return(
        <div>
            <button onClick={() => handelClick(id)}>{text}</button>
        </div>
    )
}