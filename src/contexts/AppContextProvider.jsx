import React, { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import YupValidator from "../utils/Yup_Validator";
import { toast } from 'react-toastify';

/*==== Import Icons ====*/
import { HiOutlineUserGroup } from 'react-icons/hi';
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi';
import { SiPagerduty,SiAntdesign } from 'react-icons/si';
import { BsBank } from 'react-icons/bs';
import { MdOutlineHomeRepairService } from 'react-icons/md';

import { get_all_employee_url } from "../routes/API_Routes";


const AppStoreContext = createContext();

const AppContextProvider = (props) => {
    const [state, setState] = useState({
        email: "admin@payday.com",
        password: "password",
        user: {},


        totalNumberOfEmployee: 0,
        averageEmployeeAge: 0.0,
        averageEmployeeTenire: 0.0,
        totalNumberOfMDA: 0,

        dashBoardFilters: {
            selectedMinistries: "",
            selectedServiceProvider: "",
            selectedPFA: "",
            selectedState: "",
            selectedPayrollPeriod: "",
            selectedStatus: "",
        },

        sidebarShow: true,
        isLightTheme: true,

        dashboardSelectedTab: {
            tableTab: true,
            chartTab: false,
        },
        employeeSelectedTab: {
            tableTab: true,
            chartTab: false,
        },
        financialSelectedTab: {
            tableTab: true,
            chartTab: false,
        },


        /**
         * DASHBOARD DATA
        */
        dashboardCounterCardData: [
            {
                title: "Total No. of Employee",
                number: "20,000",
                icon: HiOutlineUserGroup
            },
            {
                title: "Total No. of MDA",
                number: "500",
                icon: SiAntdesign
            },
            {
                title: "Total No of PFAs",
                number: "8",
                icon: SiPagerduty
            },
            {
                title: "Service Provider",
                number: "2",
                icon: MdOutlineHomeRepairService
            },
            {
                title: "Total NO. Banks",
                number: "2",
                icon: BsBank
            },
            {
                title: "Total Salary Paid(NET)",
                number: "2",
                icon: GiMoneyStack
            },
            {
                title: "Total Amount Deducted",
                number: "50",
                icon: GiTakeMyMoney
            },
        ],

        dashboardMapData: [
            ['ng-ri', 10], ['ng-kt', 11], ['ng-so', 12], ['ng-za', 13],
            ['ng-yo', 14], ['ng-ke', 15], ['ng-ad', 16], ['ng-bo', 17],
            ['ng-ak', 18], ['ng-ab', 19], ['ng-im', 20], ['ng-by', 21],
            ['ng-be', 22], ['ng-cr', 23], ['ng-ta', 24], ['ng-kw', 25],
            ['ng-la', 26], ['ng-ni', 27], ['ng-fc', 28], ['ng-og', 29],
            ['ng-on', 30], ['ng-ek', 31], ['ng-os', 32], ['ng-oy', 33],
            ['ng-an', 34], ['ng-ba', 35], ['ng-go', 36], ['ng-de', 37],
            ['ng-ed', 38], ['ng-en', 39], ['ng-eb', 40], ['ng-kd', 41],
            ['ng-ko', 42], ['ng-pl', 43], ['ng-na', 44], ['ng-ji', 45],
            ['ng-kn', 46]
        ],


        /**
         * EMPLOYEE DATA
        */
        employeeCounterCardData: [],

        employeeRecordsByMinistryLineData: [
            { count: 17, name: "MDA1", },
            { count: 8, name: "MDA2", },
            { count: 14, name: "MDA3", },
            { count: 28, name: "MDA4", },
            { count: 25, name: "MDA5", },
            { count: 19, name: "MDA6", },
            { count: 30, name: "MDA7", },
            { count: 29, name: "MDA8", },
            { count: 48, name: "MDA9", },
            { count: 51, name: "MDA10", }
        ],

        employeeRecordsByStateMapData: [
            ['ng-ri', 10], ['ng-kt', 11], ['ng-so', 12], ['ng-za', 13],
            ['ng-yo', 14], ['ng-ke', 15], ['ng-ad', 16], ['ng-bo', 17],
            ['ng-ak', 18], ['ng-ab', 19], ['ng-im', 20], ['ng-by', 21],
            ['ng-be', 22], ['ng-cr', 23], ['ng-ta', 24], ['ng-kw', 25],
            ['ng-la', 26], ['ng-ek', 27], ['ng-fc', 28], ['ng-og', 29],
            ['ng-on', 30], ['ng-ni', 31], ['ng-os', 32], ['ng-oy', 33],
            ['ng-an', 34], ['ng-ba', 35], ['ng-go', 36], ['ng-de', 37],
            ['ng-ed', 38], ['ng-en', 39], ['ng-eb', 40], ['ng-kd', 41],
            ['ng-ko', 42], ['ng-pl', 43], ['ng-na', 44], ['ng-ji', 45],
            ['ng-kn', 46]
        ],
        employeeRecordsByStateTableData: [],





        /**
         * EMPLOYEE SCREEN DATA.
        */
        financialCounterCardData: [
            {
                title: "Total Salary Paid",
                number: "20,000",
                icon: HiOutlineUserGroup
            },
            {
                title: "Total Amount Deducted",
                number: 500,
                icon: HiOutlineUserGroup
            },
            {
                title: "Avg. Salary(Monthly)",
                number: 8,
                icon: SiPagerduty
            },
            {
                title: "Total No. Of Bank",
                number: 2,
                icon: MdOutlineHomeRepairService
            },
            {
                title: "Total No. Of PFAs",
                number: 2,
                icon: MdOutlineHomeRepairService
            }
        ],

        earningDeductiobPieData: [
            { name: 'Deduction', count: 234, fill: "#3AACFF" },
            { name: 'Earning', count: 1554, fill: "#36EBCA"  },
        ],
        annualEmployeePaymentTableData: [
            { amount: '#34000-45000', count: 12, percentage: "12%" },
            { amount: '#5000-6000', count: 45, percentage: "45%"  },
            { amount: '#12000-20000', count: 67, percentage: "67%"  },
            { amount: '#10000-11000', count: 35, percentage: "35%"  },
            { amount: '#11000-13000', count: 56, percentage: "56%"  },
        ],




        pieData: [
            { name: '#34000-45000', value: 12, fill: "#268AFF" },
            { name: '#5000-6000', value: 45, fill: "#5A3FFF"  },
            { name: '#12000-20000', value: 67, fill: "#3DFFDC"  },
            { name: '#10000-11000', value: 35, fill: "#ADE1FF"  },
            { name: '#11000-13000', value: 56, fill: "#1ED6FF"  },
        ],

        employeeSalaryRangePieData: [],

        employeeGenderPieData: [],

        employeeDistributionPieRingData: [],

        pieRingData: [
            { name: '#5000-6000', value: 15, fill: "#52ACFF"  },
            { name: '#12000-20000', value: 40, fill: "#3DFFDC"  },
            { name: '#10000-11000', value: 40, fill: "#EF7BE3"  },
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

        bar3dDataSource: [
            [
                {
                  category: [
                    { label: "1994" },
                    { label: "1995" },
                    { label: "1996" },
                    { label: "1997" },
                  ]
                }
            ],
            [
                {
                  seriesname: "Hymenoptera",
                  data: [
                    { value: "15622" },
                    { value: "10612" },
                    { value: "15820" },
                    { value: "26723" },
                  ]
                },
                {
                  seriesname: "Diptera",
                  data: [
                    { value: "3622" },
                    { value: "2612" },
                    { value: "5820" },
                    { value: "6723" },
                  ]
                }
            ],
        ],

        stackBarData: [
            { inactive: 25, active: 74, total: 88, name: "MDA-1" },
            { inactive: 53, active: 83, total: 90, name: "MDA-2" },
            { inactive: 45, active: 56, total: 95, name: "MDA-3" },
            { inactive: 33, active: 85, total: 91, name: "MDA-4" },
            { inactive: 35, active: 88, total: 90, name: "MDA-5" },
            { inactive: 25, active: 49, total: 73, name: "MDA-6" },
        ],
        stackBarData2: [
            { female: 90, male: 10, ageRange: "18-25 years" },
            { female: 30, male: 70, ageRange: "26-35 years" },
            { female: 54, male: 46, ageRange: "36-45 years" },
            { female: 22, male: 78, ageRange: "46-55 years" },
            { female: 35, male: 65, ageRange: "56-65 years" },
            { female: 65, male: 35, ageRange: "66-75 years" },
            { female: 51, male: 49, ageRange: "76-85 years" },
        ],

        employeeRecordsByAgeGroupStackBarData2: [],

        dashboardLineData: [
            { count: 17, name: "Bank1", },
            { count: 8, name: "Bank2", },
            { count: 14, name: "Bank3", },
            { count: 28, name: "Bank4", },
            { count: 25, name: "Bank5", },
            { count: 19, name: "Bank6", },
            { count: 30, name: "Bank7", },
            { count: 29, name: "Bank8", },
            { count: 48, name: "Bank9", },
            { count: 51, name: "Bank10", }
        ],


        //  TABLE DATA
        dashboardTableData: [
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

        employeeTableData: [],

        topTenBanksTableData: [
            {
                serialNumber: "1",
                bank: "First Bank",
                amount: "6,000,000",
                total: "68%",
            },
            {
                serialNumber: "2",
                bank: "Zenith Bank",
                amount: "6,000,000",
                total: "51%",
            },
            {
                serialNumber: "3",
                bank: "Access Bank",
                amount: "6,000,000",
                total: "79%",
            },
            {
                serialNumber: "4",
                bank: "GT Bank",
                amount: "6,000,000",
                total: "40%",
            },
            {
                serialNumber: "5",
                bank: "Fidelity Bank",
                amount: "6,000,000",
                total: "40%",
            },
            {
                serialNumber: "6",
                bank: "GT Bank",
                amount: "6,000,000",
                total: "40%",
            },
            {
                serialNumber: "7",
                bank: "GT Bank",
                amount: "6,000,000",
                total: "40%",
            },
            {
                serialNumber: "8",
                bank: "Skey Stone Bank",
                amount: "6,000,000",
                total: "40%",
            },
            {
                serialNumber: "9",
                bank: "Union Bank",
                amount: "6,000,000",
                total: "40%",
            },
            {
                serialNumber: "10",
                bank: "GT Bank",
                amount: "6,000,000",
                total: "40%",
            },
        ],




        // Filter Options.
        ministriesFilterOptions: [
            {label: "Ministry of works", value: "Ministry of works"},
            {label: "Option", value: "Option"},
            {label: "Option", value: "Option"},
            {label: "Option", value: "Option"},
        ],

        serviceProviderFilterOptions: [
            {label: "Soft Alliance", value: "Soft Alliance"},
            {label: "Option", value: "Option"},
            {label: "Option", value: "Option"},
            {label: "Option", value: "Option"},
        ],

        pfaFilterOptions: [
            {label: "PFA", value: "PFA"},
            {label: "Option", value: "Option"},
            {label: "Option", value: "Option"},
            {label: "Option", value: "Option"},
        ],

        stateFilterOptions: [
            {label: "Abuja", value: "FCT Abuja"},
            {label: "Abia", value: "Abia"},
            {label: "Adamawa", value: "Adamawa"},
            {label: "Cross-River", value: "Cross-River"},
            {label: "Enugu", value: "Enugu"},
            {label: "Imo", value: "Imo"},
            {label: "Kano", value: "Kano"},
            {label: "Ondo", value: "Ondo"},
            {label: "Osun", value: "Osun"},
            {label: 'Sokoto', value: 'Sokoto'},
        ],

        payrollPeriodFilterOptions: [
            {label: "07/09/2022", value: "07/09/2022"},
            {label: "Option", value: "Option"},
            {label: "Option", value: "Option"},
            {label: "Option", value: "Option"},
        ],

        statusFilterOptions: [
            {label: "Active", value: "Active"},
            {label: "Inactive", value: "Inactive"},
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


    //  Toggle Theme.
    const toggleTheme = () => {
        const { isLightTheme } = state;
        setState({
            ...state,
            isLightTheme: !isLightTheme,
        });
    };

    //  Switch Event Tabs.
    const switchDashboardTabs = (tabName) => {
        switch (tabName) {
        case "tableTab" :
            setState((prevState) => ({
            ...prevState,
            dashboardSelectedTab: {
                tableTab: true,
                chartTab: false,
            },
            }));
            break;

        default :
            setState((prevState) => ({
            ...prevState,
            dashboardSelectedTab: {
                tableTab: false,
                chartTab: true,
            },
            }));
            break;
        }
    };
    const switchEmployeeTabs = (tabName) => {
        switch (tabName) {
        case "tableTab" :
            setState((prevState) => ({
            ...prevState,
            employeeSelectedTab: {
                tableTab: true,
                chartTab: false,
            },
            }));
            break;

        default :
            setState((prevState) => ({
            ...prevState,
            employeeSelectedTab: {
                tableTab: false,
                chartTab: true,
            },
            }));
            break;
        }
    };
    const switchFinancialTabs = (tabName) => {
        switch (tabName) {
        case "tableTab" :
            setState((prevState) => ({
            ...prevState,
            financialSelectedTab: {
                tableTab: true,
                chartTab: false,
            },
            }));
            break;

        default :
            setState((prevState) => ({
            ...prevState,
            financialSelectedTab: {
                tableTab: false,
                chartTab: true,
            },
            }));
            break;
        }
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
                url: get_all_employee_url,
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




    const handleGetEmployeeData = async () => {

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
                method: "get",
                url: get_all_employee_url,
                data: userData,
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.data.success) {
                const responseData = response.data;
                const { total_employee_count, total_mda, average_age, average_tenure, employee_records, employee_gender, employee_distribution, employee_records_by_ministry, 
                    employee_range, employee_records_by_state, employee_by_age_group } = responseData.data;
                 


                /**
                 * EMPLOYEE SCREEN DATA.
                */
                const employeeCounterCardData = [
                    {
                        title: "Total No. of Employee",
                        number: total_employee_count,
                        icon: HiOutlineUserGroup
                    },
                    {
                        title: "Avg. Employee Age",
                        number: average_age.toFixed(2),
                        icon: HiOutlineUserGroup
                    },
                    {
                        title: "Avg. Employee Tenure",
                        number: average_tenure.toFixed(2),
                        icon: SiPagerduty
                    },
                    {
                        title: "Total No. Of MDA",
                        number: total_mda,
                        icon: MdOutlineHomeRepairService
                    }
                ];

                // Employee Data. (Reformatting Data)
                const employeeRecord = employee_records.map((eachEmployeeRecord, index) => {
                    return { ...eachEmployeeRecord, serialNumber: index + 1 };
                });

                //  Employee Gender. (Reformatting Data)
                const employeeGender = employee_gender.map((eachEmployeeGender, index) => {
                    const colors = ["#268AFF", "#3DFFDC"];
                    return {...eachEmployeeGender, fill: colors[index]}
                });

                //  Employee Distribution. (Reformatting Data)
                const employeeDistribution = [
                    {name: "Civilian", count: employee_distribution.civilian, fill: "#52ACFF"},
                    {name: "Military", count: employee_distribution.military, fill: "#3DFFDC"},
                    {name: "Paramilitary", count: employee_distribution.paramilitary, fill: "#EF7BE3"},
                ]

                //  Employee Salary range. (Reformatting Data)
                let salaryRangeSum = 0;
                employee_range.forEach(value => {
                    salaryRangeSum += value.value;
                });
                const employeeSalaryRange = employee_range.map((eachEmployeeSalaryRange, index) => {
                    const colors = ["#268AFF", "#5A3FFF", "#3DFFDC", "#ADE1FF", "#1ED6FF"];
                    return {
                        amount: eachEmployeeSalaryRange.amount,
                        count: eachEmployeeSalaryRange.value,
                        percentage: ((eachEmployeeSalaryRange.value/salaryRangeSum) * 100).toFixed(2),
                        fill: colors[index]
                    }
                });

                //  Employee By Ministry. (Reformatting Data)
                let minitrySum = 0;
                employee_records_by_state.forEach(value => {
                    minitrySum += value.count;
                });
                const employeeRecordsByMinistry = employee_records_by_ministry.map((eachEmployeeRecordsByMinistry) => {
                    return { 
                        count: eachEmployeeRecordsByMinistry.count,
                        name: eachEmployeeRecordsByMinistry.ministry,
                        percentage: ((eachEmployeeRecordsByMinistry.count/minitrySum) * 100).toFixed(2),
                    };
                });

                //  Employee Records By State & Percentage. (Reformatting Data)
                let stateSum = 0;
                employee_records_by_state.forEach(value => {
                    stateSum += value.count;
                });
                const employeeRecordsByStateTable = employee_records_by_state.map((eachemployeeRecordsByState) => {
                    return { 
                        state: eachemployeeRecordsByState.state_of_resident,
                        count: eachemployeeRecordsByState.count,
                        percentage: ((eachemployeeRecordsByState.count/stateSum) * 100).toFixed(2),
                    };
                });

                //  Employee Records By Age Group. (Reformatting Data)
                const employeeRecordsByAgeGroup = employee_by_age_group.map((eachemployeeRecordsByAgeGroup) => {
                    return {
                        ageRange: eachemployeeRecordsByAgeGroup.age_range, 
                        male: eachemployeeRecordsByAgeGroup.male, 
                        female: eachemployeeRecordsByAgeGroup.female,
                    };
                });
                
                console.log("EMPLOYEE_DATA::: ", responseData.data);
                


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  EMPLOYEE SCREEN DATA.
                    employeeCounterCardData: employeeCounterCardData,
                    employeeTableData: employeeRecord,
                    employeeGenderPieData: employeeGender,
                    employeeDistributionPieRingData: employeeDistribution,
                    employeeSalaryRangePieData: employeeSalaryRange,
                    employeeRecordsByMinistryLineData: employeeRecordsByMinistry,
                    // employeeRecordsByStateMapData: employeeRecordsByState,
                    employeeRecordsByStateTableData: employeeRecordsByStateTable,
                    employeeRecordsByAgeGroupStackBarData2: employeeRecordsByAgeGroup,
                    isLoading: false,
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
            switchDashboardTabs: switchDashboardTabs,
            switchEmployeeTabs: switchEmployeeTabs,
            switchFinancialTabs: switchFinancialTabs,
            
            updateAuthAndLoggedUser: updateAuthAndLoggedUser,
            handleInputChange: handleInputChange,


            handleShowPassword: handleShowPassword,
            handleLoginUser: handleLoginUser,

            handleGetEmployeeData: handleGetEmployeeData,

            handleGetData: handleGetData,

        }}>
            { props.children }
        </AppStoreContext.Provider>
    );
};


export { AppStoreContext };
export default AppContextProvider;