import * as Yup from "yup";
 export const signUpSchema = Yup.object({
    username: Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    subject: Yup.string().min(3).max(50).required("Please Enter Subject"),
    comment: Yup.string().min(10).required("Please Enter Comment"),
 });