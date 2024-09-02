import {
  AlbumList,
  Dashboard,
  EventList,
  MemberList,
  NoticeList,
  UserList,
  JournalList,
  Users,
  UpdateContact,
  Form,
} from "../../assets/IconSet";

const navConfig = ({ pathname }) => [
  {
    title: "Overview",
    icon: (
      <Dashboard color={pathname === "/" ? "#00AE60" : "#637381"} size={20} />
    ),
    items: [
      {
        title: "Dashboard",
        link: "/",
      },
    ],
  },
  {
    title: "Contact Info",
    icon: (
      <UpdateContact
        color={pathname === "/update_contact" ? "#00AE60" : "#637381"}
        size={20}
      />
    ),
    items: [
      {
        title: "Update Contact",
        link: "/update_contact",
      },
    ],
  },
  {
    title: "Events",
    icon: (
      <EventList
        color={
          pathname.startsWith("/add_events") ||
          pathname.startsWith("/events_list")
            ? "#00AE60"
            : "#637381"
        }
        size={20}
      />
    ),
    items: [
      {
        title: "Add Events",
        link: "/add_events",
      },
      {
        title: "Events List",
        link: "/events_list",
      },
    ],
  },
  {
    title: "Album",
    icon: (
      <AlbumList
        color={
          pathname.startsWith("/add_album") ||
          pathname.startsWith("/album_list")
            ? "#00AE60"
            : "#637381"
        }
        size={20}
      />
    ),
    items: [
      {
        title: "Add Album",
        link: "/add_album",
      },
      {
        title: "Album List",
        link: "/album_list",
      },
    ],
  },
  {
    title: "Notice",
    icon: (
      <NoticeList
        color={
          pathname.startsWith("/add_notice") ||
          pathname.startsWith("/notice_list")
            ? "#00AE60"
            : "#637381"
        }
        size={20}
      />
    ),
    items: [
      {
        title: "Add Notice",
        link: "/add_notice",
      },
      {
        title: "Notice List",
        link: "/notice_list",
      },
    ],
  },
  {
    title: "Journals",
    icon: (
      <JournalList
      color={
        pathname.startsWith("/add_journal") ||
        pathname.startsWith("/journals")
            ? "#00AE60"
            : "#637381"
        }
        size={20}
      />
    ),
    items: [
      {
        title: "Add Journal",
        link: "/add_journal",
      },
      {
        title: "Journal List",
        link: "/journals",
      },
    ],
  },
  {
    title: "Forms",
    icon: (
      <Form
      color={
        pathname.startsWith("/upload_form") ||
        pathname.startsWith("/forms")
            ? "#00AE60"
            : "#637381"
        }
        size={20}
      />
    ),
    items: [
      {
        title: "Upload Form",
        link: "/upload_form",
      },
      {
        title: "Form List",
        link: "/forms",
      },
    ],
  },
  {
    title: "Members",
    icon: (
      <MemberList
        color={
          pathname.startsWith("/add-member") || pathname.startsWith("/members")
            ? "#00AE60"
            : "#637381"
        }
        size={20}
      />
    ),
    items: [
      {
        title: "Add Member",
        link: "/add-member",
      },
      {
        title: "Member List",
        link: "/members",
      },
    ],
  },
  {
    title: "Executive Committee",
    icon: (
      <UserList
        color={
          pathname.startsWith("/set-committee") ||
          pathname.startsWith("/committee-list")
            ? "#00AE60"
            : "#637381"
        }
        size={20}
      />
    ),
    items: [
      {
        title: "Set Committee",
        link: "/set-committee",
      },
      {
        title: "Committee List",
        link: "/committee-list",
      },
    ],
  },
  {
    title: "User",
    icon: (
      <Users
        color={
          pathname.startsWith("/add_user") || pathname.startsWith("/user_list")
            ? "#00AE60"
            : "#637381"
        }
        size={20}
      />
    ),
    items: [
      {
        title: "Add User",
        link: "/add_user",
      },
      {
        title: "User List",
        link: "/user_list",
      },
    ],
  },
];

export default navConfig;
