import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTint} from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
    return (
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <FontAwesomeIcon className="me-1" icon={faTint}/>
                <strong>KARBALA</strong> : Muharram 2021
            </a>
        </div>
    )
}

export default Logo