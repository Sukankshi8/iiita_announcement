
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Contact:</Typography>    
                <Text variant="h5">
                    <Typography>
                    Reach out to me on
                    <Link href="https://github.com/Sukankshi8" color="inherit" target="_blank">
                        <GitHub/>
                    </Link>
                    </Typography>
                    <Typography>
                                    send me an Email 
                    <Link href="mailto:sukankshi08@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>
                    </Typography>
                    <Typography>
                                    Connect with me on LinkedIn
                    <Link href="https://www.linkedin.com/in/sukankshi-sharma-569069234/" target="_blank" color="inherit">
                        <LinkedIn />
                    </Link>.
                    </Typography>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;