import { Text, Center, Button } from "@chakra-ui/react";
import { useState } from "react";
import CheckBoxForm from "../components/NewEstateForm/CheckBoxForm";
import DescriptionsForm from "../components/NewEstateForm/DescriptionsForm";
import MainPropsForm from "../components/NewEstateForm/MainProps";
import _ from "lodash";
import ImageUpload from "../components/ImgUpload/ImageUpload";

export default function Newestate() {
  const [mainProps, setMainProps] = useState({
    name: "",
    ref_id: "",
    location: "",
    area: -1,
    rooms: -1,
    bedrooms: -1,
    bathrooms: -1,
    garden_area: -1,
    beds: -1,
    energy_class: "A4",
    sea_dist: -1,
    listing_type: "rent",
    build_year: -1,
    floors: -1,
    price: -1,
    m_rate: -1,
    category: "Apartment",
  });

  const handleMainPropsChange = _.debounce(
    (e) => setMainProps({ ...mainProps, [e.target.name]: e.target.value }),
    200
  );
  const [description, setDescription] = useState({
    en: {
      lang: "en",
      desc: "",
    },
    ru: {
      lang: "ru",
      desc: "",
    },
    it: {
      lang: "it",
      desc: "",
    },
  });

  const handleDescriptionsChange = (e) => {
    if (e.target.name === "descr-en") {
      setDescription({
        ...description,
        en: { lang: "en", desc: e.target.value },
      });
    } else if (e.target.name === "descr-it") {
      setDescription({
        ...description,
        it: { lang: "it", desc: e.target.value },
      });
    } else {
      setDescription({
        ...description,
        ru: { lang: "ru", desc: e.target.value },
      });
    }
  };

  const [extraFeatures, setExtraFeatures] = useState({
    pool: false,
    ac: false,
    park: false,
    alarm: false,
    auto_gate: false,
    tv: false,
    internet: false,
    fireplace: false,
    bbq: false,
    gym: false,
    pan_view: false,
    sauna: false,
    garage: false,
    spa: false,
    jacuzzi: false,
    taverna: false,
    video_surv: false,
    domotics: false,
    terrace: false,
    balcony: false,
    veranda: false,
  });

  const handleChecked = (e) => {
    setExtraFeatures({ ...extraFeatures, [e.target.name]: e.target.checked });
  };

  return (
    <>
      <Center>
        <Text fontSize="xl" fontWeight="semibold" paddingTop="70">
          Insert new property.
        </Text>
      </Center>
      <MainPropsForm handleMainPropsChange={handleMainPropsChange} />
      <DescriptionsForm handleDescriptionsChange={handleDescriptionsChange} />
      <CheckBoxForm handleChecked={handleChecked} />
      <ImageUpload />
      <Button
        onClick={() => {
          console.log(mainProps);
          console.log(description);
          console.log(extraFeatures);
        }}
      >
        Print features
      </Button>
    </>
  );
}
