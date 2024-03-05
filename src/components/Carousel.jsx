import React from 'react'

const Carousel = (props) => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade " style={{objectFit:"contain !important"}} data-bs-ride="carousel">
                <div className="carousel-inner" id='carouserl' >
                    <div className='carousel-caption' style={{zIndex:"2"}}>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{props.setSearch(e.target.value)}} />
                            {/* <button className="btn btn-outline-success text-white " type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×300/?burger" className="d-block w-100 h-50" alt="..." style={{filter:"brightness(30%)"}} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×300/?momos" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×300/?icecream" className="d-block w-100 " alt="..." style={{filter:"brightness(30%)"}} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
