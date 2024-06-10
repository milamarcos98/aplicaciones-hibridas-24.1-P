import React, {useRef} from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const Form = () => {

    const schema = yup.object().shape({
        name: yup.string().required("name is required"),
        email:yup.email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "password distintos").required()
    })

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
      } = useForm({resolver: yupResolver(schema)});


//   const {
//     handleSubmit,
//     register,
//     watch,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       nombre: "",
//       email: "",
//       date: "",
//       password: "",
//       confirmPassword: "",
//       pais: "co",
//       aceptarTerms: false,
//     },
//   });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  console.log(errors);

  const password = useRef(null);
  password.current = watch("password")

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          {...register("nombre", {
            required: { value: true, message: "Nombre es required" },
            maxLength: 20,
            minLength: 4,
          })}
          type="text"
          name="nombre"
        />
        {errors.nombre?.type === "required" && (
          <span>{errors.nombre.message}</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre debe tener mas de 4 caracteres</span>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" {...register("email", {
            required: { value: true, message: "Email es required" },
            pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Correo no valido"
            }
          })} />
          {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Fecha de nacimiento:</label>
        <input type="date" name="date" {...register("date", {
            required: { value: true, message: "Date es required" },
            validate: (value) => {
                const fechaNacimiento = new Date(value);
                const fechaActual = new Date();
                const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                return edad >=18 || "Debes ser mayor de edad";
            }
          })}/>
          {errors.date && <span>{errors.date.message}</span>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" name="password" {...register("password", {
            required: { value: true, message: "Password es required" },
            minLength: {
                value: 6,
                message: "Debe ser mayor a 6 caracteres"
            }
          })}/>
           {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label>Confirmar contraseña:</label>
        <input type="password" name="confirmPassword"  {...register("confirmPassword", {
            required: { value: true, message: "confirmPassword es required" },
            minLength: {
                value: 6,
                message: "Debe ser mayor a 6 caracteres"
            },
            validate: (value) =>
            value === password.current || "Las password son distintas"
          })}/>
           {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </div>
      <div>
        <label>Pais:</label>
        <select name="pais" id="pais">
          <option value="ar">Argentina</option>
          <option value="co">Colombia</option>
          <option value="mx">Mexico</option>
          <option value="vz">Venezuela</option>
        </select>
      </div>
      <div>
        <input type="checkbox" name="aceptarTerms" />
        <label>Acepto terminos y condiciones</label>
      </div>
      <button type="submit">Enviar</button>
      <h3>Hello {watch("nombre")}</h3>
      <pre style={{width: "400px"}}> {JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
};
export default Form;
