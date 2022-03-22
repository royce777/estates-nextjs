import {
  Checkbox,
  SimpleGrid,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useState } from "react";

export default function CheckBoxForm({handleChecked}){


    return(
      <CheckboxGroup>
        <SimpleGrid
          minChildWidth="200px"
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
          paddingTop="30px"
        >
          <Checkbox onChange={handleChecked} name="ac">
            A/C
          </Checkbox>
          <Checkbox onChange={handleChecked} name="park">
            Park
          </Checkbox>
          <Checkbox onChange={handleChecked} name="alarm">
            Alarm
          </Checkbox>
          <Checkbox onChange={handleChecked} name="auto_gate">
            Auto Gate
          </Checkbox>
          <Checkbox onChange={handleChecked} name="tv">
            TV
          </Checkbox>
          <Checkbox onChange={handleChecked} name="internet">
            Internet
          </Checkbox>
          <Checkbox onChange={handleChecked} name="fireplace">
            Fireplace
          </Checkbox>
          <Checkbox onChange={handleChecked} name="bbq">
            BBQ
          </Checkbox>
          <Checkbox onChange={handleChecked} name="gym">
            Gym
          </Checkbox>
          <Checkbox onChange={handleChecked} name="pan_view">
            Panoramic view
          </Checkbox>
          <Checkbox onChange={handleChecked} name="sauna">
            Sauna
          </Checkbox>
          <Checkbox onChange={handleChecked} name="garage">
            Garage
          </Checkbox>
          <Checkbox onChange={handleChecked} name="spa">
            Spa
          </Checkbox>
          <Checkbox onChange={handleChecked} name="jacuzzi">
            Jacuzzi
          </Checkbox>
          <Checkbox onChange={handleChecked} name="taverna">
            Tavera
          </Checkbox>
          <Checkbox onChange={handleChecked} name="video_surv">
            Video surveillance
          </Checkbox>
          <Checkbox onChange={handleChecked} name="domotics">
            Domotics
          </Checkbox>
          <Checkbox onChange={handleChecked} name="terrace">
            Terrace
          </Checkbox>
          <Checkbox onChange={handleChecked} name="balcony">
            Balcony
          </Checkbox>
          <Checkbox onChange={handleChecked} name="veranda">
            Veranda
          </Checkbox>
        </SimpleGrid>
      </CheckboxGroup>
    )
}