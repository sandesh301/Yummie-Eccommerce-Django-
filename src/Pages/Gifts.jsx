const Gifts = () => {
  return (

    <section>

      <div className='container'>
        <h4 className=''>How much do you want to give?</h4>
        <p> Rs.10000 gift card ~ 13 meals</p>
        <input type="number" />


        <form className="user-info">
          <div className="row">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Enter your amount"
              />

            </div>

          </div>
        </form>

        <div className='container'>
          <h4>Who do you want to give it to?</h4>
          <form className="user-info">
            <div className="row">
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  placeholder="First name"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Zip Code"
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Enter your text here"
              ></textarea>
            </div>
          </form>
        </div>

      </div>



    </section>
  )
}

export default Gifts
