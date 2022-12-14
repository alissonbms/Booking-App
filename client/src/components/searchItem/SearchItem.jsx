import { useNavigate } from "react-router-dom";

//Styles
import "./searchItem.styles.js";
import {
  Si,
  SiCheckButton,
  SiDesc,
  SiDetails,
  SiDetailsTexts,
  SiDistance,
  SiPrice,
  SiRating,
  SiSubtitle,
  SiTaxiOp,
  SiTitle,
} from "./searchItem.styles.js";

const SearchItem = ({ property }) => {
  const navigate = useNavigate();

  return (
    <Si>
      <img src={property.photos[0]} />
      <SiDesc>
        <SiTitle>{property.name}</SiTitle>
        <SiDistance>{property.distance} from center</SiDistance>
        <span>Free airport taxi</span>
        <SiSubtitle>{property.headline}</SiSubtitle>
      </SiDesc>
      <SiDetails>
        {property.rating && (
          <SiRating>
            <span>{property.rating <= 7 ? "Regular" : "Excellent"}</span>
            <button>{property.rating}.0</button>
          </SiRating>
        )}
        <SiDetailsTexts>
          <SiPrice>${property.cheapestPrice}</SiPrice>
          <SiTaxiOp>Includes taxes and fees</SiTaxiOp>
          <SiCheckButton
            onClick={() =>
              navigate(`/property/${property._id}`, {
                state: {
                  propertyName: property.name,
                  propertyPhoto: property.photos[0],
                },
              })
            }
          >
            See availability
          </SiCheckButton>
        </SiDetailsTexts>
      </SiDetails>
    </Si>
  );
};

export default SearchItem;
