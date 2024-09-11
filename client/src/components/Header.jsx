import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/material';
import GrassIcon from '@mui/icons-material/Grass';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none', // Remove the drop shadow
  borderBottom: '1px solid black'
}));

function Header(props) {
  const { user } = props;

  return (
    <>
      <CustomAppBar position="static" enableColorOnDark>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <GrassIcon />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 600,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Field Tracker
            </Typography>
            {user && user.email &&
              <>
                <Box sx={{ flexGrow: 1 }}></Box>
              
                <Box sx={{ marginRight: '1rem' }}>
                  <Stack direction="row" spacing={4}>
                    <Link
                      href="/profile"
                      sx={{ color: 'white', textDecoration: 'none' }}
                    >
                      <Button color="secondary" variant="contained" startIcon={<AccountBoxIcon />}>
                        Profile
                      </Button>
                    </Link>
                    <Link
                      href="/"
                      sx={{ color: 'white', textDecoration: 'none' }}
                      onClick={() => {
                        localStorage.removeItem('access');
                        localStorage.removeItem('refresh');
                      }}
                    >
                      <Button color="error" variant="contained" endIcon={<LogoutIcon />}>
                        Logout
                      </Button>
                    </Link>
                  </Stack>
                </Box>
              </>
            }
          </Toolbar>
        </Container>
      </CustomAppBar>
    </>
  );
}

export default Header;
