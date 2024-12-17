import { React, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { SignUp } from '../../features/signUp/signUpSlice';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
const SignUpPage = () => {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: "",
            address: ""
        }
    )
    const dispatch = useDispatch()

    const handleSignUp = async () => {
        const dataRes = await dispatch(SignUp(formData));
        if (dataRes.payload.status === true) {
          Swal.fire({
            title: 'Sign-Up Successful!',
            text: 'Your account has been created successfully.',
            icon: 'success',
            confirmButtonText: 'Continue',
            confirmButtonColor: '#3085d6',
          });
        } else {
          Swal.fire({
            title: 'Sign-Up Failed!',
            text: dataRes.data.message || 'Something went wrong. Please try again.',
            icon: 'error',
            confirmButtonText: 'Retry',
            confirmButtonColor: '#d33',
          });
        }
      };
      

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [id] : value
        }))
    }
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateAreas: `
                        "row1Section1 row1Section2"
                    `,
                    gridTemplateRows: 'auto',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 4,
                    height: '100%',
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        gridArea: 'row1Section1',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: 606,
                            width: 619,
                            maxHeight: { xs: 500, md: 1030 },
                            maxWidth: { xs: 350, md: 1150 },
                        }}
                        alt="The house from the offer."
                        src="../src/assets/Side_Image.png"
                    />
                </Box>

                <Box
                    sx={{
                        gridArea: 'row1Section2',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        margin: '50px'
                    }}
                >
                    <Typography
                        sx={{
                            color: "var(--Text2, #000)",
                            fontFamily: "Inter",
                            fontSize: "36px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "30px",
                            letterSpacing: "1.44px"
                        }}
                    >
                        Create an account
                    </Typography>

                    <Typography
                        sx={{
                            color: "var(--Text2, #000)",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "30px",
                            letterSpacing: "1.44px"
                        }}
                    >
                        Enter your details below
                    </Typography>

                    <TextField id="name" label="Name" variant="standard" onChange={handleChange} />
                    <TextField id="email" label="Email Or Phonenumber" variant="standard" onChange={handleChange} />
                    <TextField id="password" type="password" label="Password" variant="standard" onChange={handleChange} />
                    <TextField id="address" label="address" variant="standard" onChange={handleChange} />
                    <Button
                        sx={{
                            background: 'var(--Button2, #DB4444)',
                            borderRadius: '4px',
                            color: 'white',
                            marginTop: '20px'
                        }}
                        onClick={handleSignUp}
                    >
                        Create Account
                    </Button>

                    <Button
                        sx={{
                            background: 'white',
                            borderRadius: '4px',
                            color: 'black',
                            marginTop: '10px'
                        }}
                    >
                        Sign Up With Google
                    </Button>

                    <Typography
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        Already have an account? <Link to="/login">Login</Link>
                    </Typography>
                </Box>
            </Box>
        </Container >
    );
};

export default SignUpPage;
