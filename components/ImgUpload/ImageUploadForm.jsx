import { SmallCloseIcon } from "@chakra-ui/icons";
import { FormLabel, Flex, Input, Alert, AlertIcon, Button, SimpleGrid, Box, IconButton, Container} from "@chakra-ui/react";
import Image from "next/image";

const ImgUploadForm = ({ onSelectFile, selectedImages, setSelectedImages}) => {
    return (
        <>
        <Flex paddingTop='10' flexDirection='column' justifyContent='center' alignItems='center'>
            <FormLabel cursor='pointer' 
                        border='2px' 
                        margin='0 auto' 
                        padding='2'
                        borderRadius='20px'
                        fontSize='large'> 
                + Add images
                <br/>
                <Input type='file'
                        name='images'
                        onChange={onSelectFile}
                        multiple
                        accept="image/png, image/jpg, image/webp"
                        display='none'
                    />
            </FormLabel>
            <br/>
            {selectedImages.length > 0 &&
                selectedImages.length > 10 ? (
                    <Alert status="error" maxWidth='500px' borderRadius='20px'>
                        <AlertIcon/>
                            The amount of images must be between 0 and 30.
                        </Alert>
                ): (
                    <br/>
                )}

            </Flex>
          {selectedImages &&
          (<SimpleGrid
                minChildWidth="300px"
                spacing={10}
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
                paddingTop='20px'
            >
            {selectedImages.map((image,index) => {
                return (<Box key={index} position='relative' maxWidth='500px' maxHeight='280px' borderRadius='20px' overflow='hidden'>
                            <Image src={image} width='500px' height='280px' layout='responsive' />
                            <Box position='absolute' top='0' right='0'>
                                <IconButton 
                                        icon={<SmallCloseIcon/>} 
                                        colorScheme='red' 
                                        onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}
                                        
                                    />
                            </Box>
                        </Box>
                )})}
        </SimpleGrid> 
          )}
        </>
    )
}

export default ImgUploadForm;