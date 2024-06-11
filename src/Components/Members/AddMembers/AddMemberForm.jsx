import { Button, Stack, useMediaQuery } from "@mui/material";
import AddMemberPhoto from "./Form/AddMemberPhoto";
import AddMemberInfo from "./Form/AddMemberInfo";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddMemberForm() {
  const forBelow800 = useMediaQuery("(max-width:800px)");
  // State hooks for each input field
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  const handleCreateMember = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("designation", designation);
      formData.append("workPlace", workPlace);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("mailingAddress", mailingAddress);
      if (profilePhoto) {
        formData.append("profilePhoto", profilePhoto); // Append the file directly
      }

      const { data } = await axios.post("/add-member", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Member Create Succesfully");
        setName("");
        setDesignation("");
        setWorkPlace("");
        setEmail("");
        setPhone("");
        setMailingAddress("");
        setProfilePhoto(null);
        navigate("/members");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Stack
        spacing={5}
        direction={forBelow800 ? "column-reverse" : "row"}
        sx={{ mt: "40px", mb: "40px" }}
      >
        <AddMemberInfo
          name={name}
          setName={setName}
          designation={designation}
          setDesignation={setDesignation}
          workPlace={workPlace}
          setWorkPlace={setWorkPlace}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          mailingAddress={mailingAddress}
          setMailingAddress={setMailingAddress}
        />
        <AddMemberPhoto
          handleImageUpload={handleImageUpload}
          image={profilePhoto}
          setImage={setProfilePhoto}
        />
      </Stack>
      <Button variant="contained" color="primary" onClick={handleCreateMember}>
        Create
      </Button>
    </>
  );
}
