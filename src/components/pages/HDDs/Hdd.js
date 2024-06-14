import React from "react";
import ProductData from './HddData';
import './HDD.css';
const Product = () => {
    const [detail,setDetail] = useState();
    const detailPage = (Product) =>
    {
      setDetail([{...Product}])
    }
  return (
    <>
    <div className='detail_container'>
      <div className='detail_contant'>
        {
          detail.map((x) =>
          {
            return(
              <>
              <div className='detail_info'>
                <div className='img-box'>
                  <img src={x.img} alt={x.Title}></img>
                </div>
                <div className='product_detail'>
                  <h2>{x.Title}</h2>
                  <h3>$ {x.Price}</h3>
                  <p>{x.Des}</p>
                  <button>Add To Cart</button>
                </div>
              </div>
              </>
            )
          })
        }
      </div>
    </div>
    <div className='container'>
      {
        ProductData.map((curElm)=>
        {
          return(
            <>
            <div className='box'>
              <div className='contant'>
                  <div className='img-box'>
                    <img src={curElm.img} alt={curElm.Title}></img>
                    <div className='detail'>
                        <div className='info'>
                          <h3>{curElm.Title}</h3>
                          <p>$ {curElm.Price}</p>
                        </div>
                        <button onClick={()=> detailPage (curElm)}>View</button>
                    </div>
                  </div>
              </div>
            </div>
            </>
          )
        })
      }
    </div>
    </>
  )
}

export default Product