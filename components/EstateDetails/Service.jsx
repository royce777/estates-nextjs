import { Box } from "@chakra-ui/react"


export default function EstateService({serviceName, icon, value}) {
    const Icon = icon
    const string = ''
    if(value) {
        string = serviceName + ": " + value
    }
    else{
        string = serviceName
    }
    return(
         <Box display="flex" justifyContent="center" paddingRight="3">
            <Box paddingRight="2" paddingLeft="1">
              <Icon size="18" />
            </Box>
            {string}
          </Box>
    )
}