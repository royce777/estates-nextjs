import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react"

const MySelect = (props) => {
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                    {props.placeholder || 'Choose...'}

                </MenuButton>
                <MenuList >
                    {props.locales.map((item,key) => (
                        <MenuItem key={key} onClick={() => props.onChange(item.value)}>
                            {console.log(item.label)}
                            {item.label}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </>
    )
}

export default MySelect;