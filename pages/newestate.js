import { Text, Center, Button, useRadio } from "@chakra-ui/react";
import CheckBoxForm from "../components/NewEstateForm/CheckBoxForm";
import DescriptionsForm from "../components/NewEstateForm/DescriptionsForm";
import MainPropsForm from "../components/NewEstateForm/MainProps";
import _ from "lodash";
import ImgUploadForm from "../components/ImgUpload/ImageUploadForm";
import { useState, useEffect } from "react";
import { storage } from "../firebase/index";
import { baseUrl, postApi } from "../utils/fetchApi";

// TODO : Validate forms !!!
export default function Newestate() {

  // logic to handle main properties of an estate
  const [mainProps, setMainProps] = useState({
    name: "",
    ref_id: "",
    location: "Forte dei Marmi",
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
    category: "apartment",
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

  // to handle extra features
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

  const handleChecked = _.debounce((e) => {
    setExtraFeatures({ ...extraFeatures, [e.target.name]: e.target.checked }),
      200;
  });

  //  to handle images
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const onSelectFile = (e) => {
    const files = e.target.files;
    const selectedFilesArray = Array.from(files);
    const imagesWithLocalUrls = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) =>
      previousImages.concat(imagesWithLocalUrls)
    );
    setSelectedFiles((prevFiles) => prevFiles.concat(selectedFilesArray));
  };

  const handleUpload = () => {
    const promises = [];
    selectedFiles.map((image) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      const promise = new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            console.log(error);
            reject(error);
          },
          async () => {
            await storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                setUrls(prevUrls => {
                  return [...prevUrls, url];
                });
                resolve();
              })
              .catch((error) => {
                reject(error);
              });
          }
        );
      });
      promises.push(promise);
    });

    return promises;
  };

  const submitForm = async () => {
    // convert descriptions object into array
    const des = description;
    const descriptions = [];
    descriptions.push(des.en, des.ru, des.it);

    // upload images to firebase
    const promises = handleUpload();
    // convert image urls array to necessary format for submission
    await Promise.all(promises);
    const images = [];
    urls.map((url) => {
      images.push({ url: url });
    });
    mainProps.description = descriptions;
    mainProps.features = extraFeatures;
    mainProps.images = images;
    const response = postApi(`${baseUrl}/estates/0`, mainProps);
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
      <ImgUploadForm
        onSelectFile={onSelectFile}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
      />
      <Center>
        <Button
          onClick={async () => {
            console.log("FINAL");
            await submitForm();
            console.log(mainProps);
          }}
        >
          Submit
        </Button>
      </Center>
    </>
  );
}
