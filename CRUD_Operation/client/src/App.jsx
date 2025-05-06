import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleUserDataSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage("");
  
    const { username, email, password, phone, image } = formData;
  
    if (!username || !email || !password || !phone || !image) {
      setError("All fields are required");
      setLoading(false);
      return;
    }
  
    try {
      // Step 1: Register the user
      const userResponse = await axios.post(
        "http://localhost:8000/api/users/register",
        { username, email, password, phone }
      );
      const newUser = userResponse.data;
  
      // Step 2: Upload the image
      const formDataToSend = new FormData();
      formDataToSend.append("image", image);
      formDataToSend.append("userId", newUser._id); // Optional if server needs to associate
  
      const imageResponse = await axios.post(
        "http://localhost:8000/api/users/upload",
        formDataToSend
      );
      console.log("imageResponse.data.success ",imageResponse.data);
      
  
      if (imageResponse.status===200) {
        const updatedUser = { ...newUser, image: imageResponse.data.filename };
  
        // Step 3: Add to local state directly without refetch
        setUsers((prevUsers) => [...prevUsers, updatedUser]);
  
        setSuccessMessage("User created successfully");
        setFormData({
          username: "",
          email: "",
          password: "",
          phone: "",
          image: null,
        });
      } else {
        throw new Error("Image upload failed");
      }
    } catch (err) {
      setError("Error occurred: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };
  

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (err) {
      setError("Error occurred: " + err.response?.data?.message || err.message);
    }
  };

  // ✅ Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        setError("Failed to fetch users: " + error.message);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className="min-w-full">
      <div className="p-4 ">
        <h2 className="text-2xl font-semibold mb-4">Register New User</h2>

        <form onSubmit={handleUserDataSubmit} className="mb-6 max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex gap-2">
              <label className="block text-sm font-medium">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="flex gap-2">
              <label className="block text-sm font-medium">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="flex gap-2">
              <label className="block text-sm font-medium">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="flex gap-2">
              <label className="block text-sm font-medium">Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="flex gap-2">
              <label className="block text-sm font-medium">
                Profile Image:
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>

        {error && <div className="text-red-500">{error}</div>}
        {successMessage && (
          <div className="text-green-500">{successMessage}</div>
        )}

        <h2 className="text-2xl font-semibold mt-8 mb-4">User List</h2>

        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Username</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Phone</th>
              <th className="px-4 py-2 border border-gray-300">Image</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user,idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.username}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.phone}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.image ? (
                      <img
                        src={`http://localhost:8000/uploads/${user.image}`}
                        alt="User"
                        className="h-12 w-12 object-cover rounded-full mx-auto"
                      />
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 flex space-x-2">
                    <button
                      className="px-4 py-2 bg-yellow-400 text-white rounded-md"
                      onClick={() =>
                        alert("Edit functionality not implemented")
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded-md"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-2 text-center border border-gray-300"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
