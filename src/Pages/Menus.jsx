import { useEffect, useState } from 'react'

function Menus() {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/foods/")
            .then((res) => res.json())
            .then((data) => setFood(data))
            .catch((error) => console.error('Error fetching food data:', error));
    }, []);
    return (
        <section>
            <div className="container my-5">
                <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">KIDS MEALS</button>
                        <button className="nav-link " id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">FINGER FOODS</button>
                        <button className="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">SMOOTHIES</button>
                        <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">SNACKS</button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                            <div className="row">
                                <div className="col-lg-10 px-5">
                                    <div className='d-flex gap-5 mb-4'>
                                        <h3>Kids Meals</h3> <button className='btn btn-secondary'>Have a Picky Eater? <i className="bi bi-chevron-right"></i></button>
                                    </div>
                                    <p>Delightfully delicious, always nutritious, ready to eat in 1 minute. Great for getting veggies and a good source of protein in every meal! Perfect for toddlers & kids. Made fresh, never frozen. Just heat & serve.</p>
                                    <p>$7.49 / MEAL</p>


                                    <div className="row my-4">
                                        {food.map((foodItem, i) => (
                                            <div className="col-lg-4" key={i}>
                                                <div className="card pb-5 text-success" style={{ width: '17rem' }}>
                                                    <img src={`http://127.0.0.1:8000${foodItem.food_image}`} className="card-img-top" alt="Food" />
                                                    <div className="card-body text-center p-0">
                                                        <p className="card-text">{foodItem.name}</p>
                                                        <h5 className="card-title">{foodItem.category}</h5>
                                                        <button className="btn btn-warning text-success fw-bold">See Meals</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Menus
