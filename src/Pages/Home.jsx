import { useEffect, useState } from 'react'
import banner from "../assets/images/banner.jpeg"
import "./home.scss"
import Slider from 'react-slick';
function Home() {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/foods/")
            .then((res) => res.json())
            .then((data) => setFood(data))
            .catch((error) => console.error('Error fetching food data:', error));
    }, []);

    const [faqData, setFaqData] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/faqs/')
            .then((res) => res.json())
            .then((data) => setFaqData(data))
            .catch((error) => console.error('Error fetching FAQ data:', error));
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <>
            <div className='banner-section position-relative'>
                <img className='w-100 img-fluid' src={banner} alt="" />
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className='overflow-box position-absolute'>
                            <h1 className='text-center pt-5 fw-bold text-light'>FEEL GREAT SERVING</h1>
                            <Slider {...settings}>
                                <div>
                                    <h3 className='text-center fs-1 text-success'>EASY</h3>
                                </div>
                                <div>
                                    <h3 className='text-center fs-1 text-success'>DELICIOUS</h3>
                                </div>
                                <div>
                                    <h3 className='text-center fs-1 text-success'>READY-MADE</h3>
                                </div>
                                <div>
                                    <h3 className='text-center fs-1 text-success'>STRESS-FREE</h3>
                                </div>
                                <div>
                                    <h3 className='text-center fs-1 text-success'>NUTRITIOUS</h3>
                                </div>
                            </Slider>
                            <div className='clip-path-15'></div>
                            <h1 className='text-center pt-2 fw-bold text-light'>KIDS FOOD.</h1>
                            <button className='btn btn-warning text-success fw-bold menu-btn'>See Menu & Pricing</button>
                            <p className='text-center py-2 fw-semibold text-success'>From Rs 988.97 / item</p>
                        </div>
                    </div>
                </div>


            </div>

            <section >
                <div className="container my-5 border-bottom">
                    <h1 className='text-success fw-bold'>HOW IT WORKS</h1>

                    <div className="row my-5">
                        <div className="col-lg-4 text-success">
                            <div className='position-relative'>
                                <img className='w-100 img-fluid my-3' src="https://www.nurturelife.com/wp-content/uploads/2022/05/build-your-box.jpg" alt="" />
                                <img className='position-absolute working-logo' src="https://www.nurturelife.com/wp-content/uploads/2020/12/plate.svg" alt="" />
                            </div>
                            <h4>1. BUILD YOUR BOX</h4>
                            <p>Select from a diverse menu of anytime eats & treats: balanced Finger Foods and Kids Meals, vibrant Superfood Smoothies & protein-packed Mighty Bites.</p>
                        </div>
                        <div className="col-lg-4 text-success">
                            <div className='position-relative'>
                                <img className='w-100 img-fluid my-3' style={{ height: "200px" }} src="https://image.jimcdn.com/app/cms/image/transf/dimension=490x1024:format=jpg/path/sdf5caca26358b38a/image/ie3c0bf51ae2121b7/version/1586287471/image.jpg" alt="" />
                                <img className='position-absolute working-logo1' src="https://www.nurturelife.com/wp-content/uploads/2020/12/truck.svg" alt="" />
                            </div>
                            <h4>2. WE COOK & DELIVER</h4>
                            <p>Created by chefs & dietitians, our food is made fresh with real, clean ingredients & delivered weekly to your door.</p>
                        </div>
                        <div className="col-lg-4 text-success">
                            <div className='position-relative'>
                                <img className='w-100 img-fluid my-3' src="https://ucarecdn.com/12cc6057-67ee-47aa-916d-ef0c789b54ac/" alt="" />
                                <img className='position-absolute working-logo' src="https://www.nurturelife.com/wp-content/uploads/2020/12/kid-a.svg" alt="" />
                            </div>
                            <h4>3. EAT. LOVE. REPEAT.</h4>
                            <p>Serve up a hot meal in 1 minute or delight your kid with snacks & smoothies that are ready to savor straight from the fridge. Skip, pause or cancel anytime.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="container text-success">
                    <h1 className='text-center'>WHATS ON THE MENU?</h1>
                    <p className='text-center'>Bite-sized Finger Foods for little ones learning to self-feed. Delicious Kids Meals for toddlers and kids ready for bigger meals and more variety. Wholesome snacks and naturally sweet smoothies to fuel up any time of day. We’ve cooked up all the best nutritious delights for your little ones. Goodbye kitchen stress.</p>

                    <div className="row my-4">

                        <div className="row my-4">
                            {food.map((food, i) => (
                                <div className="col-lg-3" key={i}>
                                    <div className="card pb-5 text-success" style={{ width: '17rem' }}>
                                        <img src={`http://127.0.0.1:8000${food.food_image}`} className="card-img-top" alt="Food" />
                                        <div className="card-body text-center p-0">
                                            <p className="card-text">{food.name}</p>
                                            <h5 className="card-title">{food.category}</h5>
                                            <button className="btn btn-warning text-success fw-bold">See Meals</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>




                    </div>
                </div>

            </section>

            <section className='position-relative'>
                <img className='w-100 service-section' src="https://www.nurturelife.com/wp-content/uploads/2020/12/bg-texture.png" alt="" />
                <div className="container">
                    <div className="row  position-absolute services text-light justify-content-center align-items-center">
                        <div className="col-lg-5">
                            <h1>FOOD YOU’LL BE PROUD TO SERVE</h1>
                        </div>
                        <div className="col-lg-4">
                            <ul className='services-list'>
                                <li>Delicious AND nutritious</li>
                                <li>Veggies in every meal</li>
                                <li>Good source of protein</li>
                                <li>Real, organic ingredients</li>
                                <li>Fresh, never frozen</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="container my-5 text-success">
                    <div className='text-center'>
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>WE’RE PROUD OF WHAT’S INSIDE</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center my-3">
                            <div className="col-lg-5">
                                <p>WE USE ONLY THE BEST INGREDIENTS. THAT’S WHY EVERY ITEM ON THE MENU IS MORE DELICIOUS THAN THE NEXT.</p>
                            </div>
                        </div>

                        <img className='w-100 mb-5' src="https://www.nurturelife.com/wp-content/uploads/2021/05/Whats-inside-Our-Meals-Desktop2-01.svg" alt="" />

                        <div className="row my-5 align-items-center justify-content-around">
                            <div className="col-lg-6">
                                <img className='w-100' src="https://www.nurturelife.com/wp-content/uploads/2021/01/our-story-1-NEW-1024x585.jpg" alt="" />
                                <p className='my-5 text-start'>We are busy parents, just like you, who care tremendously about what our kids eat, but rarely have the time to do all the planning, shopping, prepping and cooking ourselves. We created Yummie Nepal to give parents a new way to feed their families—fresh, delicious, nutritionally balanced meals and wholesome anytime snacks that never compromise on taste and always deliver on convenience.</p>
                            </div>
                            <div className="col-lg-4">
                                <h1 className='my-5'>OUR STORY IS YOUR STORY</h1>
                                <img className='w-100' src="https://www.nurturelife.com/wp-content/uploads/2021/01/our-story-2-NEW-V3-1024x685.jpg" alt="" />
                            </div>
                        </div>

                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8">
                                <h1>REAL FOOD, REAL FAMILIES!</h1>
                                <p>BECAUSE IT’S #WHATKIDSDESERVE. SEE HOW FAMILIES ACROSS THE U.S. ARE LOVING MEALTIME WITH @NURTURELIFE.</p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <h1>FAQS</h1>
                                <p>DONT SEE YOUR QUESTION ANSWERED HERE? VISIT OUR FAQS PAGE FOR MORE!</p>
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div className="accordion accordion-flush " id="accordionFlushExample">
                                            <div className="accordion" id="faqAccordion">
                                                {faqData.map((faqData, index) => (
                                                    <div className="accordion-item" key={index}>
                                                        <h2 className="accordion-header">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target={`#collapse-${index}`}
                                                                aria-expanded="false"
                                                                aria-controls={`collapse-${index}`}
                                                            >
                                                                {faqData.question}
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id={`collapse-${index}`}
                                                            className="accordion-collapse collapse"
                                                            data-bs-parent="#faqAccordion"
                                                        >
                                                            <div className="accordion-body">
                                                                <p>{faqData.answer}</p>
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
                </div>
            </section>
        </>
    )
}

export default Home
