import "./FormStyles.css";
import {useFormik} from "formik";
import { signUpSchema } from "../schemas";


const initialValues = {
    username: "",
    email: "",
    subject: "",
    comment: "",

};
const Form = () =>  {
   
    const{values, errors, touched, handleBlur, handleSubmit, handleChange} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {

        }

    })
  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input 
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {(errors.username && touched.username) ? <p className="form-errors">{errors.username}</p> : null}
            <label>Email</label>
            <input 
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {(errors.email && touched.email) ? <p className="form-errors">{errors.email}</p> : null}
            <label>Subject</label>
            <input 
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
            />
             {(errors.subject && touched.subject) ? <p className="form-errors">{errors.subject}</p> : null}
            <label>Comment</label>
            <textarea 
                name="comment"
                rows= "6" 
                placeholder="Please Type Your Massage Here"
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
            />
             {(errors.comment && touched.comment) ? <p className="form-errors">{errors.comment}</p> : null}
            
                
            <button className="btn">Submit</button>
                
            
        </form>
    </div>
  )
}

export default Form;