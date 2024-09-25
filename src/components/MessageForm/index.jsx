import { useDispatch, useSelector } from "react-redux";
import {
  SUBMIT_CONTACT_FORM_SUCCESS,
  submitContactForm,
} from "../../redux/actions/contactAction";
import { useState } from "react";

function MessageForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitting = useSelector((state) => state.contact.submitting);
  const success = useSelector((state) => state.contact.success);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm({ name, email, message });
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    dispatch(submitContactForm({ name, email, message }));
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      dispatch({ type: SUBMIT_CONTACT_FORM_SUCCESS });
    }, 2000);
  };

  const validateForm = ({ name, email, message }) => {
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    if (!name || name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!message || message.trim().length > 1000) {
      errors.message = "Message cannot exceed 1000 characters.";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <nav>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
      </nav>
      <textarea
        id="message"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {errors.message && <p>{errors.message}</p>}
      <button type="submit" disabled={submitting}>
        {submitting ? "Sending ..." : "Submit"}
      </button>
      {success && <p>Thank you for your message! We will get in touch soon.</p>}
    </form>
  );
}

export default MessageForm;
