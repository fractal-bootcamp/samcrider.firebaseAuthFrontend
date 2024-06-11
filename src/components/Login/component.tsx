import { useState } from "react";
import { LoginProps, FormData } from "./types";

const Login = ({ login }: LoginProps) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login(formData);
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
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
