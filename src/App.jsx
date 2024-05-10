import Nav from './components/Nav';
import {Hero, PopularPorducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer} from './sections/index'
// import {Hero} from './sections'

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularPorducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-oale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);
export default App;
// 1:07:40 now finally starting to write code
// 1:26:28 tierd but will continue
// 1:31:58
// 1:38:33 got bored while creating show card
// 1:50:45 popular product is finished and now staring super quality
// 2:02:30 batti gayo while doing super quality
// 2:05:43 SuperQuality is finsihsed now starting services
// 2:11:00 finshed services now starting special offer
// 2:19:05 finished special offer now starting customer review 
// 2:35:23 finished subscribe section now starting footer, footer has lot of things