
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
  width: 100%;
  background: url(https://www.iiita.ac.in/uploads/carousel/12288_o303.jpg)
    center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.85
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>IIITA Announcement Site</Heading>
            
        </Image>
    )
}

export default Banner;