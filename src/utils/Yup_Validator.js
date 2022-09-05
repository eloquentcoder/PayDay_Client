import * as yup from 'yup'; // for everything

class YupValidator {


    /*=====================================================================================*/
    /*===================================== FOR USERS =====================================*/
    static userSignup = yup.object().shape({
        phone: yup.string().required("Phone is required."),
        email: yup.string().required("Username is required.").email("Email must be a valid email."),
        password: yup.string().required("Password is required.").min(6, "Password must be at least 6 characters."),
    });

    static userLogin = yup.object().shape({
        email: yup.string().required("Email is required.").email("Email must be a valid email."),
        password: yup.string().required("Password is required."),
    });



    /*=====================================================================================*/
    /*=================================== FOR PODCAST =====================================*/
    static podcastValidation = yup.object().shape({
        title: yup.string().required("Title is required."),
        contestantA: yup.string(),
        contestantB: yup.string(),
        sportsName: yup.string().required("Sports name is required."),
        leagueName: yup.string().required("League name is required."),
        leagueAbbrev: yup.string(),
        duration: yup.string().required("Duration is required."),
        punters: yup.array().min(1, "You must have at least one punter.").required("Punetrs names is required."),
        // featuredVideoFile: yup.string().required("Featured video file is required."),
        // featuredImageFile: yup.string().required("Featured image file is required."),
    });

}

export default YupValidator;