
import Card from '../components/Card'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'




const Home = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [loading, setLoading] = useState(true)

    const [search, setSearch] = useState("");


    const fetchData = async () => {
        try {
            
       
            const response = await fetch("https://food-api-u34z.onrender.com/api/foodData", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        })
        

        const data = await response.json()
        setData(data)
    } catch (error) {
           console.log("error fetch data", error) 
    }finally{
        setLoading(false)
    }

    }
    useEffect(() => {

        fetchData();

    }, [])
    useEffect(() => {
        // Fetch categories and update state only once when the component mounts
        const categories = [...new Set(data.map((val) => val.category))];
        setFilterData(categories);

    }, [data]); // Add dependencies if necessary

    return (
        <div>
            {loading ? <Loading />
                :
                <>

                    <Carousel
                        setSearch={setSearch}
                    />
                    <div className=" container bg-dark mt-2 ">
                        {filterData &&
                            filterData.map((curr, ind) => {
                                return (
                                    <>
                                        <div className="row mb-3 " key={ind}>

                                            <h1 className=' text-light'>{curr}</h1>
                                            <hr />
                                            {

                                                data
                                                    .filter((val) => {
                                                        return (val.category === curr && val.name.toLowerCase().includes(search.toLowerCase()))
                                                    })
                                                    .map((filteredItem, ind) => (
                                                        <div className="col-12 col-md-6 col-lg-3" key={ind}>
                                                            <Card
                                                                foodItem={filteredItem}
                                                                options={filteredItem.options[0]}
                                                            />
                                                        </div>
                                                    ))


                                            }


                                        </div>
                                    </>

                                )
                            })
                        }


                    </div>
                </>
            }

            <Footer />
        </div>
    )
}

export default Home
