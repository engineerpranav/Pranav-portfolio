import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { FaVideo } from 'react-icons/fa';
import { BsEyeFill } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import "./card.css"

function Tard({ title, image, desc, tech ,view, gitt}) {
  return (
    <Box data-aos="zoom-in" data-aos-delay="50" 
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center">

      <Card maxW='sm' bg="white" id="cardd">
        <CardBody>
          <Image
            src={image}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            h="250px"
          />
          <Stack mt='6' spacing='3'>
            <Heading textAlign="center" size='md'>{title}</Heading>
            <Text>
              {desc}
            </Text>
            <Box display="flex" width="100%">
              <Text width="40%" color='#F40A34' fontWeight="500" fontSize="15px">
                Tech Stack:
              </Text><Text width="100%" color="grey" fontSize="1xl">
                {tech}
              </Text>
            </Box>


          </Stack>
        </CardBody>
        <Divider />
        <CardFooter >
          <ButtonGroup spacing='8' width="80%" margin="auto" >
            <a><Button fontSize="30px" >
              <FaVideo />
            </Button></a>
            <a href={view} target="_blank" > <Button fontSize="30px" >
              <BsEyeFill />
            </Button ></a>
            <a href={gitt} target="_blank" ><Button fontSize="30px" >
              <BsGithub />
            </Button></a>

          </ButtonGroup>
        </CardFooter>
      </Card>


    </Box>
  )
}

export default Tard;