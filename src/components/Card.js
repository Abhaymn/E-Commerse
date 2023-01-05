
import './Card.css';


const Cards=(props)=>{
    return(
        <>
        <div className=" col-sm-12 col-md-6 col-xl-3 col-xxl-3">
            <div className="card h-100 shadow">
                
                <div className="card-body">
                    <h5 className="carg-title fw-bolder">{props.title}</h5>
        
                    <img src={props.img} alt="" className="card-img-top img-fluid"/>
                    <div className=" d-flex justify-content-between">
                       <span className="fw-bolder mt-4">${props.price}</span>
                        <div className="d-grid justify-content-and mt-4">
                          <button className="btn btn-sm btn-outline-success">Add to Cart</button>
                        </div>
                    </div>
                </div>
             
            </div>
        </div>
        </>
    )
};
export default Cards;