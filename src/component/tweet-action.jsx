import logo1 from "../assets/React.svg"
function TweetAction(props){
    // console.log(props)
    return(
        <div className="tweet-action">
            <img src={props.actions} alt="" />
            <span>{props.nombre}</span>
        </div>
    )
}
export default TweetAction