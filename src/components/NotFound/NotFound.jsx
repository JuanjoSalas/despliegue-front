import error from "../../assets/img/error.png"
import "./NotFound.scss"

const NotFound = () => {
    return (
        <div>
            <img className="error" src={error}/>
        </div>
    )
}

export default NotFound