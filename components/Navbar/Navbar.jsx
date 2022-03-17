import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Link from "next/link";
import {useRouter} from 'next/router'
import en from './translation/en'
import it from './translation/it'
import ru from './translation/ru'
import MySelect from '../MySelect/MySelect'
import { useState } from "react";


const NavLink = ({ children, path }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

const locales = [
  {
    label: '🇬🇧 ENG',
    value : 'en'
  },
  {
    label: '🇮🇹 ITA',
    value: 'it'
  },
  {
    label: '🇷🇺 RUS',
    value: 'ru'
  }
]

const selectLocale = (locale) => {
  if (locale === 'it') return it;
  if (locale === 'ru') return ru;
  else return en;
}

export default function Navbar(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()
  const {locale} = router;
  const t = selectLocale(locale)
  const [localeVal, setLocaleVal] = useState(locale)

  const setNewLocale = (newValue) => {
    setLocaleVal(newValue)
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newValue })
  }
  const Links =  [
        {
          name: t.home,
          path: "/",
        },
        {
          name: t.search,
          path: "/search",
        },
        {
          name: t.fdm,
          path: "/fdm"
        },
        {
          name: t.contact,
          path: "/contact",
        },
  ];
  return (
    // <div className={navStyles.mobileNav}>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} width='100%' zIndex={1} position='fixed'>  
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box fontSize='xl' fontWeight='semibold'>Realtor</Box>
          <HStack spacing={8} alignItems={"center"}
                  justifyContent={"space-between"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}            
            >
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Action
            </Button>
            <MySelect locales={locales} 
                      value={localeVal}
                      onChange={(newValue) => setNewLocale(newValue)}
            />
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    // </div>
  );
}