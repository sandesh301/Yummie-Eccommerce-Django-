import footer from "../assets/images/bg-footer.png"
import "./footer.scss"
function Footer() {
    return (
        <footer className='position-relative'>
            <img className='w-100 h-100 opacity-50' src={footer} alt="" />
            <div className="container">
                <div className="row position-absolute footer-content justify-content-center">
                    <div className="col-lg-4">
                        <h1 className='fw-bold'>Yummie Nepal</h1>
                        <p className='fw-medium'>Growing up. Eating well.</p>
                        <img className='w-75 my-4 ' src="https://www.nurturelife.com/wp-content/uploads/2023/04/new-logo.png" alt="" />
                        <p className='fw-medium'>Get special offers & be the first to hear about new meals & more!</p>
                        <form action="" className='d-flex gap-1 my-4'>
                            <input className='form-control w-100' type="email" placeholder='Enter yor Email' />
                            <button className='btn btn-warning w-50 fw-medium' type="submit">Sign Up!</button>
                        </form>
                    </div>
                    <div className="col-lg-7 ">
                        <div className="row justify-content-between footer-list">
                            <div className="col-lg-5 ">
                                <ul>
                                    <li className='fs-4'>About</li>
                                    <li>Our Story</li>
                                    <li>Our Team</li>
                                    <li>What We Stand For</li>
                                    <li>Careers</li>
                                    <li>Affilates</li>
                                </ul>
                                <ul>
                                    <li className='fs-4'>Food</li>
                                    <li>Nutrition</li>
                                    <li>How It Works</li>
                                    <li>Customer Reviews</li>
                                    <li>Menus</li>
                                </ul>
                            </div>
                            <div className="col-lg-5">
                                <ul>
                                    <li className='fs-4'>KNOWLEDGE</li>
                                    <li>FAQ</li>
                                    <li>Blog</li>
                                    <li>Packaging</li>
                                    <li>Gifts</li>
                                    <li>News</li>
                                </ul>
                                <ul>
                                    <li className='fs-4'>CONTACT US</li>
                                    <li>Contact Us</li>
                                    <li>+919843562718</li>
                                    <li>Support@Yummie.Com</li>
                                    <li>Login</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
