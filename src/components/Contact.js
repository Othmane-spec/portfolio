import React, { useState } from "react";
import "../css/Contact.css";
import emailjs, { sendForm } from 'emailjs-com';
import { db } from "../components/firebase";
import { addDoc, collection } from "firebase/firestore";

function Contact() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // emailjs.sendForm('service_hyeqks5','template_gelairf', e.target.value,"user_42nSoIKLIMRhxIRemeeeA" 
    // ).then(res => {
    //   console.log(res);
    // }).catch(err => console.log(err));

    // const colRef = collection(db, "form");

    // getDocs(colRef)
    //   .then((snapshot) => {
    //     let form = [];
    //     snapshot.docs.forEach((doc) => {
    //       form.push({ ...doc.data(), id: doc.id });
    //     });
    //     console.log(form);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    if(name.length>0
      && lastname.length>0
      && email.length>0
      && phone.length>6
      && message.length>0){

        // try {
          const docRef =  addDoc(collection(db, "form"), {
            name: name,
            lastname: lastname,
            email: email,
            phone: phone,
            message: message,
          })
          // console.log("Document written with ID: ", docRef.id);
          .then(() => {
            alert("Message has been submited ")
          })
          .catch((error) => {
             alert(error.message)
          });
          
          setName('')
          setLastname('')
          setEmail('')
          setPhone('')
          setMessage('')



        // } catch (e) {
        //   console.error("Error adding document: ", e);
           
        // }
      }
         
    // setName("");
    // setLastname("");
    // setPhone("");
    // setEmail("");
    // setMessage("");
      
  };

  return ( <div>
  <section className="contact" id="Contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-info">
            <h3 className="title">Contactez-nous</h3>
            <p className="text">
            Si vous avez vu mon potentiel ou si vous souhaitez me parler, n'hésitez pas à m'envoyer un message.
            </p>
            <div className="information-wrap">
              <div className="information">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <p className="info-text">92 Boulvard Casablanca, NR 11553</p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <i className="bi bi-send-fill"></i>
                </div>
                <p className="info-text">essaimeko@gmail.com</p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <p className="info-text">+212 707708162</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="title">Contacter Moi</h3>
            <div className="row">
              <input
                type="text"
                className="contact-input"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="contact-input"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <div className="row">
              <input
                type="text"
                className="contact-input"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                className="contact-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="row">
              <textarea
                name="message"
                className="contact-input textarea"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <input
              
              className="btn"
              type="submit"
              onClick={handleSubmit}
            >
              
            </input>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Contact;
