import NavComponent from "../../components/nav/NavComponent";

import { MdLocationOn } from "react-icons/md";
import {
  // BookNow,
  PropertyAddress,
  PropertyContainer,
  PropertyDetails,
  PropertyDetailsPrice,
  PropertyDetailsText,
  PropertyImages,
  PropertyTitle,
  PropertyWrapper,
} from "./property.styles";

const Property = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  return (
    <>
      <NavComponent />
      <PropertyContainer>
        <PropertyWrapper>
          <PropertyTitle>Wenge House</PropertyTitle>
          <PropertyAddress>
            <MdLocationOn />
            <span>Elton St 125 New york</span>
          </PropertyAddress>
          <PropertyImages>
            <div>
              <img
                src="https://images.unsplash.com/photo-1602081115720-72e5b0a254b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1602081115720-72e5b0a254b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/flagged/photo-1555445777-353c304935be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80"
                alt=""
              />
            </div>
          </PropertyImages>
          <PropertyDetails>
            <PropertyDetailsText>
              <PropertyTitle>Stay in the heart of City</PropertyTitle>
              <p>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </PropertyDetailsText>

            <PropertyDetailsPrice>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </PropertyDetailsPrice>
          </PropertyDetails>
        </PropertyWrapper>

        {/* <HotelWrapper>
          <BookNow>Reserve or Book Now!</BookNow>
          <HotelTitle>Grand Hotel</HotelTitle>
          <HotelAddress>
            <MdLocationOn />
            <span>Elton St 125 New york</span>
          </HotelAddress>
          <HotelDistance>Excellent location - 500m from center</HotelDistance>
          <HotelPriceHighlight>
            Book a stay over $114 at this property and get a free airport taxi
          </HotelPriceHighlight>
          <HotelImages>
            {photos.map((photo, i) => (
              <HotelImgWrapper>
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                  // onClick={() => handleOpen(i)}
                />
              </HotelImgWrapper>
            ))}
          </HotelImages>
          <HotelDetails>
            <HotelDetailsText>
              <HotelTitle>Stay in the heart of City</HotelTitle>
              <p>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </HotelDetailsText>

            <HotelDetailsPrice>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </HotelDetailsPrice>
          </HotelDetails>
        </HotelWrapper> */}
        {/* <FooterComponent /> */}
      </PropertyContainer>
    </>
  );
};

export default Property;
