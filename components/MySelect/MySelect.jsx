import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react"

const MySelect = (props) => {
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                    {props.locales.find(x => x.value === props.value)?.label || props.placeholder || '🌐'}

                </MenuButton>
                <MenuList minW="0" >
                    {props.locales.map((item,key) => (
                        <MenuItem key={key} onClick={() => props.onChange(item.value)}>
                            {item.label}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </>
    )
}

export default MySelect;