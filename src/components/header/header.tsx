import React from 'react';
import { Box, Stack, IconButton, Typography, Divider } from '@mui/material';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';
import { Nav_Buttons, Nav_Settings } from '../../data/index';

const Header = () => {
  const theme = useTheme();

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (index: any) => {
    setSelectedTab(index);
  };
  return (
    <Box
      sx={{
        height: 65,
        width: '100%',
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#F0F4FA'
            : theme.palette.background.default,
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack
        alignItems={'center'}
        // justifyContent="space-between"
        spacing={3}
        direction="row"
        py={2}
        sx={{ height: '100%' }}
      >
        <Box
          sx={{
            height: 45,
            width: 64,
            borderRadius: 1.5,
            backgroundColor: theme.palette.primary.main,
          }}
          p={1}
        >
          <img src={faker.image.abstract()} alt="Hola Chat" />
        </Box>
        {/* <Stack
          sx={{ width: 'max-content' }}
          direction="row"
          alignItems={'center'}
          spacing={2}
        >
          {Nav_Buttons.map((el) => (
            <Box
              sx={{
                // backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
              p={1}
            >
              <IconButton
                onClick={() => {}}
                sx={{ width: 'max-content', color: '#ffffff' }}
              >
                {el.icon}
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#ffffff',
                  }}
                >
                  {el.name}
                </Typography>
              </IconButton>
            </Box>
          ))}
        </Stack> */}
        <Stack
          sx={{ width: 'max-content' }}
          direction="row"
          alignItems={'center'}
          spacing={5}
        >
          {Nav_Buttons.map((el) => {
            return el.index === selectedTab ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
                p={1}
              >
                <IconButton
                  onClick={() => {}}
                  sx={{ width: 'max-content', color: '#ffffff' }}
                >
                  {el.icon}
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  handleChangeTab(el.index);
                }}
                sx={{
                  width: 'max-content',
                  color:
                    theme.palette.mode === 'light'
                      ? '#080707'
                      : theme.palette.text.primary,
                }}
              >
                {el.icon}
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#ffffff',
                  }}
                >
                  {el.name}
                </Typography>
              </IconButton>
            );
          })}
          <Divider orientation="vertical" variant="middle" flexItem />
          {Nav_Settings.map((el) => {
            return el.index === selectedTab ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
                p={1}
              >
                <IconButton
                  onClick={() => {
                    // dispatch(UpdateTab(el.index));
                  }}
                  sx={{ width: 'max-content', color: '#ffffff' }}
                >
                  {el.icon}
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  handleChangeTab(el.index);

                  // dispatch(UpdateTab(el.index));
                }}
                sx={{
                  width: 'max-content',
                  color:
                    theme.palette.mode === 'light'
                      ? '#080707'
                      : theme.palette.text.primary,
                }}
              >
                {el.icon}
              </IconButton>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
