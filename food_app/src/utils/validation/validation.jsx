// // export const validation = (name, email, password, number) => {
// //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email || !password || !number || !name  ) {
//         return "All fields are required";
//     }

//     if (number.length !== 10) {
//         return "Number should be 10 digits";
//     }

//     if (!emailPattern.test(email)) { 
//         return "Please enter a valid email address";
//     }

//     if (name.length < 5 || name.length > 15) { 
//         return "Name length should be between 5 and 15";
//     }
// // };



export const validationLogin = {

    loginValidation : function (email,password){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password  ) {
            return "All fields are required";
        }
    
        if (!emailPattern.test(email)) { 
            return "Please enter a valid email address";
        }

    },

    signupValidation : function (name, email, password, number){

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password || !number || !name  ) {
            return "All fields are required";
        }
    
        if (number.length !== 10) {
            return "Number should be 10 digits";
        }
    
        if (!emailPattern.test(email)) { 
            return "Please enter a valid email address";
        }
    
        if (name.length < 5 || name.length > 15) { 
            return "Name length should be between 5 and 15";
        }


    }



}
