
import Cards from './Card';
import './Main.css';
import Data from './Data/Data';


const Main=()=>{
    return(
        <div className="container-fluid">
           <h3 className='text-center mt-5 text-uppercase fw-bolder'>MUSIC</h3> 
           <div className='container py-4'>
                <div className='row'>
                    {Data.products.map((item,index)=>{
                        return(
                            <Cards  title={item.title} img ={item.img} des={item.des} price={item.price} key={index} />
                        
                        )
                        
                    })}
                    
                    
                </div>
           </div>
        </div>
    )
}
export default Main;