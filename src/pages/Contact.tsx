import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";

interface FormState {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const formRef = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation("idle");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicID = import.meta.env.VITE_APP_EMAILJS_PUBLIC_ID;

    if (formRef.current) {
      emailjs
        .sendForm(serviceID, templateID, formRef.current, publicID)
        .then(() => {
          setIsLoading(false);
          setTimeout(() => {
            setCurrentAnimation('idle')
            setForm({ name: '', email: '', message: '' });
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
          setCurrentAnimation("idle");
        });
    }
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          action=""
          className="w-full flex flex-col gap-7 mt-14"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label htmlFor="" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="John"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label htmlFor="" className="font-semibold">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="input"
            placeholder="John@example.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label htmlFor="" className="font-semibold">
            Your Message
          </label>
          <textarea
            name="message"
            className="textarea"
            placeholder="Let me know how I can help you!"
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending" : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              scale={[0.5, 0.5, 0.5]}
              rotation={[12.6, -0.6, 0]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;
