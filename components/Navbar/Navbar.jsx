import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useOutsideClick,
  useDisclosure,
  useColorModeValue,
  Stack, Menu, MenuButton, MenuList, MenuItem
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from 'next/router'
import en from './translation/en'
import it from './translation/it'
import ru from './translation/ru'
import MySelect from '../MySelect/MySelect'
import { useState, useRef } from "react";
import { useUser } from '../../context/UserContext';


const NavLink = ({ children, path, router, isOpen, onClose }) => {

  const handleClick = (e) => {
    if (isOpen) {
      e.preventDefault();
      router.push(path);
      onClose();
    }
  };
  return (
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      <Link href={path} onClick={handleClick}>
        {children}
      </Link>
    </Box>
  );
}


const locales = [
  {
    label: '🇬🇧 ENG',
    value: 'en'
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


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()
  const { locale } = router;
  const t = selectLocale(locale)
  const [localeVal, setLocaleVal] = useState(locale)
  const { isAdmin, logout } = useUser();

  const ref = useRef();
  const buttonRef = useRef();
  useOutsideClick({
    ref: ref,
    handler: (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target) && isOpen) {
        buttonRef.current.click();
      }
    }
  });

  const setNewLocale = (newValue) => {
    setLocaleVal(newValue)
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newValue })
  }
  const Links = [
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
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} width='100%' zIndex={3} position='fixed'>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} >
        <IconButton
          ref={buttonRef}
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box fontSize='xl' fontWeight='semibold'>HarmonyHome</Box>
        <HStack spacing={8} alignItems={"center"}
          justifyContent={"space-between"}>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            {Links.map(({ name, path }) => (
              <NavLink key={path} path={path} isOpen={isOpen} router={router} onClose={onClose}>
                {name}
              </NavLink>
            ))}
            {/* Admin Dropdown */}
            {isAdmin && (
              <Menu>
                <MenuButton as={Button} onClick={() => { }}>
                  Admin
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => router.push("/newestate")}>New</MenuItem>
                  <MenuItem onClick={async () => {
                    await logout();
                    router.push("/");
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
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
        <Box ref={ref} pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map(({ name, path }) => (
              <NavLink key={path} path={path} isOpen={isOpen} router={router} onClose={onClose}>
                {name}
              </NavLink>
            ))
            }
            {/* Admin Dropdown */}
            {isAdmin && (
              <Menu>
                <MenuButton as={Button} textAlign={{ base: 'start' }} onClick={() => { }}>
                  Admin
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => router.push("/newestate")}>New</MenuItem>
                  <MenuItem onClick={async () => {
                    await logout();
                    router.push("/");
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )}
          </Stack>
        </Box>
      ) : null}
    </Box>

    // </div>
  );
}