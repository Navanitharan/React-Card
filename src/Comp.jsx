import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./Comp.css"

function Card(props) {
    return(
        <div className="card col-sm-10 col-md-4 col-lg-3 p-3 mb-3">
        <div className="card-head p-3">
            <p className='planeName opacity-25 fs-5'>{props.data.planeName}</p>
            <p className="price fs-4">${props.data.price}/month</p>
        </div>
            <div className="card-body">
                {props.data.features.map((feature)=>{
                    return feature.enable ? <p><FontAwesomeIcon icon={faCheck}/>{feature.name}</p>:<p className='opacity-25'><FontAwesomeIcon icon={faXmark}/>{feature.name}</p>
                })}
                <a href="#" className="btn bg-primary fs-5 fw-bold text-light">Button</a>
            </div>
        </div>
    );
}
export default Card;