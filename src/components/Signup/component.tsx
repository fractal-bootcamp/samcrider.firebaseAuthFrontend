import { useState } from "react";
import { SignupProps, FormData } from "./types";

const Signup = ({ signup }: SignupProps) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signup(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label>email</label>
        <input
          type="text"
          value={formData.email}
          onChange={({ target }) =>
            setFormData({ ...formData, email: target.value })
          }
        />
        <label>password</label>
        <input
          type="text"
          value={formData.password}
          onChange={({ target }) =>
            setFormData({ ...formData, password: target.value })
          }
        />
        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default Signup;
