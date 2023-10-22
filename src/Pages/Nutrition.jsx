import React from 'react'
import "./nutrition.scss"
function Nutrition() {
    return (
        <>
            <section>
                <div className="container my-5">
                    <h1 className='title text-center'>A NEW NUTRITION STANDARD</h1>

                    <div className="row my-5 justify-content-between">
                        <div className="col-lg-6">
                            <img className='w-100 img-fluid' src="https://www.nurturelife.com/wp-content/uploads/2020/12/header-1024x665.jpg" alt="" />
                        </div>
                        <div className="col-lg-5">
                            <h1>Our Food Philosophy</h1>
                            <ol className="list-group list-group-flush list-group-numbered">
                                <li className="list-group-item">DELICIOUS AND NUTRITIOUS</li>
                                <li className="list-group-item">VEGGIES IN EVERY MEAL</li>
                                <li className="list-group-item">GOOD SOURCE OF PROTEIN</li>
                                <li className="list-group-item">REAL, ORGANIC INGREDIENTS</li>
                                <li className="list-group-item">FRESH, NEVER FROZEN</li>
                            </ol>
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className=' title title1'>BIG NUTRITION FOR LITTLE ONES</h1>
                        <p className='my-3'>No more unhealthy kids food. We pack our meals and snacks with the <br /> nutrients your little ones need as they grow.</p>
                    </div>

                    <div>
                        <div>
                            <ul className="nav nav-pills nav-pills-nutrition mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Finger Foods</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Kids Meals</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Snacks</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Smoothies</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                    <div className="row justify-content-center gap-5 my-5">
                                        <div className="col-lg-4">
                                            <img className='w-100 img-fluid' src="https://www.nurturelife.com/wp-content/uploads/2021/05/finger-foods-desktop.jpg" alt="" />
                                        </div>
                                        <div className="col-lg-4">
                                            <h4>Finger Foods</h4>
                                            <p>START YOUR BABY’S SELF-FEEDING ADVENTURE</p>
                                            <p>Big enough to pick up, small enough to prevent choking, and soft enough to mash, our Finger Foods give your baby an easy, nutritionally balanced introduction as they develop feeding independence.</p>
                                            <button className='btn btn-warning text-success fw-bold'>View Meals</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                    <div className="row justify-content-center gap-5 my-5">
                                        <div className="col-lg-4">
                                            <img className='w-100 img-fluid' src="https://www.nurturelife.com/wp-content/uploads/2021/05/kids-meals-desktop.jpg" alt="" />
                                        </div>
                                        <div className="col-lg-4">
                                            <h4>Kids Meals</h4>
                                            <p>LOVED BY THOUSANDS OF PICKY EATERS. FULL OF HIDDEN VEGGIES.</p>
                                            <p>At an age when getting them to eat a balanced meal isn’t always easy, our Kids Meals offer kid-friendly options with veggies, plenty of protein and all the nutrients they need as they grow.</p>
                                            <button className='btn btn-warning text-success fw-bold'>View Meals</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                    <div className="row justify-content-center gap-5 my-5">
                                        <div className="col-lg-4">
                                            <img className='w-100 img-fluid' src="https://www.nurturelife.com/wp-content/uploads/2021/05/kids-meals-desktop.jpg" alt="" />
                                        </div>
                                        <div className="col-lg-4">
                                            <h4>Kids Meals</h4>
                                            <p>LOVED BY THOUSANDS OF PICKY EATERS. FULL OF HIDDEN VEGGIES.</p>
                                            <p>At an age when getting them to eat a balanced meal isn’t always easy, our Kids Meals offer kid-friendly options with veggies, plenty of protein and all the nutrients they need as they grow.</p>
                                            <button className='btn btn-warning text-success fw-bold'>View Meals</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}>
                                    <div className="row justify-content-center gap-5 my-5">
                                        <div className="col-lg-4">
                                            <img className='w-100 img-fluid' src="https://www.nurturelife.com/wp-content/uploads/2021/05/kids-meals-desktop.jpg" alt="" />
                                        </div>
                                        <div className="col-lg-4">
                                            <h4>Kids Meals</h4>
                                            <p>LOVED BY THOUSANDS OF PICKY EATERS. FULL OF HIDDEN VEGGIES.</p>
                                            <p>At an age when getting them to eat a balanced meal isn’t always easy, our Kids Meals offer kid-friendly options with veggies, plenty of protein and all the nutrients they need as they grow.</p>
                                            <button className='btn btn-warning text-success fw-bold'>View Meals</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="container my-5">
                        <div className="row">
                            <div className="col-lg-7">
                                <h1>OUR NUTRITION FORMULA</h1>
                                <h5>EVERY MEAL DESIGNED BY DIETITIANS</h5>
                                <p>When we say “high in protein” or “veggie-filled,” it’s not thrown around casually. It’s perfected by our dietitians to ensure every plate packs a nutritious punch. See our Complete Guide to Yummy Nepal Nutrition for an in-depth look at what goes into each meal.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="box position-relative my-5">
                                    <img className='w-75' src="https://www.nurturelife.com/wp-content/uploads/2023/03/Alfredo-Bow-Ties-with-Turkey-Meatballs-Broccoli-1.png" alt="" />
                                    <ul className='position-absolute half-img-cont'>
                                        <li><span className='fw-bold fs-5'>380</span> <br />Total Calories</li>
                                        <li><span className='fw-bold fs-5'>4</span> <br /> #of Veggies</li>
                                        <li><span className='fw-bold fs-5'>2</span> <br />Veggie Servings</li>
                                        <li><span className='fw-bold fs-5'>21g</span> <br /> Protien</li>
                                    </ul>
                                </div>
                                <div className='nutrition-meals text-center'>
                                    <h4 >Alfredo Bow Ties</h4>
                                    <p>with Turkey Meatballs & Broccoli</p>
                                    <button className='btn btn-warning text-success fw-bold'>View Meal</button>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box position-relative my-5">
                                    <img className='w-75' src="https://www.nurturelife.com/wp-content/uploads/2023/03/Mac-Cheese-with-Butternut-Squash.png" alt="" />
                                    <ul className='position-absolute half-img-cont'>
                                        <li><span className='fw-bold fs-5'>380</span> <br />Total Calories</li>
                                        <li><span className='fw-bold fs-5'>4</span> <br /> #of Veggies</li>
                                        <li><span className='fw-bold fs-5'>2</span> <br />Veggie Servings</li>
                                        <li><span className='fw-bold fs-5'>21g</span> <br /> Protien</li>
                                    </ul>
                                </div>
                                <div className='nutrition-meals text-center'>
                                    <h4 >Mac & Cheese with</h4>
                                    <p>Hidden Butternut Squash</p>
                                    <button className='btn btn-warning text-success fw-bold'>View Meal</button>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box position-relative my-5">
                                    <img className='w-75' src="https://www.nurturelife.com/wp-content/uploads/2023/03/Chicken-Bites-Edit-1.png" alt="" />
                                    <ul className='position-absolute half-img-cont'>
                                        <li><span className='fw-bold fs-5'>380</span> <br />Total Calories</li>
                                        <li><span className='fw-bold fs-5'>4</span> <br /> #of Veggies</li>
                                        <li><span className='fw-bold fs-5'>2</span> <br />Veggie Servings</li>
                                        <li><span className='fw-bold fs-5'>21g</span> <br /> Protien</li>
                                    </ul>
                                </div>
                                <div className='nutrition-meals text-center'>
                                    <h4 >Chicken Bites</h4>
                                    <p>with Super Veggies</p>
                                    <button className='btn btn-warning text-success fw-bold'>View Meal</button>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 align-items-center">
                            <div className="col-lg-6">
                                <div>
                                    <ul className="nav nav-pills nav-pills-nutrition mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-home-tab1" data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home1" aria-selected="true">Sodium</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab1" data-bs-toggle="pill" data-bs-target="#pills-profile1" type="button" role="tab" aria-controls="pills-profile1" aria-selected="false">Sugar</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1" tabIndex={0}>
                                            <div className="row justify-content-center gap-5 my-5">
                                                <div className="col-lg-10">
                                                    <img className='w-100 img-fluid' src="https://www.nurturelife.com/wp-content/uploads/2020/12/salt-3.jpg" alt="" />
                                                    <div className="row">
                                                        <div className="col-lg-4 border-end">
                                                            <strong>320 mg</strong>
                                                            <br />
                                                            <strong>Yummy Nepal</strong>
                                                            <p className='ss-content'>Average sodium in a Yummy Nepal Kid Meal</p>
                                                        </div>
                                                        <div className="col-lg-4 border-end">
                                                            <strong>741 g</strong><br />
                                                            <strong>RECOMMENDED MAX</strong>
                                                            <p className='ss-content'>U.S. Dietary Guideline recommended max sodium for a kid’s dinner</p>
                                                        </div>
                                                        <div className="col-lg-4 border-end">
                                                            <strong>1,209 g</strong><br />
                                                            <strong>AMERICAN AVG</strong>
                                                            <p className='ss-content'>Average sodium consumed by U.S. kids at dinner</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile-tab1" tabIndex={0}>
                                            <div className="row justify-content-center gap-5 my-5">
                                                <div className="col-lg-12">
                                                    <img className='w-100 img-fluid' src="https://www.nurturelife.com/wp-content/uploads/2020/12/sugar-2.jpg" alt="" />
                                                    <div className="row">
                                                        <div className="col-lg-4 border-end">
                                                            <strong>1 g</strong>
                                                            <br />
                                                            <strong>Yummy Nepal</strong>
                                                            <p className='ss-content'>83% of Yummy Nepal meals have 0 grams of added sugar</p>
                                                        </div>
                                                        <div className="col-lg-4 border-end">
                                                            <strong>25 g</strong><br />
                                                            <strong>RECOMMENDED MAX</strong>
                                                            <p className='ss-content'>U.S. Dietary Guideline recommended max added sugar for kids per day</p>
                                                        </div>
                                                        <div className="col-lg-4 border-end">
                                                            <strong>79 g</strong><br />
                                                            <strong>AMERICAN AVG</strong>
                                                            <p className='ss-content'>Average added sugar consumed by U.S. kids per day</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-1 bg-primary-subtle p-5">
                                <h2>KEEPING SUGAR & SODIUM IN CHECK!</h2>
                                <p>Most kids consume too much sugar and salt. We design our meals to keep these ingredients low while promoting flavor through the natural deliciousness of real, high-quality foods, spices and herbs.</p>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <h1>NO NUTS, NO FUTZ, SOME COCONUTS</h1>
                                <p>MADE IN A 100% NUT FREE, ALLERGY-FRIENDLY FACILITY FOR YOUR PEACE OF MIND</p>
                                <p>Was that a silly rhyme? Yes. But we take allergens very seriously. Our meals are prepared in a state-of-the-art facility free from peanuts and tree nuts (except coconuts).</p>
                                <button className='btn btn-warning text-success fw-bold'>View Meals</button>
                            </div>
                            <div className="col-lg-6">
                                <img className='w-100' src="https://www.nurturelife.com/wp-content/uploads/2020/12/imgn-09.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Nutrition
