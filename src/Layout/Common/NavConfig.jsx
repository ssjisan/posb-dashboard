import {
  AddAlbum,
  AddEvent,
  AddNotice,
  AddUser,
  AlbumList,
  Dashboard,
  EventList,
  AddMember,
  MemberList,
  NoticeList,
  UserList,
} from "../../assets/IconSet";

const navConfig = ({ pathname }) => [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        link: "/",
        icon: (
          <Dashboard
            color={pathname === "/" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
    ],
  },
  {
    title: "Events",
    items: [
      {
        title: "Add Events",
        link: "/add_events",
        icon: (
          <AddEvent
            color={pathname === "/add_events" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
      {
        title: "Events List",
        link: "/events_list",
        icon: (
          <EventList
            color={pathname === "/events_list" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
    ],
  },
  {
    title: "Album",
    items: [
      {
        title: "Add Album",
        link: "/add_album",
        icon: (
          <AddAlbum
            color={pathname === "/add_album" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
      {
        title: "Album List",
        link: "/album_list",
        icon: (
          <AlbumList
            color={pathname === "/album_list" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
    ],
  },
  {
    title: "Notice",
    items: [
      {
        title: "Add Notice",
        link: "/add_notice",
        icon: (
          <AddNotice
            color={pathname === "/add_notice" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
      {
        title: "Notice List",
        link: "/notice_list",
        icon: (
          <NoticeList
            color={pathname === "/notice_list" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
    ],
  },
  {
    title: "Members",
    items: [
      {
        title: "Add Member",
        link: "/add-member",
        icon: (
          <AddMember
            color={pathname === "/add-member" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
      {
        title: "Member List",
        link: "/members",
        icon: (
          <MemberList
            color={pathname === "/members" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
    ],
  },
  {
    title: "Executive Committee",
    items: [
      {
        title: "Set Committee",
        link: "/set-committee",
        icon: (
          <AddUser
            color={pathname === "/set-committee" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
      {
        title: "Committee List",
        link: "/committee-list",
        icon: (
          <UserList
            color={pathname === "/committee-list" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
    ],
  },
  {
    title: "User",
    items: [
      {
        title: "Add User",
        link: "/add_user",
        icon: (
          <AddUser
            color={pathname === "/add_user" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
      {
        title: "User List",
        link: "/user_list",
        icon: (
          <UserList
            color={pathname === "/user_list" ? "#00AE60" : "#637381"}
            size={24}
          />
        ),
      },
    ],
  },
];

export default navConfig;
