import { Container, Link, Box, Stack, Typography, Breadcrumbs, Button } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const Wishlist = () => {
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
        </Typography>,
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
                    marginTop: "-40px",
                    gap: 4,
                    height: '100%',
                    width: '100%',
                }}>

            </Stack>

            <Stack
                gridArea="row1Section1"
            >
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

            <Stack
                gridArea='row2Section1'
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
                                justifyContent: "space-between"
                            }}
                        >
                            <Typography fontSize="20px" lineHeight="48px">Wishlist</Typography>


                            <Box>
                                <Button
                                    width='234px'
                                    height='56px'
                                    background='#DB4444'
                                >
                                    <Typography>Move All To Bag </Typography>
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
                                                <DeleteIcon/>
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

                                        


                                        </Box>
                                        <Box

                                        >
                                            <Button color="white" backgroundColor='black' >
                                                Add To Cart
                                            </Button>
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
                                               <DeleteIcon/>
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

                                          


                                        </Box>
                                        <Box

                                        >
                                            <Button color="white" backgroundColor='black' >
                                                Add To Cart
                                            </Button>
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
                                               <DeleteIcon/>
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

                                          


                                        </Box>
                                        <Box

                                        >
                                            <Button color="white" backgroundColor='black' >
                                                Add To Cart
                                            </Button>
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
                                                <DeleteIcon/>
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

                                            


                                        </Box>
                                        <Box

                                        >
                                            <Button color="white" backgroundColor='black' >
                                                Add To Cart
                                            </Button>
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


                                    </Box>

                                </Box>

                            </Box>


                        </Box>


                    </Box>
                </Box>
            </Stack>
            <Stack
                gridArea='row3Section1'
                marginTop='30px'
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
                            <Typography variant="h6" component="h6" color="black" fontSize="20px">Just For You</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >



                            <Box>
                                <Button
                                    width='234px'
                                    height='56px'
                                    background='#DB4444'
                                >
                                    <Typography>See All </Typography>
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
                                                <DeleteIcon />
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
                                               <DeleteIcon />
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
                                                <DeleteIcon />
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
                                                <DeleteIcon />
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
        </Container>

    )
}

export default Wishlist;