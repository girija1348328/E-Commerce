import React, { useState, useEffect } from 'react';
import { Container, Box, Stack, Breadcrumbs, Typography, Link, Divider, Rating, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const ProductDetails = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            MUI
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Core
        </Link>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            Breadcrumb
        </Typography>
    ];


    return (
        <Container maxWidth="lg">
            <Stack
                sx={{
                    display: 'grid',
                    gridTemplateAreas: `
                        "row1Section1 row1Section1"
                        "row2Section1 row2Section1"
                        "row3Section1 row3Section1"
                    `,
                    gridTemplateRows: '0fr 2fr 1fr',
                    gridTemplateColumns: '1fr 1fr',
                    marginTop: "20px",
                    gap: 4,
                    height: '100%',
                    width: '100%',
                }}
            >
                <Stack
                    gridArea="row1Section1"
                >
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
                <Stack
                    gridArea="row2Section1"
                    direction="row"
                    spacing={3}
                >
                    <Stack
                        direction="column"
                        spacing={-4.5}
                    >
                        <Box
                            width="170px"
                            height="138px"
                            padding="12px 25px 12px 24px"
                            justifyContent='center'
                            alignItems="center"
                            borderRadius="4px"
                            background="var(--Secondary, #F5F5F5)"
                        >
                            <img src='..\src\assets\Frame895.png' height="80" width="80"></img>
                        </Box>
                        <Box
                            width="170px"
                            height="138px"
                            padding="12px 25px 12px 24px"
                            justifyContent='center'
                            alignItems="center"
                            borderRadius="4px"
                            background="var(--Secondary, #F5F5F5)"
                        >
                            <img src='..\src\assets\Frame895.png' height="80" width="80"></img>
                        </Box>

                        <Box
                            width="170px"
                            height="138px"
                            padding="12px 25px 12px 24px"
                            justifyContent='center'
                            alignItems="center"
                            borderRadius="4px"
                            background="var(--Secondary, #F5F5F5)"
                        >
                            <img src='..\src\assets\Frame895.png' height="80" width="80"></img>
                        </Box>

                        <Box
                            width="170px"
                            height="138px"
                            padding="12px 25px 12px 24px"
                            justifyContent='center'
                            alignItems="center"
                            borderRadius="4px"
                            background="var(--Secondary, #F5F5F5)"
                        >
                            <img src='..\src\assets\Frame895.png' height="80" width="80"></img>
                        </Box>

                    </Stack>
                    <Stack>
                        <Box
                            display="flex"
                            width="500px"
                            padding="100px 27px 40px 27px"
                            flexDirection='column'
                            justifyContent='flexEnd'
                            alignItems='center'
                        >
                            <img src='..\src\assets\gamePadLarge.png' height="315px" width="446px"></img>
                        </Box>
                    </Stack>

                    {/* itemdetails section */}
                    <Stack spacing={1.5}>
                        <Stack>
                            <Box>
                                <Typography>
                                    <h2>Havic HV G-92 Gamepad</h2>
                                </Typography>
                            </Box>
                        </Stack>
                        <Stack
                            spacing={1}
                            direction='row'
                            justifyContent="space-between"
                            alignItems="center"
                            display='flex'

                        >
                            <Box>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Box>

                            <Box>
                                <Typography
                                    color="var(--Text2, #000)"
                                    fontSize="14px"

                                >(150 Reviews)</Typography>

                            </Box>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Box>
                                <Typography
                                    color="var(--Button1, #0F6)"
                                    fontSize="14px"

                                >In Stock</Typography>
                            </Box>
                        </Stack>

                        <Stack>
                            <Box>
                                <Typography
                                    fontSize="24px"

                                >
                                    $192.00
                                </Typography>
                            </Box>
                        </Stack>
                        <Stack>
                            <Box>
                                <Typography
                                    width="373px"
                                >
                                    PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                                </Typography>
                            </Box>
                        </Stack>
                        <Stack
                            margin='30px'
                        >
                            <Divider orientation="horizontal" variant="middle" flexItem></Divider>
                        </Stack>

                        <Stack
                            spacing={2}
                            direction='row'
                        >
                            <Box>
                                <Typography
                                    fontSize="20px"

                                >
                                    Colours:
                                </Typography>

                            </Box>
                            <Box>
                                <img src='..\src\assets\eliple.png' height="30px" width="30px"></img>
                            </Box>
                        </Stack>

                        <Stack
                            spacing={2}
                            direction='row'

                        >
                            <Box>
                                <Typography
                                    fontSize="20px"
                                >
                                    Size:
                                </Typography>
                            </Box>
                            <Box
                                direction="row"
                                spacing={1}
                            >
                                <Button

                                    display="flex"
                                    width="32px"
                                    height="32px"
                                    padding="6px"
                                    justifyContent="center"
                                    alignItems="center"
                                    color="var(--Text2, #000)"
                                    fontSize="14px"
                                >
                                    XS
                                </Button>

                                <Button

                                    display="flex"
                                    width="32px"
                                    height="32px"
                                    padding="6px"
                                    justifyContent="center"
                                    alignItems="center"
                                    color="var(--Text2, #000)"
                                    fontSize="14px"
                                >
                                    S
                                </Button>

                                <Button

                                    display="flex"
                                    width="32px"
                                    height="32px"
                                    padding="6px"
                                    justifyContent="center"
                                    alignItems="center"
                                    color="var(--Text2, #000)"
                                    fontSize="14px"
                                >
                                    M
                                </Button>
                                <Button

                                    display="flex"
                                    width="32px"
                                    height="32px"
                                    padding="6px"
                                    justifyContent="center"
                                    alignItems="center"
                                    color="var(--Text2, #000)"
                                    fontSize="14px"
                                >
                                    L
                                </Button>
                                <Button

                                    display="flex"
                                    width="32px"
                                    height="32px"
                                    padding="6px"
                                    justifyContent="center"
                                    alignItems="center"
                                    color="var(--Text2, #000)"
                                    fontSize="14px"
                                >
                                    XL
                                </Button>
                            </Box>
                        </Stack>

                        <Stack
                            direction='row'
                            spacing={4}
                        >
                            <Stack
                                direction='row'
                                spacing={0}
                            >
                                <Box
                                    display='flex'
                                    width='40px'
                                    height='44px'
                                    padding='10px 8px'
                                    flexDirection='column'
                                    justifyContent='center'
                                    alignItems='center'
                                    flexShrink='0'
                                    border='1px solid rgba(0, 0, 0, 0.50)'
                                >
                                    <Button
                                        width='15px'
                                        height='24px'
                                    >
                                        <img src='..\src\assets\icon-minus_1.png' width='10px'></img>
                                    </Button>
                                </Box>
                                <Box
                                    display='flex'
                                    width='80px'
                                    height='44px'
                                    padding='10px 8px'
                                    flexDirection='column'
                                    justifyContent='center'
                                    alignItems='center'
                                    flexShrink='0'
                                    border='1px solid rgba(0, 0, 0, 0.50)'
                                >
                                    <Typography
                                        width='80px'
                                        height='24px'
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                    >
                                        3
                                    </Typography>
                                </Box>
                                <Box
                                    display='flex'
                                    width='40px'
                                    height='44px'
                                    padding='10px 8px'
                                    flexDirection='column'
                                    justifyContent='center'
                                    alignItems='center'
                                    flexShrink='0'
                                    border='1px solid rgba(0, 0, 0, 0.50)'
                                >
                                    <Button
                                        width='15px'
                                        height='24px'
                                    >
                                        <img src='..\src\assets\icon-minus_1.png' width='15px'></img>
                                    </Button>
                                </Box>
                            </Stack>
                            <Stack>
                                <Button
                                    sx={{
                                        backgroundColor: '#DB4444',
                                        borderRadius: '4px',
                                        color: '#fff', // Set text color explicitly if needed
                                        '&:hover': {
                                            backgroundColor: '#B73232', // Optional: hover state color
                                        },
                                        width: "105px",
                                        height: "43px"
                                    }}
                                >
                                    Buy Now
                                </Button>

                            </Stack>
                            <Stack>
                                <Box
                                    display='flex'
                                    width='40px'
                                    height='40px'
                                    padding='4px'
                                    justifyContent='center'
                                    alignItems='center'
                                    border='1px solid rgba(0, 0, 0, 0.50)'
                                    borderRadius='4px'
                                >
                                    <FavoriteBorder />
                                </Box>
                            </Stack>
                        </Stack>

                    </Stack>

                </Stack>

                <Stack
                    gridArea='row3Section1'
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: 'column',
                                gap: "10px",
                                marginTop: "15px"
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '20px',
                                        height: '40px',
                                        backgroundColor: '#DB4444',
                                        borderRadius: '2px',

                                    }}
                                />
                                <Typography variant="h6" component="h6" color="var(--Secondary-2, #DB4444)" fontSize="20px">This Month</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Typography fontSize="36px" lineHeight="48px">Best Selling Products</Typography>


                                <Box>
                                    <Button
                                        width='234px'
                                        height='56px'
                                        background='#DB4444'
                                    >
                                        <Typography>View all </Typography>
                                    </Button>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: '25px',
                                    // marginTop: '10px',
                                    borderRadius: '10px'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '270px',
                                                height: '250px',
                                                borderRadius: '4px',
                                                background: "var(--Secondary, #F5F5F5)",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    margin: "10px",
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "inline-flex",
                                                        padding: "4px 12x",
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderRadius: '4px',
                                                        background: ' var(--Secondary-2, #DB4444)',
                                                        height: '25px',
                                                        width: '50px'
                                                    }}>
                                                    <Typography
                                                        fontSize="12px"

                                                    >
                                                        -40%
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: "34px",
                                                        height: '34px',
                                                        borderRadius: "20px",
                                                        backgroundColor: "#FFF",
                                                        display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <FavoriteBorderIcon />
                                                </Box>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    margin: "10px",
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        height: 100,
                                                        width: 150,
                                                        maxHeight: { xs: 500, md: 330 },
                                                        maxWidth: { xs: 350, md: 1150 },
                                                    }}
                                                    alt="The house from the offer."
                                                    src="..\src\assets\gamePad.png"
                                                />
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: '34px',
                                                        height: '34px',
                                                        borderRadius: "20px",
                                                        backgroundColor: "#FFF",
                                                    }}
                                                >
                                                    <VisibilityIcon />
                                                </Box>


                                            </Box>
                                            <Box
                                                display='flex'
                                                flexDirection='column'
                                                justifyContent='center'

                                            >
                                                <Typography>
                                                    HAVIT HV-G92 Gamepad
                                                </Typography>
                                                <Typography
                                                    color='var(--Secondary-2, #DB4444);'
                                                >
                                                    $120
                                                </Typography>
                                                <Box
                                                    display='flex'
                                                    flexDirection='row'
                                                >
                                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                                </Box>

                                            </Box>



                                        </Box>

                                    </Box>

                                </Box>


                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '270px',
                                                height: '250px',
                                                borderRadius: '4px',
                                                background: "var(--Secondary, #F5F5F5)",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    margin: "10px",
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "inline-flex",
                                                        padding: "4px 12x",
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderRadius: '4px',
                                                        background: ' var(--Secondary-2, #DB4444)',
                                                        height: '25px',
                                                        width: '50px'
                                                    }}>
                                                    <Typography
                                                        fontSize="12px"

                                                    >
                                                        -40%
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: "34px",
                                                        height: '34px',
                                                        borderRadius: "20px",
                                                        backgroundColor: "#FFF",
                                                        display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <FavoriteBorderIcon />
                                                </Box>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    margin: "10px",
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        height: 100,
                                                        width: 150,
                                                        maxHeight: { xs: 500, md: 330 },
                                                        maxWidth: { xs: 350, md: 1150 },
                                                    }}
                                                    alt="The house from the offer."
                                                    src="..\src\assets\gamePad.png"
                                                />
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: '34px',
                                                        height: '34px',
                                                        borderRadius: "20px",
                                                        backgroundColor: "#FFF",
                                                    }}
                                                >
                                                    <VisibilityIcon />
                                                </Box>


                                            </Box>
                                            <Box
                                                display='flex'
                                                flexDirection='column'
                                                justifyContent='center'

                                            >
                                                <Typography>
                                                    HAVIT HV-G92 Gamepad
                                                </Typography>
                                                <Typography
                                                    color='var(--Secondary-2, #DB4444);'
                                                >
                                                    $120
                                                </Typography>
                                                <Box
                                                    display='flex'
                                                    flexDirection='row'
                                                >
                                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                                </Box>

                                            </Box>



                                        </Box>

                                    </Box>

                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '270px',
                                                height: '250px',
                                                borderRadius: '4px',
                                                background: "var(--Secondary, #F5F5F5)",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    margin: "10px",
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "inline-flex",
                                                        padding: "4px 12x",
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderRadius: '4px',
                                                        background: ' var(--Secondary-2, #DB4444)',
                                                        height: '25px',
                                                        width: '50px'
                                                    }}>
                                                    <Typography
                                                        fontSize="12px"

                                                    >
                                                        -40%
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: "34px",
                                                        height: '34px',
                                                        borderRadius: "20px",
                                                        backgroundColor: "#FFF",
                                                        display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <FavoriteBorderIcon />
                                                </Box>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    margin: "10px",
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        height: 100,
                                                        width: 150,
                                                        maxHeight: { xs: 500, md: 330 },
                                                        maxWidth: { xs: 350, md: 1150 },
                                                    }}
                                                    alt="The house from the offer."
                                                    src="..\src\assets\gamePad.png"
                                                />
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: '34px',
                                                        height: '34px',
                                                        borderRadius: "20px",
                                                        backgroundColor: "#FFF",
                                                    }}
                                                >
                                                    <VisibilityIcon />
                                                </Box>


                                            </Box>
                                            <Box
                                                display='flex'
                                                flexDirection='column'
                                                justifyContent='center'

                                            >
                                                <Typography>
                                                    HAVIT HV-G92 Gamepad
                                                </Typography>
                                                <Typography
                                                    color='var(--Secondary-2, #DB4444);'
                                                >
                                                    $120
                                                </Typography>
                                                <Box
                                                    display='flex'
                                                    flexDirection='row'
                                                >
                                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                                </Box>

                                            </Box>



                                        </Box>

                                    </Box>

                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '270px',
                                                height: '250px',
                                                borderRadius: '4px',
                                                background: "var(--Secondary, #F5F5F5)",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    margin: "10px",
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "inline-flex",
                                                        padding: "4px 12x",
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderRadius: '4px',
                                                        background: ' var(--Secondary-2, #DB4444)',
                                                        height: '25px',
                                                        width: '50px'
                                                    }}>
                                                    <Typography
                                                        fontSize="12px"

                                                    >
                                                        -40%
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: "34px",
                                                        height: '34px',
                                                        borderRadius: "20px",
                                                        backgroundColor: "#FFF",
                                                        display: "flex",
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <FavoriteBorderIcon />
                                                </Box>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    margin: "10px",
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        height: 100,
                                                        width: 150,
                                                        maxHeight: { xs: 500, md: 330 },
                                                        maxWidth: { xs: 350, md: 1150 },
                                                    }}
                                                    alt="The house from the offer."
                                                    src="..\src\assets\gamePad.png"
                                                />
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: '34px',
                                                        height: '34px',
                                                        borderRadius: "20px",
                                                        backgroundColor: "#FFF",
                                                    }}
                                                >
                                                    <VisibilityIcon />
                                                </Box>


                                            </Box>
                                            <Box
                                                display='flex'
                                                flexDirection='column'
                                                justifyContent='center'

                                            >
                                                <Typography>
                                                    HAVIT HV-G92 Gamepad
                                                </Typography>
                                                <Typography
                                                    color='var(--Secondary-2, #DB4444);'
                                                >
                                                    $120
                                                </Typography>
                                                <Box
                                                    display='flex'
                                                    flexDirection='row'
                                                >
                                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                                </Box>

                                            </Box>



                                        </Box>

                                    </Box>

                                </Box>


                            </Box>


                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Container >
    )
}

export default ProductDetails;