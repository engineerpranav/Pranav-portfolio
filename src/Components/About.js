import React from 'react'


import { Box } from "@chakra-ui/react"
import { Text } from '@chakra-ui/react';
import "./about.css"

function About() {
    return (
        <Box display="flex" flexDirection="column" gap="70px"  id="about" >

            <Box display="flex" gap="10px" justifyContent="center" margin="75px 0px 30px 0px" >

                <Text fontSize="40px" fontWeight="700">All</Text><Text fontSize="40px" fontWeight="700" color="#F40A34">About</Text><Text fontSize="40px" fontWeight="700">Me</Text>



            </Box>

            <Box display="flex"  width="80%" margin="auto" fontFamily="Georgia" className="about_text"  >
                <Box marginTop="-60px" width="45%"><img style={{ width: "100%" }} data-aos="zoom-in" data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966" alt="one" /></Box>
                <Box w="40%" fontSize="19px" fontWeight="545" data-aos="zoom-in" data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">

                    <ul style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

                        <li>Hello! My name is Pranav Purohit I Enjoy Creating things that Live on Internet.</li>

                        <li>I'm Passionate Developer,With Good Problem Solving Skills and Communication Skills and i am able to write  Clean , Efficient and Optimised Code.</li>
                        <li>I have hands on Experience on Frontend and Backend Technology and also Good Command on Data Structures and Algorithm.</li>
                    </ul>

                </Box>


            </Box>

        </Box>
    )
}

export default About