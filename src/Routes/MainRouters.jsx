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
import UpdateAlbum from "../Page/UpdateAlbum";
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
import AddJournal from "../Page/AddJournal";
import JournalList from "../Page/JournalList";
import UpdateJournal from "../Page/UpdateJournal";

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
          <Route path="add_events" element={<AddEvent />} />
          <Route path="event/:slug" element={<UpdateEvent />} />
          <Route path="events_list" element={<EventList />} />
          <Route path="add_album" element={<AddAlbum />} />
          <Route path="album_list" element={<AlbumList />} />
          <Route path="album/:slug" element={<UpdateAlbum />} />
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
          <Route path="add_journal" element={<AddJournal />} />
          <Route path="journals" element={<JournalList />} />
          <Route path="journal/:journalId" element={<UpdateJournal />} />
        </Route>
        {/* <Route path="*" element={<ErrorPage />} replace /> */}
      </Routes>
    </>
  );
}
