import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import Tard from './card'
import { Grid,GridItem } from '@chakra-ui/react'
import "./portfolio.css"

function Portfolio() {
    return (
        <Box id="work" bg='#d4f1f9'    >

            <Box display="flex" justifyContent="center"  id="heading_projects" fontWeight="700" gap="12px" margin="80px 0px 60px 0px" >

                <Text>My Creative </Text><Text color="#F40A34">Projects </Text>

            </Box>
            <Box > 

            <Grid   gap={6} width="80%" margin="auto" className='projects' >
                <GridItem  ><Tard title="Swiggy Clone" image="https://st1.bgr.in/wp-content/uploads/2022/06/Untitled-design-2022-06-03T124138.156.jpg" /></GridItem>
                <GridItem  ><Tard title="Shoppers Stop Clone" image="https://sslimages.shoppersstop.com/sys-master/root/h2c/h60/28817986158622/Sponsored-Brands-Main-Banner-Msite2022-1212-NEW-SP-BRANDS-WOMPAGES--WINTER.jpg" /></GridItem>
                <GridItem  ><Tard title="The Horse Clone" image="https://cdn.dribbble.com/users/968354/screenshots/15379842/media/91515101f296d48f7ee9565b83e1e96e.png?compress=1&resize=400x300&vertical=top" /></GridItem>
                 
            </Grid>
            </Box>




        </Box>







    )
}

export default Portfolio