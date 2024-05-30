import { Route, Routes } from "react-router-dom";
import Login from "../UserAuth/Login";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Page/Dashboard";
import UserList from "../Page/UserList";
import AddUser from "../Page/AddUser";
import EventList from "../Page/EventList";
import AddEvent from "../Page/AddEvent";
import AddAlbum from "../Page/AddAlbum";
import AlbumList from "../Page/AlbumList";
import NoticeList from "../Page/NoticeList";
import AddNotice from "../Page/AddNotice";
import UpdateEvent from "../Page/UpdateEvent";
import AddComittee from "../Page/AddComittee";
import ComitteeList from "../Page/ComitteeList";

export default function MainRouters() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="add_user" element={<AddUser />} />
          <Route path="user_list" element={<UserList />} />
          <Route path="add_events" element={<AddEvent />} />
          <Route path="event/:slug" element={<UpdateEvent />} />
          <Route path="events_list" element={<EventList />} />
          <Route path="add_album" element={<AddAlbum />} />
          <Route path="album_list" element={<AlbumList />} />
          <Route path="add_notice" element={<AddNotice />} />
          <Route path="notice_list" element={<NoticeList />} />
          <Route path="committee-list" element={<ComitteeList />} />
          <Route path="add-committee" element={<AddComittee />} />
        </Route>
        {/* <Route path="*" element={<ErrorPage />} replace /> */}
      </Routes>
    </>
  );
}
