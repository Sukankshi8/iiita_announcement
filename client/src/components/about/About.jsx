
import { Box, styled, Typography, Link } from '@mui/material';


const Banner = styled(Box)`
  background-image: url(https://www.iiita.ac.in/uploads/carousel/12288_o303.jpg);
  width: 100;
  height: 80vh;
  display: flex;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
      <Box>
        <Banner />
        <Wrapper>
          <Typography variant="h3">
            Indian Institute Of Information Technology, Allahabad
          </Typography>
          <Text variant="h5">
            "Indian Institutes of Information Technology (IIITs) are a group of 25 interdisciplinary technology-based-engineering research institutions in India which are focused on information technology. Five of them are established, funded and managed by the Ministry of Education (MOE). The other 20 are set up on the public-private partnership (PPP) model, funded by the central government, state governments and industry partners in the ratio 50:35:15."
									
										Prior to 2014, the IIITs at Gwalior, Allahabad, Jabalpur, and Kancheepuram were set up by the Ministry of Human Resource Development (MHRD).
									
										Admissions into undergraduate programmes in IIITs for about 7,000 seats are through the Joint Seat Allocation Authority and JEE-Main. For postgraduate programs admission is through Graduate Aptitude Test in Engineering (GATE).
									
										Established in 1999, as a Centre of Excellence in Information Technology and allied areas, the IIIT-A was conferred the Deemed University status by Govt. of India in the year 2000.
									
										The beautiful 100-acre campus, situated at Deoghat, Jhalwa, designed meticulously on the Penrose Geometry pattern, is being further topped by fine landscaping to give an all round soothing effect to create a stimulating environment. The campus is envisaged to be a fully residential one, with all its faculty, staff, and students housed in different pockets. All academic and residential areas are connected to the Institute network.
									
										The campus is envisaged to be a fully residential one, with all its faculty, staff and students housed in different pockets. All academic and residential areas are connected to the Institute network."
            
            <Box component="span" style={{ marginLeft: 5 }}>
              <Link
                href="https://www.iiita.ac.in/"
                color="inherit"
                target="_blank"
              >Official Link</Link>
            </Box>
          </Text>
        </Wrapper>
      </Box>
    );
}

export default About;