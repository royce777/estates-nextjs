import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

const EstateDetails = ({
  estateDetails: {
    name,
    ref_id,
    area,
    rooms,
    bedrooms,
    bathrooms,
    garden_area,
    beds,
    location,
    energy_class,
    sea_dist,
    listing_type,
    build_year,
    floors,
    price,
    m_rate,
    category,
    description,
    features,
    images,
  },
}) => {
  return (
    <>
      <Box
        paddingRight={{
          base: "40px",
          sm: "50px",
          md: "100px",
          lg: "200px",
          xl: "300px",
        }}
        paddingLeft={{
          base: "40px",
          sm: "50px",
          md: "100px",
          lg: "200px",
          xl: "300px",
        }}
        paddingTop="70px"
      >
        {images.length > 0 && (
          <Carousel infiniteLoop autoPlay showThumbs={true}>
            {images.map((img, index) => (
              <Box key={index} width="1920px" maxHeight="600px">
                {/* <Image src={img.url} height="600px" width="1180px" fit="none" /> */}
                <img src={img.url} width="80vw" height="50vh" />
              </Box>
            ))}
          </Carousel>
        )}
      </Box>
    </>
  );
};

export default EstateDetails;
export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/estates/${id}`);

  return {
    props: {
      estateDetails: data,
    },
  };
}
