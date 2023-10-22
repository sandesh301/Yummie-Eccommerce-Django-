
import "./howitworks.scss"
import IMG1 from "../assets/images/choose-your-food.jpg"
import IMG2 from "../assets/images/we-cook-and-deliver.jpg"
import IMG3 from "../assets/images/eat-love-repeat.jpg"

import IMG4 from "../assets/images/balanced-nutrition.jpg"
import IMG5 from "../assets/images/tractor-1.jpg"
import IMG6 from "../assets/images/babygreen-chick.jpg"
import IMG7 from "../assets/images/cauliflower-tree.jpg"
import IMG8 from "../assets/images/Mushroom-Barn.jpg"
import IMG9 from "../assets/images/onion-chicken.jpg"

const HowItWorks = () => {
  return (
    <section>
      <div className="header-section">
        <h1 className="header">How it Works</h1>
        <p className="header-paragraph">
          DELICIOUS KIDS MEALS & SNACKS, DELIVERED
          TO YOUR DOOR.
        </p>
      </div>

      <main>
        <div className="image-container">
          <img src={IMG1} />
          <div className="text-container">
            <h2 className="header-container">
              1. CHOOSE YOUR FOOD
            </h2>
            <p className="header-paragraph">
              Select from a variety of seriously
              delicious, nutritious kids meals,
              snacks and smoothies. Every item on
              the menu is made especially for
              babies, toddlers and kids, with only
              the best ingredients.
            </p>
            <button> View Menus</button>
          </div>
        </div>

        <div className="image-container2">
          <img src={IMG2} />
          <div className="text-container2">
            <h2>2. WE COOK & DELIVER</h2>
            <p>
              Each week your kids’ food is made to
              order with clean ingredients like
              organic veggies, antibiotic-free
              proteins and whole grains. Food is
              delivered fresh in refrigerated
              packaging to your door.
            </p>
            <button>View Menus</button>
          </div>
        </div>

        <div className="image-container">
          <img src={IMG3} />

          <div className="text-container">
            <h2>3. EAT. LOVE. REPEAT.</h2>
            <p>
              With craveable flavors for picky to
              adventurous eaters, your kids will
              love diving into every bite. Meals
              are ready to eat in 1 minute, and
              snacks and smoothies can be grabbed
              right from the fridge! More smiles
              all around, less stress for you.
              Skip, pause or cancel anytime.
            </p>
            <button>View Menus</button>
          </div>
        </div>

        <div className="benefits-header">
          <h2>Benefits</h2>
        </div>

        <div className="benefits-container">
          <div className="benefits-item">
            <img
              className="benefits-logo"
              src={IMG4}
              alt=""
            />
            <h3> Balanced Nutrition</h3>
            <p>
              Designed by dietitians to prioritize
              a balance of proteins, veggies &
              whole grains
            </p>
          </div>
          <div className="benefits-item">
            <img
              className="benefits-logo"
              src={IMG5}
              alt=""
            />
            <h3> Balanced Nutrition</h3>
            <p>
              Designed by dietitians to prioritize
              a balance of proteins, veggies &
              whole grains
            </p>
          </div>
          <div className="benefits-item">
            <img
              className="benefits-logo"
              src={IMG9}
              alt=""
            />
            <h3> Balanced Nutrition</h3>
            <p>
              Designed by dietitians to prioritize
              a balance of proteins, veggies &
              whole grains
            </p>
          </div>
          <div className="benefits-item">
            <img
              className="benefits-logo"
              src={IMG6}
              alt=""
            />
            <h3> Balanced Nutrition</h3>
            <p>
              Designed by dietitians to prioritize
              a balance of proteins, veggies &
              whole grains
            </p>
          </div>
          <div className="benefits-item">
            <img
              className="benefits-logo"
              src={IMG7}
              alt=""
            />
            <h3> Balanced Nutrition</h3>
            <p>
              Designed by dietitians to prioritize
              a balance of proteins, veggies &
              whole grains
            </p>
          </div>
          <div className="benefits-item">
            <img
              className="benefits-logo"
              src={IMG8}
              alt=""
            />
            <h3> Balanced Nutrition</h3>
            <p>
              Designed by dietitians to prioritize
              a balance of proteins, veggies &
              whole grains
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="faq-header">
              <h1>FAQS</h1>
            </div>
            <div className="row">
              <div className="col-lg-6 ">
                <div
                  className="accordion accordion-flush "
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What makes Nurture Life
                        different?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Feeding your kid is
                          hard. You have to think
                          about whether they’ll
                          like it, how long it’ll
                          take you to make it, is
                          it nutritious, do you
                          have the ingredients,
                          have you already fed
                          them this same meal 14
                          times this month. And
                          the list goes ON.
                          Yummie Nepal is the only
                          baby and kids meal
                          delivery service that
                          helps you tackle every
                          single one of your
                          mealtime needs.
                        </p>

                        <p>
                          From our veggieful meals
                          to our protein-packed
                          snacks and fresh
                          superfood smoothies, we
                          prioritize balanced
                          nutrition while
                          capturing the flavors
                          that babies, toddlers
                          and kids actually want
                          to eat. Our flexible
                          ordering system makes it
                          easy to choose food that
                          fits your family’s
                          ever-changing
                          schedule—and so does the
                          fact that everything can
                          be ready to eat in 1
                          minute or less.
                        </p>

                        <p>
                          We’re here for you as
                          your baby learns to
                          self-feed. We’re here
                          for your toddler’s
                          journey into more
                          variety and bigger
                          bites. We’re here for
                          your kid’s ongoing
                          healthy eating habits.
                          And we’re here for every
                          time of the day.
                          Breakfast, lunch, dinner
                          and snack time, we’ve
                          got you covered.
                        </p>
                        <p>
                          Flexible, flavor-focused
                          and absolutely
                          uncompromising on
                          nutrition. That’s
                          Nurture Life.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Who is Yummie Nepal for?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yummie Nepal is for busy
                          parents who want more
                          time in their full (and
                          ever fuller!) daily
                          lives—without having to
                          make sacrifices about
                          what they’re feeding
                          their kids. We take the
                          stress out of meal
                          preparation by providing
                          healthy, ready-to-eat
                          meals that babies,
                          toddlers and kids
                          actually want to eat. We
                          also fill those snack
                          time gaps with
                          protein-packed Mighty
                          Bites and delicious
                          Superfood Smoothies
                          packed with three
                          servings of fruits and
                          veggies.
                        </p>
                        <p>
                          Our delicious baby and
                          kids food is freshly
                          made for all the little
                          ones in your home. From
                          babies who are just
                          learning to grab at the
                          high chair tray to
                          active toddlers and kids
                          who need a healthy,
                          balanced meal to fuel
                          them throughout the day,
                          Yummie Nepal is a palate
                          pleaser. Even picky
                          eaters can find a
                          favorite on our kids
                          meal delivery menu!
                        </p>
                        <p>
                          We deliver meals, snacks
                          and smoothies your
                          family will love, and
                          you get time back in
                          your busy life—exactly
                          what every parent needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        How does Nurture Life
                        work?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yummie Nepal is a
                          flexible, weekly meal
                          subscription service
                          that makes and delivers
                          delicious, nutritious,
                          premade meals, snacks
                          and smoothies for
                          babies, toddlers and
                          kids. You can skip a
                          week, pause or cancel at
                          any time! Create your
                          first order by choosing
                          a plan and selecting
                          items from our menu. We
                          start at a 6 item plan,
                          but you can upgrade to
                          9, 12 or 15 meal plans
                          to receive discount
                          benefits up to $15 off
                          your entire order.
                        </p>
                        <p>
                          Once you’ve ordered, we
                          prepare your food and
                          deliver it fresh,
                          straight to your door,
                          in refrigerated
                          packaging. Our meals and
                          snacks stay fresh in the
                          refrigerator for a week
                          after they arrive, and
                          smoothies stay fresh for
                          a minimum of two weeks.
                          All items have use by
                          dates on the packaging!
                        </p>
                        <p>
                          When your kids are ready
                          to eat, simply pop a
                          meal into the microwave
                          and it’ll be ready in 1
                          minute, or transfer it
                          into an oven-safe dish
                          and heat it in the oven.
                          Our snacks and smoothies
                          can be enjoyed straight
                          from the fridge—perfect
                          for any on-the-go
                          situation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        What are Nurture Life’s
                        nutritional standards?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          All of our meals, snacks
                          and smoothies are
                          designed by registered
                          dietitians, ensuring we
                          always meet
                          exceptionally high
                          nutrition standards and
                          follow our food
                          philosophy: - Delicious
                          AND nutritious - Veggies
                          in every meal - Good
                          source of protein -
                          Real, organic
                          ingredients - Fresh,
                          never frozen
                        </p>
                        <p>
                          You can feel good
                          knowing we also have
                          strict standards for
                          what DOESN’T go into our
                          meals: - No trans fat -
                          No high fructose corn
                          syrup - No artificial
                          colors or flavors - No
                          nitrates
                        </p>
                        <p>
                          Plus, we keep sugar and
                          salt low so your kid can
                          enjoy the natural
                          deliciousness of our
                          real, clean ingredients.
                          With every item we put
                          on the Nurture Life
                          menu, we’re raising the
                          standard for what goes
                          on your kids’ plates!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Is Yummie Nepal picky
                        eater-friendly?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes! We know that picky
                          eating is an obstacle to
                          healthy eating, so we’ve
                          made picky
                          eater-friendly meals and
                          snacks that still
                          maintain our high
                          nutritional standards.
                        </p>
                        <p>
                          To find the best food
                          for your picky eater,
                          use the filters on our
                          menu and look for the
                          Picky Eater Fav banner.
                          You’ll find a variety of
                          deliciously balanced kid
                          favorites, including Mac
                          & Cheese with Hidden
                          Butternut Squash and
                          Chicken Meatballs with
                          Spiral Pasta & Veggies.
                          Many of these options
                          smoothly blend veggies
                          right into the sauce so
                          your kid won’t even
                          notice the veggies are
                          there!
                        </p>
                        <p>
                          Yummie Nepal is also
                          here to help your picky
                          eater become not-so
                          picky! Our menu features
                          meals that can help
                          expose picky eaters to
                          new colors, textures and
                          tastes. We recommend
                          gradually incorporating
                          meals from outside of
                          our Picky Eater
                          Favorites to familiarize
                          your child with a wider
                          variety of flavors.
                          Remember that it can
                          take 9–15 tries for kids
                          to accept a new food, so
                          stick with it! You’re
                          doing the right thing,
                          and patience does pay
                          off.
                        </p>
                        <p>
                          Whether you order our
                          kids meal delivery or
                          not, we also offer a ton
                          of picky eater resources
                          for you to draw from.
                          When you feel like you
                          just can’t handle
                          another “no” at the
                          table, check out our
                          helpful resources from
                          experts on overcoming
                          picky eating together or
                          contact us at
                          support@nurturelife.com
                          for help from one of our
                          registered dietitians!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        What makes Nurture Life
                        different?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body text-start">
                        <p>
                          Feeding your kid is
                          hard. You have to think
                          about whether they’ll
                          like it, how long it’ll
                          take you to make it, is
                          it nutritious, do you
                          have the ingredients,
                          have you already fed
                          them this same meal 14
                          times this month. And
                          the list goes ON.
                          Yummie Nepal is the only
                          baby and kids meal
                          delivery service that
                          helps you tackle every
                          single one of your
                          mealtime needs.
                        </p>

                        <p>
                          From our veggieful meals
                          to our protein-packed
                          snacks and fresh
                          superfood smoothies, we
                          prioritize balanced
                          nutrition while
                          capturing the flavors
                          that babies, toddlers
                          and kids actually want
                          to eat. Our flexible
                          ordering system makes it
                          easy to choose food that
                          fits your family’s
                          ever-changing
                          schedule—and so does the
                          fact that everything can
                          be ready to eat in 1
                          minute or less.
                        </p>

                        <p>
                          We’re here for you as
                          your baby learns to
                          self-feed. We’re here
                          for your toddler’s
                          journey into more
                          variety and bigger
                          bites. We’re here for
                          your kid’s ongoing
                          healthy eating habits.
                          And we’re here for every
                          time of the day.
                          Breakfast, lunch, dinner
                          and snack time, we’ve
                          got you covered.
                        </p>
                        <p>
                          Flexible, flavor-focused
                          and absolutely
                          uncompromising on
                          nutrition. That’s
                          Nurture Life.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSeven"
                        aria-expanded="false"
                        aria-controls="flush-collapseSeven"
                      >
                        Who is Yummie Nepal for?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSeven"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yummie Nepal is for busy
                          parents who want more
                          time in their full (and
                          ever fuller!) daily
                          lives—without having to
                          make sacrifices about
                          what they’re feeding
                          their kids. We take the
                          stress out of meal
                          preparation by providing
                          healthy, ready-to-eat
                          meals that babies,
                          toddlers and kids
                          actually want to eat. We
                          also fill those snack
                          time gaps with
                          protein-packed Mighty
                          Bites and delicious
                          Superfood Smoothies
                          packed with three
                          servings of fruits and
                          veggies.
                        </p>
                        <p>
                          Our delicious baby and
                          kids food is freshly
                          made for all the little
                          ones in your home. From
                          babies who are just
                          learning to grab at the
                          high chair tray to
                          active toddlers and kids
                          who need a healthy,
                          balanced meal to fuel
                          them throughout the day,
                          Yummie Nepal is a palate
                          pleaser. Even picky
                          eaters can find a
                          favorite on our kids
                          meal delivery menu!
                        </p>
                        <p>
                          We deliver meals, snacks
                          and smoothies your
                          family will love, and
                          you get time back in
                          your busy life—exactly
                          what every parent needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseEight"
                        aria-expanded="false"
                        aria-controls="flush-collapseEight"
                      >
                        How does Nurture Life
                        work?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseEight"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yummie Nepal is a
                          flexible, weekly meal
                          subscription service
                          that makes and delivers
                          delicious, nutritious,
                          premade meals, snacks
                          and smoothies for
                          babies, toddlers and
                          kids. You can skip a
                          week, pause or cancel at
                          any time! Create your
                          first order by choosing
                          a plan and selecting
                          items from our menu. We
                          start at a 6 item plan,
                          but you can upgrade to
                          9, 12 or 15 meal plans
                          to receive discount
                          benefits up to $15 off
                          your entire order.
                        </p>
                        <p>
                          Once you’ve ordered, we
                          prepare your food and
                          deliver it fresh,
                          straight to your door,
                          in refrigerated
                          packaging. Our meals and
                          snacks stay fresh in the
                          refrigerator for a week
                          after they arrive, and
                          smoothies stay fresh for
                          a minimum of two weeks.
                          All items have use by
                          dates on the packaging!
                        </p>
                        <p>
                          When your kids are ready
                          to eat, simply pop a
                          meal into the microwave
                          and it’ll be ready in 1
                          minute, or transfer it
                          into an oven-safe dish
                          and heat it in the oven.
                          Our snacks and smoothies
                          can be enjoyed straight
                          from the fridge—perfect
                          for any on-the-go
                          situation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseNine"
                        aria-expanded="false"
                        aria-controls="flush-collapseNine"
                      >
                        What are Nurture Life’s
                        nutritional standards?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseNine"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          All of our meals, snacks
                          and smoothies are
                          designed by registered
                          dietitians, ensuring we
                          always meet
                          exceptionally high
                          nutrition standards and
                          follow our food
                          philosophy: - Delicious
                          AND nutritious - Veggies
                          in every meal - Good
                          source of protein -
                          Real, organic
                          ingredients - Fresh,
                          never frozen
                        </p>
                        <p>
                          You can feel good
                          knowing we also have
                          strict standards for
                          what DOESN’T go into our
                          meals: - No trans fat -
                          No high fructose corn
                          syrup - No artificial
                          colors or flavors - No
                          nitrates
                        </p>
                        <p>
                          Plus, we keep sugar and
                          salt low so your kid can
                          enjoy the natural
                          deliciousness of our
                          real, clean ingredients.
                          With every item we put
                          on the Nurture Life
                          menu, we’re raising the
                          standard for what goes
                          on your kids’ plates!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTen"
                        aria-expanded="false"
                        aria-controls="flush-collapseTen"
                      >
                        Is Yummie Nepal picky
                        eater-friendly?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes! We know that picky
                          eating is an obstacle to
                          healthy eating, so we’ve
                          made picky
                          eater-friendly meals and
                          snacks that still
                          maintain our high
                          nutritional standards.
                        </p>
                        <p>
                          To find the best food
                          for your picky eater,
                          use the filters on our
                          menu and look for the
                          Picky Eater Fav banner.
                          You’ll find a variety of
                          deliciously balanced kid
                          favorites, including Mac
                          & Cheese with Hidden
                          Butternut Squash and
                          Chicken Meatballs with
                          Spiral Pasta & Veggies.
                          Many of these options
                          smoothly blend veggies
                          right into the sauce so
                          your kid won’t even
                          notice the veggies are
                          there!
                        </p>
                        <p>
                          Yummie Nepal is also
                          here to help your picky
                          eater become not-so
                          picky! Our menu features
                          meals that can help
                          expose picky eaters to
                          new colors, textures and
                          tastes. We recommend
                          gradually incorporating
                          meals from outside of
                          our Picky Eater
                          Favorites to familiarize
                          your child with a wider
                          variety of flavors.
                          Remember that it can
                          take 9–15 tries for kids
                          to accept a new food, so
                          stick with it! You’re
                          doing the right thing,
                          and patience does pay
                          off.
                        </p>
                        <p>
                          Whether you order our
                          kids meal delivery or
                          not, we also offer a ton
                          of picky eater resources
                          for you to draw from.
                          When you feel like you
                          just can’t handle
                          another “no” at the
                          table, check out our
                          helpful resources from
                          experts on overcoming
                          picky eating together or
                          contact us at
                          support@nurturelife.com
                          for help from one of our
                          registered dietitians!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default HowItWorks
