import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg'
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

    return (
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={contactImg} alt="Contact Us" />
                </Col>
                <Col md={6}>
                  <h2>Get In Touch</h2>
                  <form 
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/dav.invernizzi@gmail.com"
                    method="POST"
                  >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        placeholder="Name"
                        {...register("name", {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-primary-500">
                          {errors.name.type === "required" && "This field is required."}
                          {errors.name.type === "maxLength" &&
                            "Max length is 20 char."}
                        </p>
                      )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        placeholder="Surname"
                        {...register("surname", {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                      {errors.surname && (
                        <p className="mt-1 text-primary-500">
                          {errors.surname.type === "required" && "This field is required."}
                          {errors.surname.type === "maxLength" &&
                            "Max length is 20 char."}
                        </p>
                      )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        {...register("email", {
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-primary-500">
                          {errors.email.type === "required" &&
                            "This field is required."}
                          {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                      )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                      <input 
                        type="tel" 
                        placeholder="Phone No." 
                        {...register("email", {
                          required: false,
                        })}
                      />
                      </Col>
                      <Col size={12} className="px-1">
                      <textarea 
                      rows="6" 
                      placeholder="Message" 
                      {...register("message", {
                        required: true,
                        maxLength: 2000,
                      })}
                      />
                      {errors.message && (
                        <p className="mt-1 text-primary-500">
                          {errors.message.type === "required" &&
                            "This field is required."}
                          {errors.message.type === "maxLength" &&
                            "Max length is 2000 char."}
                        </p>
                      )}
                      <button type="submit">SUBMIT</button>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </Container>
        </section>

    )
}