import { Route, Routes } from "react-router-dom";
import Login from "../UserAuth/Login";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Page/Dashboard";
import UserList from "../Page/UserList";
import AddUser from "../Page/AddUser";
import NoticeList from "../Page/NoticeList";
import AddNotice from "../Page/AddNotice";
import UpdateNotice from "../Page/UpdateNotice";
import ChangePassword from "../Page/ChangePassword";
import AddMember from "../Page/AddMember";
import MemberList from "../Page/MemberList";
import UpdateMember from "../Page/UpdateMember";
import CreateExecutiveBody from "../Page/CreateExecutiveBody";
import ExecutiveBody from "../Page/ExecutiveBody";
import UpdateExecutiveBody from "../Page/UpdateExecutiveBody";
import AllMessages from "../Page/AllMessages";
import UpdateContact from "../Page/UpdateContact";
import UploadAlbum from "../Page/Albums/UploadAlbum";
import AlbumList from "../Page/Albums/AlbumList";
import UpdateAlbum from "../Page/Albums/UpdateAlbum";
import UploadVideo from "../Page/Videos/UploadVideo";
import VideoList from "../Page/Videos/VideoList";
import UpdateVideo from "../Page/Videos/UpdateVideo";
import UpdateLink from "../Page/Links/UpdateLink";
import LinksList from "../Page/Links/LinksList";
import AddLink from "../Page/Links/AddLink";
import AddForm from "../Page/Forms/AddForm";
import FormList from "../Page/Forms/FormList";
import UpdateForm from "../Page/Forms/UpdateForm";
import AddEvent from "../Page/Events/AddEvent";
import EventList from "../Page/Events/EventList";
import UpdateEvent from "../Page/Events/UpdateEvent";

export default function MainRouters() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="add_user" element={<AddUser />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="user_list" element={<UserList />} />

          {/************************************** Events Routes Start Here **************************************/}

          <Route path="add_events" element={<AddEvent />} />
          <Route path="event/:slug" element={<UpdateEvent />} />
          <Route path="events_list" element={<EventList />} />

          {/************************************** Events Routes End **************************************/}

          <Route path="add_album" element={<UploadAlbum />} />
          <Route path="album_list" element={<AlbumList />} />
          <Route path="album/:albumId" element={<UpdateAlbum />} />

          <Route path="add_notice" element={<AddNotice />} />
          <Route path="notice_list" element={<NoticeList />} />
          <Route path="notice/:noticeId" element={<UpdateNotice />} />
          <Route path="add-member" element={<AddMember />} />
          <Route path="members" element={<MemberList />} />
          <Route path="member/:id" element={<UpdateMember />} />
          <Route path="set-committee" element={<CreateExecutiveBody />} />
          <Route path="committee-list" element={<ExecutiveBody />} />
          <Route
            path="committee-list/:slug"
            element={<UpdateExecutiveBody />}
          />
          <Route path="all-messages" element={<AllMessages />} />
          <Route path="update_contact" element={<UpdateContact />} />

          {/* Forms Routes Start */}
          <Route path="upload_form" element={<AddForm />} />
          <Route path="forms" element={<FormList />} />
          <Route path="form/:formId" element={<UpdateForm />} />
          {/* Forms Routes End */}

          {/* Links Routes Start */}
          <Route path="add_link" element={<AddLink />} />
          <Route path="links" element={<LinksList />} />
          <Route path="link/:linkId" element={<UpdateLink />} />
          {/* Links Routes End */}

          {/* Videos Routes Start */}
          <Route path="/upload_video" element={<UploadVideo />} />
          <Route path="/video_list" element={<VideoList />} />
          <Route path="/video/:slug" element={<UpdateVideo />} />
          {/* Videos Routes End */}
        </Route>
        {/* <Route path="*" element={<ErrorPage />} replace /> */}
      </Routes>
    </>
  );
}
