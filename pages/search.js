import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

function search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main>
        <section className="p-5">
          <p className="text-xs">
            300+ stays - {range} for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold my-3">Stays in {location}</h1>
          <div className="hidden md:flex flex-inline whitespace-nowrap space-x-4">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className=''>
          {searchResults.map(
            ({ img, location, title, description, star, price, total }) => {
              return (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              );
            }
          )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
