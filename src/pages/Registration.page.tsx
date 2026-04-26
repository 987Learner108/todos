import { useState } from "react";
//import axios from "axios";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Registration = () => {
  interface FormDataType {
    name: string;
    email: string;
    password: string;
    gender: string;
    age: string;
  }

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    gender: "",
    age: "",
    email: "",
    password: "",
  });
  const [Loading, setLoading] = useState<boolean>(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);

  //     const res = await axios.post(
  //       "http://localhost:5000/api/register",
  //       formDate,
  //     );

  //     console.log("Response:", res.data);
  //     alert("User registered successfully");
  //   } catch (err) {
  //     console.error(err);
  //     alert("Error sending data");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <form
      //onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 space-y-4 bg-white rounded-xl shadow"
    >
      <h2 className="text-xl font-bold">Register</h2>

      <label htmlFor="name" className="text-2xl">Name:</label>
      <input
        name="name"
        id = "name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
      />
      <input
        name="email"
        type="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={formData.password}
        className="w-full p-2 border rounded-lg"
      />
      <button
        type="submit"
        disabled={Loading}
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        {Loading ? "submitting" : "submit"}
      </button>
    </form>
  );
};

export default Registration;
