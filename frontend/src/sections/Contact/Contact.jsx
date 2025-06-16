import { useRef, useState } from "react";
import axios from 'axios'
import TitleHeader from "../../components/TitleHeader";
import { toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { fullName, email, message } = form;
      const sendres = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact/sendmail`, {
        fullName, email, message
      })
      console.log(sendres);
      if (sendres?.status == 200) {
        toast.success("Email sent successfully")
      }

    }
    catch (err) {
      console.log("Error while sending mail", err);
      toast.error("Error while sending mail")
    }
    setLoading(false);
  };
  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 15,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    //    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <section id="contact" className="flex-center section-padding relative z-10 mt-36">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            {/* <Tilt options={defaultOptions} className=''>
              <div className="w-full h-[70%] hover:cursor-grab rounded-3xl overflow-hidden">
                <img src={contact} alt="contact" className="h-96 w-full" />
              </div>
            </Tilt> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
