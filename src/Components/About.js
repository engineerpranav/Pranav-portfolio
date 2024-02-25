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
                <Box marginTop="-60px" width="45%"><img style={{ width: "100%" }}  src="https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580611624-TE64QGKRJG8SWAIUS7NS/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI6FXy8c9PWtBlqAVlUS5izpdcIXDZqDYvprRqZ29Pw0o/coding-freak.gif" alt="one" /></Box>
                <Box marginTop="-60px" w="40%" fontSize="19px" fontWeight="545" data-aos="zoom-in" data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">

                    <ul style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

                        <li>Hello! My name is Pranav Purohit I Enjoy Creating things that Live on Internet.</li>
                        <li>Software Engineer Inclined towards FrontEnd Technologies 🚀 (Not limited to UI) with a keen interest in exploring fundamental Engineering Concepts.</li>

                        <li>I'm Passionate Developer,With Strong Problem Solving Skills and Communication Skills, able to write  Clean , Efficient and Optimised Code.</li>
                        <li>I have hands-on Experience in Frontend and Backend Technology with Good Command on Data Structures and Algorithm.</li>
                    </ul>

                </Box>


            </Box>

        </Box>
    )
}

export default About