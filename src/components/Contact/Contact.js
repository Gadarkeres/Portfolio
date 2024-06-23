import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Modal from "../Modal/Modal";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});

  const Submit = (data, e) => {
    e.preventDefault();

    const templateParams = {
      from_name: data.name,
      message: data.email,
      email: data.message,
    };
    setLoading(true);
    emailjs
      .send(
        "service_dsy2vxr",
        "template_ulju5wg",
        templateParams,
        "kSjVQpke0aoNqFL_k"
      )
      .then(
        (res) => {
          setValue("name", "");
          setValue("email", "");
          setValue("mensage", "");
          setLoading(false);
          setOpen(!open);
        },
        (err) => {
          window.alert("Erro:" + err + "tente novamente mais tarde.");
        }
      );
  };

  return (
    <div className="container-contact">
      <div className="title">
        <h2>Gostou do meu perfil? vamos conversar!</h2>
        <p>Costumo responder rapido.</p>
      </div>
      <form onSubmit={handleSubmit(Submit)}>
        <div className="form">
          <div className="name">
            <label htmlFor="nameIn">Seu nome:</label>
            <input
              type="text"
              id="nameIn"
              placeholder="Nome"
              {...register("name", { required: "O nome é obrigatório" })}
            />
            <small>{errors?.name?.message}</small>
          </div>
          <div className="email">
            <label htmlFor="emailIn">Seu E-mail:</label>
            <input
              type="email"
              id="emailIn"
              placeholder="Email"
              {...register("email", { required: "O email é obrigatório" })}
            />
            <small>{errors?.email?.message}</small>
          </div>
          <div className="msg">
            <label htmlFor="textareaIn">Sua mensagem</label>
            <textarea
              name="textarea"
              id="textareaIn"
              cols="30"
              rows="10"
              placeholder="Escreva sua mensagem..."
              {...register("mensage", {
                required: "a mensagem é obrigatória",
                minLength: {
                  value: 20,
                  message: "Por favor digite pelomenos 20 caracteres.",
                },
              })}
            ></textarea>
            <small>{errors?.mensage?.message}</small>
          </div>
          {loading ? (
            <input
              type="submit"
              style={{ opacity: "0.7", cursor: "not-allowed" }}
              value="Enviando.."
              disabled={true}
            />
          ) : (
            <input type="submit" className="submit" value="Enviar" />
          )}
        </div>
      </form>
      <Modal
        open={open}
        setOpen={setOpen}
        title={"Mensagem enviada com sucesso!"}
        paragraph={
          "Obrigado por entrar em contato, te responderei assim que possivel."
        }
      ></Modal>
    </div>
  );
};

export default Contact;
