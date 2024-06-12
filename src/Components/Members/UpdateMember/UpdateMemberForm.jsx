import { Button, Stack, useMediaQuery } from "@mui/material";
import { useState,useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate,useParams } from "react-router-dom";
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
  const [mailingAddress, setMailingAddress] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    loadMember();
  }, []);

  const loadMember = async () => {
    try {
      const { data } = await axios.get(`/member/${params.memberId}`);
      setName(data.name)
      setDesignation(data.designation)
      setWorkPlace(data.workPlace)
      setEmail(data.email)
      setPhone(data.phone)
      setMailingAddress(data.mailingAddress)
      setProfilePhoto(data.profilePhoto[0].url)
      console.log(data.profilePhoto[0].url);
    } catch (err) {
      toast.error("Failed to load event data");
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
          handleImageUpload={"handleImageUpload"}
          image={profilePhoto}
          setImage={setProfilePhoto}
        />
      </Stack>
      <Button variant="contained" color="primary" onClick={"handleCreateMember"}>
        Update
      </Button>
    </>
  );
}
