import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Home = () => {
    // Define target time (example: 5 minutes from now)
    const targetTime = new Date().getTime() + 5 * 60 * 1000;

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

    // Calculate the remaining time
    function calculateTimeLeft(target) {
        const difference = new Date(target) - new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Update the countdown every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetTime));
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [targetTime]);

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateAreas: `
                        "row1Section1 row1Section2"
                        "row2Section1 row2Section1"
                        "row3Section1 row3Section1"
                        "row4Section1 row4Section1"
                        "row5Section1 row5Section1"
                        "row6Section1 row6Section1"
                        "row7Section1 row7Section1"
                    `,
                    gridTemplateRows: '1fr 1fr auto',
                    gridTemplateColumns: '1fr 3fr',
                    gap: 2,
                    height: '100%',
                    width: '100%',
                }}
            >

                <Box
                    sx={{
                        gridArea: 'row1Section1',
                        display: "flex",
                        flexDirection: 'column',
                        gap: '10px'
                    }}
                >
                    <Typography variant="h6" component="h6">Woman's fashion</Typography>

                    <Typography variant="h6" component="h6">Men's fashion</Typography>

                    <Typography variant="h6" component="h6">Electronics</Typography>

                    <Typography variant="h6" component="h6">Home & Lifestyle</Typography>

                    <Typography variant="h6" component="h6">Medicine</Typography>

                    <Typography variant="h6" component="h6">Sports & Outdoor</Typography>

                    <Typography variant="h6" component="h6">Baby’s & Toys</Typography>

                    <Typography variant="h6" component="h6">Groceries & Pets</Typography>


                </Box>

                <Box
                    sx={{
                        gridArea: 'row1Section2',
                        display: "flex",
                        flexDirection: 'column',
                        gap: '16px'
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: 500,
                            width: 850,
                            maxHeight: { xs: 500, md: 330 },
                            maxWidth: { xs: 350, md: 1150 },
                        }}
                        alt="The house from the offer."
                        src="..\src\assets\mobileAdvertise.png"
                    />
                </Box>
                <Box
                    sx={{
                        gridArea: 'row2Section1',
                        display: "flex",
                        flexDirection: 'column',
                        gap: '16px'
                    }}
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
                                <Typography variant="h6" component="h6" color="var(--Secondary-2, #DB4444)" fontSize="20px">Todays</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Typography fontSize="36px" lineHeight="48px">Flash Sales</Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '16px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '6px',
                                        backgroundColor: '#f5f5f5',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <Typography variant="h6" component="div">
                                        {timeLeft.days}d
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        {timeLeft.hours}h
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        {timeLeft.minutes}m
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        {timeLeft.seconds}s
                                    </Typography>
                                </Box>

                                <Box>
                                    <ArrowBackIcon />
                                    <ArrowForwardIcon />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: '25px',
                                    marginTop: '10px',
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
                </Box>

                <Box
                    gridArea="row3Section1"
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    marginTop="10px"
                >
                    <Button
                        width='234px'
                        height='56px'
                        background='#DB4444'
                    >
                        <Typography>View all products</Typography>
                    </Button>
                </Box>
            </Box>

            <Stack spacing={2} display='flex' gridArea="row4Section1">
                <Stack spacing={2} direction="row" alignItems='center'>
                    <Box
                        sx={{
                            width: '20px',
                            height: '40px',
                            backgroundColor: '#DB4444',
                            borderRadius: '2px',
                        }}
                    />
                    <Typography variant="h6" component="h6" color="var(--Secondary-2, #DB4444)" fontSize="20px">Categories</Typography>
                </Stack>

                <Stack>
                    <Typography fontSize="36px" >Browse By Category</Typography>
                </Stack>
                <Stack direction="row" >
                    <Box
                        display='flex'
                        width='170px'
                        height='145px'
                        padding="25px 56px 24px 55px"
                        flex-direction='column'
                        justify-content='center'
                        align-items='flex-end'
                        gap='66px'
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
                            src="..\src\assets\Category-CellPhone.png"
                            border='1px solid rgba(0, 0, 0, 0.30)'
                            borderRadius='4px'

                        />

                        <Box
                            component="img"
                            sx={{
                                height: 100,
                                width: 150,
                                maxHeight: { xs: 500, md: 330 },
                                maxWidth: { xs: 350, md: 1150 },
                            }}
                            alt="The house from the offer."
                            src="..\src\assets\Category-Phone.png"
                            border='1px solid rgba(0, 0, 0, 0.30)'
                            borderRadius='4px'

                        />

                        <Box
                            component="img"
                            sx={{
                                height: 100,
                                width: 150,
                                maxHeight: { xs: 500, md: 330 },
                                maxWidth: { xs: 350, md: 1150 },
                            }}
                            alt="The house from the offer."
                            src="..\src\assets\Category-Phone (1).png"
                            border='1px solid rgba(0, 0, 0, 0.30)'
                            borderRadius='4px'

                        />

                        <Box
                            component="img"
                            sx={{
                                height: 100,
                                width: 150,
                                maxHeight: { xs: 500, md: 330 },
                                maxWidth: { xs: 350, md: 1150 },
                            }}
                            alt="The house from the offer."
                            src="..\src\assets\Category-Phone (1).png"
                            border='1px solid rgba(0, 0, 0, 0.30)'
                            borderRadius='4px'

                        />

                        <Box
                            component="img"
                            sx={{
                                height: 100,
                                width: 150,
                                maxHeight: { xs: 500, md: 330 },
                                maxWidth: { xs: 350, md: 1150 },
                            }}
                            alt="The house from the offer."
                            src="..\src\assets\Category-Phone (1).png"
                            border='1px solid rgba(0, 0, 0, 0.30)'
                            borderRadius='4px'

                        />

                        <Box
                            component="img"
                            sx={{
                                height: 100,
                                width: 150,
                                maxHeight: { xs: 500, md: 330 },
                                maxWidth: { xs: 350, md: 1150 },
                            }}
                            alt="The house from the offer."
                            src="..\src\assets\Category-Phone (1).png"
                            border='1px solid rgba(0, 0, 0, 0.30)'
                            borderRadius='4px'

                        />
                    </Box>
                </Stack>
            </Stack>

            <Box
                sx={{
                    gridArea: 'row5Section1',
                    display: "flex",
                    flexDirection: 'column',
                    gap: '16px',
                    marginTop: '20px'
                }}
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
                                marginTop: '10px',
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
            </Box>

            <Box
                sx={{
                    gridArea: 'row7Section1',
                    margin: '50px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 400,
                        width: 1100,
                        maxHeight: { xs: 500, md: 630 },
                        maxWidth: { xs: 850, md: 1150 },
                    }}
                    alt="The house from the offer."
                    src="..\src\assets\Boat_pic.png"
                />
            </Box>
            <Box
                sx={{
                    gridArea: 'row7Section1',
                    display: "flex",
                    flexDirection: 'column',
                    gap: '16px',
                    marginTop: '20px'
                }}
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
                            <Typography variant="h6" component="h6" color="var(--Secondary-2, #DB4444)" fontSize="20px">Our Products</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >
                            <Typography fontSize="36px" lineHeight="48px">Explore Our Products</Typography>


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
                                marginTop: '10px',
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
            </Box>
        </Container >
    );
};

export default Home;
