import PageTitle from "./page-title"
import TopTweet from "./top-tweet"

function Header(){
    return(
        <div className="header">
        <PageTitle/>
        <TopTweet/>
        </div>
    )
}
export default Header