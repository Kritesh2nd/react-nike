import ReviewCart from "../components/ReviewCart"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our?&nbsp;
          <span className="text-coral-red">Customers</span>&nbsp;
          Say?
          </h3>
          <p className="info-text m-auto mt-4 max-w-lg text-center">
            Hear genuine stories from our satisfied customers about their exceptional expirence with us.
          </p>
          <div className="mt-24 flex flex-1 justify-evenly items-cenetr max-lg:flex-col gap-14">
            {reviews.map((review) => (
                <ReviewCart
                key={review.customerName} 
                {...review}
                />
            ))}
          </div>
      </div>
    </section>
  )
}

export default CustomerReviews