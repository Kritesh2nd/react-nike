
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>


      <div className="flex flex-1 flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red inline-block mt-3'>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis nulla temporibus est quasi esse veritatis in animi inventore at delectus quaerat consequatur, voluptas commodi?
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, dolorum.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label='View details'/>
          <Button label='Learn more' backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer