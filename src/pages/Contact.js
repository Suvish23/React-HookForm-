import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
function Contact() {

  const schema = yup.object().shape({
    Name:yup.string().required(),
    PhoneNumber:yup.number().integer().required(),
    Age:yup.number().positive().min(18).integer().required(),
    Email:yup.string().email().required(),
  })
  const {register, handleSubmit, formState:{errors}} = useForm( {resolver : yupResolver(schema)});
  const onSubmit = (data) =>{
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <input type="text" placeholder='Name...' {...register("Name")}/>
       <p>{errors.Name?.message}</p>
       <input type="text" placeholder='phoneNumber...' {...register("PhoneNumber")}/>
       <input type="number" placeholder='Age...' {...register("Age")}/>
       <input type="text" placeholder='Email...' {...register("Email")}/>  
     <input type="submit" />
    </form>
  )
}

export default Contact