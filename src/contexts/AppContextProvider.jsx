import React, { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import YupValidator from "../utils/Yup_Validator";
import { toast } from 'react-toastify';

/*==== Import Icons ====*/
import { HiOutlineUserGroup, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaRegMoneyBillAlt, FaUserClock, FaUserShield } from 'react-icons/fa';
import { TbWorld, TbArmchair2 } from 'react-icons/tb';
import { SiPagerduty } from 'react-icons/si';

import { user_login_url } from "../routes/API_Routes";


const AppStoreContext = createContext();

const AppContextProvider = (props) => {
    const [state, setState] = useState({
        sidebarShow: true,
        isLightTheme: true,

        counterCardData: [
            {
                title: "Total No Of Employee",
                number: "50",
                icon: HiOutlineUserGroup
            },
            {
                title: "TAX",
                number: "50",
                icon: FaRegMoneyBillAlt
            },
            {
                title: "State",
                number: "50",
                icon: TbWorld
            },
            {
                title: "Local Government",
                number: "50",
                icon: HiOutlineLocationMarker
            },
            {
                title: "Total No of PFAs",
                number: "50",
                icon: SiPagerduty
            },
            {
                title: "Retirement < 1",
                number: "50",
                icon: TbArmchair2
            },
            {
                title: "Avg Employee Age",
                number: "50",
                icon: FaUserClock
            },
            {
                title: "Avg Employee Tenure",
                number: "50",
                icon: FaUserShield
            },
        ],

        dataArray: [
            {
                name: "John Deo",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "FCT",
                localGov: "Wuse 2",
                option1: "Anything",
                option2: "Anything"
            },
            {
                name: "Hassan Musa",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "Kaduna",
                localGov: "Wuse 2",
                option1: "Anything",
                option2: "Anything"
            },
            {
                name: "Igwe Joel",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "Enugu",
                localGov: "Nsukka",
                option1: "Anything",
                option2: "Anything"
            },
            {
                name: "Okeke Ebuka",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "Imo",
                localGov: "Wuse 2",
                option1: "Anything",
                option2: "Anything"
            },
            {
                name: "Bolaji Jerry",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "Lagos",
                localGov: "Wuse 2",
                option1: "Anything",
                option2: "Anything"
            },
            {
                name: "Adeyemi Jonatan",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "Osun",
                localGov: "Wuse 2",
                option1: "Anything",
                option2: "Anything"
            },
            {
                name: "John Deo",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "FCT",
                localGov: "Wuse 2",
                option1: "Anything",
                option2: "Anything"
            },
            {
                name: "Hassan Musa",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "Kaduna",
                localGov: "Wuse 2",
                option1: "Anything",
                option2: "Anything"
            },
            {
                name: "Igwe Joel",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "Enugu",
                localGov: "Nsukka",
                option1: "Anything",
                option2: "Anything"
            },
            {
                name: "Okeke Ebuka",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "Imo",
                localGov: "Wuse 2",
                option1: "Anything",
                option2: "Anything"
            },
            {
                name: "Bolaji Jerry",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "Lagos",
                localGov: "Wuse 2",
                option1: "Anything",
                option2: "Anything"
            },
            {
                name: "Adeyemi Jonatan",
                email: "j_deo@gmail.com",
                phone: "09033299239",
                state: "Osun",
                localGov: "Wuse 2",
                option1: "Anything",
                option2: "Anything"
            },
        ],

        pieData: [
            { name: '#34000-45000', value: 12, fill: "#268AFF" },
            { name: '#5000-6000', value: 45, fill: "#5A3FFF"  },
            { name: '#12000-20000', value: 67, fill: "#3DFFDC"  },
            { name: '#10000-11000', value: 35, fill: "#ADE1FF"  },
            { name: '#11000-13000', value: 56, fill: "#1ED6FF"  },
        ],
        areaData: [
            {
              number: 1700,
              year: 2014,
            },
            {
              number: 3000,
              year: 2015,
            },
            {
              number: 2900,
              year: 2016,
            },
            {
              number: 2850,
              year: 2017,
            },
            {
              number: 3200,
              year: 2018,
            },
            {
              number: 3700,
              year: 2019,
            },
            {
              number: 3500,
              year: 2020,
            },
            {
              number: 3200,
              year: 2021,
            },
            {
              number: 4000,
              year: 2022,
            },
        ],
        barData: [
            { number: 330, month: "Jan", fill: "#FF5B5A" },
            { number: 500, month: "Feb", fill: "#58CEFF" },
            { number: 190, month: "Mar", fill: "#4A52FF" },
            { number: 390, month: "Apr", fill: "#00A28A" },
            { number: 80, month: "May", fill: "#FF5B5A" },
            { number: 110, month: "Jun", fill: "#AB53DB" },
            { number: 600, month: "Jul", fill: "#FFBC54" },
            { number: 395, month: "Aug", fill: "#FF5B5A" },
            { number: 100, month: "Sep", fill: "#00A28A" },
            { number: 300, month: "Oct", fill: "#58CEFF" }
        ],
    });

    // const navigate = useNavigate();


    //  React Toast  Custom Methods.
    const successToast = (message) => {
        return toast.success(message, { hideProgressBar: true });
    };
    // const warningToast = (message) => {
    //     return toast.warning(message, { hideProgressBar: true });
    // }
    const errorToast = (message) => {
        return toast.error(message, { hideProgressBar: true });
    };

    const toggleTheme = () => {
        const { isLightTheme } = state;
        setState({
            ...state,
            isLightTheme: !isLightTheme,
        });
    };



    const updateAuthAndLoggedUser = (value, userData) => {
        setState((prevState) => ({
            ...prevState,
            isAuthenticated: value,
            user: userData
        }));
    };

    //  Input Change Handler.
    const handleInputChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };
    
    
    //  Handle Show Password.
    const handleShowPassword = () => {
        setState((prevState) => ({
            ...prevState,
            showPassword: !state.showPassword,
        }));
    };
    //  Handle Login User.
    const handleLoginUser = async (event) => {
        event.preventDefault();

        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isLoading: true,
            showPassword: false,
        }));

        //  Destructure the required form data from the state.
        const { email, password } = state;

        try {
            //  Validate the form data which is the "reqBody" using yup.
            const userData = await YupValidator.userLogin.validate({ email, password });

            //  Make Axios call.
            const response = await axios({
                method: "post",
                url: user_login_url,
                data: userData,
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.data.success) {
                const responseData = response.data;
                const user = responseData.data;

                //  Save user data to Local Storage.
                localStorage.setItem('userData', JSON.stringify(user));

                const successMessage = responseData.message;
                successToast(successMessage);
            
                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    user: user,
                    isLoading: false,
                    isAuthenticated: true,
                }));
            }
        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            }
            else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isLoading: false,
            }));
            console.log(error);
        }
    };


    //  Handle Get Data.
    const handleGetData = async () => {

    };


    return (
        <AppStoreContext.Provider value={{
            ...state,

            toggleTheme: toggleTheme,
            
            updateAuthAndLoggedUser: updateAuthAndLoggedUser,
            handleInputChange: handleInputChange,


            handleShowPassword: handleShowPassword,
            handleLoginUser: handleLoginUser,

            handleGetData: handleGetData,

        }}>
            { props.children }
        </AppStoreContext.Provider>
    );
};


export { AppStoreContext };
export default AppContextProvider;