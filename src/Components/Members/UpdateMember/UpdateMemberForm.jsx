import { Button, Stack, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import UpdateMemberInfo from "./Form/UpdateMemberInfo";
import UpdateMemberPhoto from "./Form/UpdateMemberPhoto";

export default function UpdateMemberForm() {
  const forBelow800 = useMediaQuery("(max-width:800px)");
  // State hooks for each input field
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [image, setImage] = useState(null);
  const [mailingAddress, setMailingAddress] = useState("");
  const [removePhoto, setRemovePhoto] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    loadMember();
  }, []);

  const loadMember = async () => {
    try {
      const { data } = await axios.get(`/member/${params.id}`);
      setName(data.name);
      setDesignation(data.designation);
      setWorkPlace(data.workPlace);
      setEmail(data.email);
      setPhone(data.phone);
      setMailingAddress(data.mailingAddress);
      if (data.profilePhoto && data.profilePhoto.length > 0) {
        setProfilePhoto(data.profilePhoto[0].url);
      }
    } catch (err) {
      toast.error("Failed to load event data");
    }
  };
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setProfilePhoto(URL.createObjectURL(e.target.files[0]));
      setRemovePhoto(false);
    }
  };
  const handleRemoveImage = () => {
    setImage(null);
    setProfilePhoto("");
    setRemovePhoto(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("designation", designation);
      formData.append("workPlace", workPlace);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("mailingAddress", mailingAddress);
      if (image) {
        formData.append("profilePhoto", image);
      }
      formData.append("removePhoto", removePhoto); // Add the removePhoto flag

      const { data } = await axios.put(`/member/${params.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Member updated successfully");
      navigate("/members");
    } catch (error) {
      toast.error("Failed to update member");
    }
  };

  return (
    <>
      <Stack
        spacing={5}
        direction={forBelow800 ? "column-reverse" : "row"}
        sx={{ mt: "40px", mb: "40px" }}
      >
        <UpdateMemberInfo
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
        <UpdateMemberPhoto
          handleImageUpload={handleImageChange}
          image={profilePhoto}
          setImage={setProfilePhoto}
          handleRemoveImage={handleRemoveImage}
        />
      </Stack>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Update
      </Button>
    </>
  );
}
