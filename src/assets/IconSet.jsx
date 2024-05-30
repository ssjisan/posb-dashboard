import PropTypes from "prop-types";

export const Dashboard = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V19.9C2.5 21.4 3.14 22 4.73 22H8.77C10.36 22 11 21.4 11 19.9Z"
          fill={color}
        />
        <path
          opacity="0.4"
          d="M21.5 19.64V15.36C21.5 14.06 20.5 13 19.27 13H15.23C14 13 13 14.06 13 15.36V19.64C13 20.94 14 22 15.23 22H19.27C20.5 22 21.5 20.94 21.5 19.64Z"
          fill={color}
        />
        <path
          opacity="0.4"
          d="M21.5 8.64V4.36C21.5 3.06 20.5 2 19.27 2H15.23C14 2 13 3.06 13 4.36V8.64C13 9.94 14 11 15.23 11H19.27C20.5 11 21.5 9.94 21.5 8.64Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const UserList = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
          fill={color}
        />
        <path
          d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z"
          fill={color}
        />
        <path
          opacity="0.4"
          d="M19.9904 7.3401C20.1504 9.2801 18.7704 10.9801 16.8604 11.2101C16.8504 11.2101 16.8504 11.2101 16.8404 11.2101H16.8104C16.7504 11.2101 16.6904 11.2101 16.6404 11.2301C15.6704 11.2801 14.7804 10.9701 14.1104 10.4001C15.1404 9.4801 15.7304 8.1001 15.6104 6.6001C15.5404 5.7901 15.2604 5.0501 14.8404 4.4201C15.2204 4.2301 15.6604 4.1101 16.1104 4.0701C18.0704 3.9001 19.8204 5.3601 19.9904 7.3401Z"
          fill={color}
        />
        <path
          d="M21.9902 16.5904C21.9102 17.5604 21.2902 18.4004 20.2502 18.9704C19.2502 19.5204 17.9902 19.7804 16.7402 19.7504C17.4602 19.1004 17.8802 18.2904 17.9602 17.4304C18.0602 16.1904 17.4702 15.0004 16.2902 14.0504C15.6202 13.5204 14.8402 13.1004 13.9902 12.7904C16.2002 12.1504 18.9802 12.5804 20.6902 13.9604C21.6102 14.7004 22.0802 15.6304 21.9902 16.5904Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const EventList = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75022V2C8.75022 1.59 8.41022 1.25 8.00022 1.25C7.59022 1.25 7.25022 1.59 7.25022 2V3.56C4.55022 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
          fill={color}
        />
        <path
          opacity="0.4"
          d="M20 9.83984C20.55 9.83984 21 10.2898 21 10.8398V16.9998C21 19.9998 19.5 21.9998 16 21.9998H8C4.5 21.9998 3 19.9998 3 16.9998V10.8398C3 10.2898 3.45 9.83984 4 9.83984H20Z"
          fill={color}
        />
        <path
          d="M8.5 14.9999C8.37 14.9999 8.24 14.9699 8.12 14.9199C8 14.8699 7.89001 14.7999 7.79001 14.7099C7.70001 14.6099 7.62999 14.4999 7.57999 14.3799C7.52999 14.2599 7.5 14.1299 7.5 13.9999C7.5 13.8699 7.52999 13.7399 7.57999 13.6199C7.62999 13.4999 7.70001 13.3899 7.79001 13.2899C7.89001 13.1999 8 13.1299 8.12 13.0799C8.36 12.9799 8.64 12.9799 8.88 13.0799C9 13.1299 9.10999 13.1999 9.20999 13.2899C9.29999 13.3899 9.37001 13.4999 9.42001 13.6199C9.47001 13.7399 9.5 13.8699 9.5 13.9999C9.5 14.1299 9.47001 14.2599 9.42001 14.3799C9.37001 14.4999 9.29999 14.6099 9.20999 14.7099C9.10999 14.7999 9 14.8699 8.88 14.9199C8.76 14.9699 8.63 14.9999 8.5 14.9999Z"
          fill={color}
        />
        <path
          d="M12 14.9996C11.87 14.9996 11.74 14.9696 11.62 14.9196C11.5 14.8696 11.39 14.7996 11.29 14.7096C11.11 14.5196 11 14.2596 11 13.9996C11 13.7396 11.11 13.4796 11.29 13.2896C11.39 13.1996 11.5 13.1296 11.62 13.0796C11.86 12.9696 12.14 12.9696 12.38 13.0796C12.5 13.1296 12.61 13.1996 12.71 13.2896C12.89 13.4796 13 13.7396 13 13.9996C13 14.2596 12.89 14.5196 12.71 14.7096C12.61 14.7996 12.5 14.8696 12.38 14.9196C12.26 14.9696 12.13 14.9996 12 14.9996Z"
          fill={color}
        />
        <path
          d="M8.5 18.4999C8.37 18.4999 8.24 18.4699 8.12 18.4199C8 18.3699 7.89001 18.2999 7.79001 18.2099C7.61001 18.0199 7.5 17.7599 7.5 17.4999C7.5 17.2399 7.61001 16.9799 7.79001 16.7899C7.89001 16.6999 8 16.6299 8.12 16.5799C8.36 16.4799 8.64 16.4799 8.88 16.5799C9 16.6299 9.10999 16.6999 9.20999 16.7899C9.38999 16.9799 9.5 17.2399 9.5 17.4999C9.5 17.7599 9.38999 18.0199 9.20999 18.2099C9.10999 18.2999 9 18.3699 8.88 18.4199C8.76 18.4699 8.63 18.4999 8.5 18.4999Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const BurgerMenu = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.3077 8H3.69231C3.31385 8 3 7.54667 3 7C3 6.45333 3.31385 6 3.69231 6H20.3077C20.6862 6 21 6.45333 21 7C21 7.54667 20.6862 8 20.3077 8Z"
          fill={color}
        />
        <path
          opacity="0.4"
          d="M19.7694 12.5H4.23063C3.55789 12.5 3 12.0467 3 11.5C3 10.9533 3.55789 10.5 4.23063 10.5H19.7694C20.4421 10.5 21 10.9533 21 11.5C21 12.0467 20.4585 12.5 19.7694 12.5Z"
          fill={color}
        />
        <path
          d="M20.3077 17H3.69231C3.31385 17 3 16.5467 3 16C3 15.4533 3.31385 15 3.69231 15H20.3077C20.6862 15 21 15.4533 21 16C21 16.5467 20.6862 17 20.3077 17Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const AddUser = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
          fill={color}
        />
        <path
          opacity="0.4"
          d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z"
          fill={color}
        />
        <path
          d="M14 16.6299H12.75V15.3799C12.75 14.9699 12.41 14.6299 12 14.6299C11.59 14.6299 11.25 14.9699 11.25 15.3799V16.6299H10C9.59 16.6299 9.25 16.9699 9.25 17.3799C9.25 17.7899 9.59 18.1299 10 18.1299H11.25V19.3799C11.25 19.7899 11.59 20.1299 12 20.1299C12.41 20.1299 12.75 19.7899 12.75 19.3799V18.1299H14C14.41 18.1299 14.75 17.7899 14.75 17.3799C14.75 16.9699 14.41 16.6299 14 16.6299Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
export const AddEvent = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75024V2C8.75024 1.59 8.41024 1.25 8.00024 1.25C7.59024 1.25 7.25024 1.59 7.25024 2V3.56C4.55024 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
          fill={color}
        />
        <path
          opacity="0.4"
          d="M21 10.8401V12.5801C21 13.1901 20.46 13.6601 19.86 13.5601C19.58 13.5201 19.29 13.4901 19 13.4901C15.97 13.4901 13.5 15.9601 13.5 18.9901C13.5 19.4501 13.68 20.0901 13.87 20.6701C14.09 21.3201 13.61 21.9901 12.92 21.9901H8C4.5 21.9901 3 19.9901 3 16.9901V10.8301C3 10.2801 3.45 9.83008 4 9.83008H20C20.55 9.84008 21 10.2901 21 10.8401Z"
          fill={color}
        />
        <path
          d="M8.5 14.9999C8.24 14.9999 7.98 14.8899 7.79 14.7099C7.61 14.5199 7.5 14.2599 7.5 13.9999C7.5 13.7399 7.61 13.4799 7.79 13.2899C8.02 13.0599 8.37 12.9499 8.7 13.0199C8.76 13.0299 8.82 13.0499 8.88 13.0799C8.94 13.0999 9 13.1299 9.06 13.1699C9.11 13.2099 9.16 13.2499 9.21 13.2899C9.39 13.4799 9.5 13.7399 9.5 13.9999C9.5 14.2599 9.39 14.5199 9.21 14.7099C9.16 14.7499 9.11 14.7899 9.06 14.8299C9 14.8699 8.94 14.8999 8.88 14.9199C8.82 14.9499 8.76 14.9699 8.7 14.9799C8.63 14.9899 8.56 14.9999 8.5 14.9999Z"
          fill={color}
        />
        <path
          d="M12 15.0002C11.74 15.0002 11.48 14.8902 11.29 14.7102C11.11 14.5202 11 14.2602 11 14.0002C11 13.7402 11.11 13.4802 11.29 13.2902C11.67 12.9202 12.34 12.9202 12.71 13.2902C12.89 13.4802 13 13.7402 13 14.0002C13 14.2602 12.89 14.5202 12.71 14.7102C12.52 14.8902 12.26 15.0002 12 15.0002Z"
          fill={color}
        />
        <path
          d="M8.5 18.4999C8.24 18.4999 7.98 18.3899 7.79 18.2099C7.61 18.0199 7.5 17.7599 7.5 17.4999C7.5 17.2399 7.61 16.9799 7.79 16.7899C7.89 16.6999 7.99 16.6299 8.12 16.5799C8.49 16.4199 8.93 16.5099 9.21 16.7899C9.39 16.9799 9.5 17.2399 9.5 17.4999C9.5 17.7599 9.39 18.0199 9.21 18.2099C9.02 18.3899 8.76 18.4999 8.5 18.4999Z"
          fill={color}
        />
        <path
          d="M21.83 16.17C20.27 14.61 17.73 14.61 16.17 16.17C14.61 17.73 14.61 20.27 16.17 21.83C17.73 23.39 20.27 23.39 21.83 21.83C23.39 20.27 23.39 17.73 21.83 16.17ZM21.07 19.56C20.94 19.7 20.75 19.78 20.54 19.78H19.8V20.56C19.8 20.77 19.72 20.95 19.58 21.09C19.44 21.23 19.26 21.31 19.05 21.31C18.64 21.31 18.3 20.97 18.3 20.56V19.78H17.55C17.14 19.78 16.8 19.45 16.8 19.03C16.8 18.62 17.14 18.28 17.55 18.28H18.3V17.57C18.3 17.16 18.63 16.82 19.05 16.82C19.46 16.82 19.8 17.16 19.8 17.57V18.28H20.54C20.96 18.28 21.29 18.62 21.29 19.03C21.29 19.24 21.21 19.43 21.07 19.56Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
export const AddAlbum = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9996 13.8996V16.1896C21.9996 19.8296 19.8296 21.9996 16.1896 21.9996H7.80957C5.25957 21.9996 3.41957 20.9296 2.55957 19.0296L2.66957 18.9496L7.58957 15.6496C8.38957 15.1096 9.51957 15.1696 10.2296 15.7896L10.5696 16.0696C11.3496 16.7396 12.6096 16.7396 13.3896 16.0696L17.5496 12.4996C18.3296 11.8296 19.5896 11.8296 20.3696 12.4996L21.9996 13.8996Z"
          fill={color}
        />
        <path
          opacity="0.4"
          d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 2.63 16.08 2.29 16.22 2C16.21 2 16.2 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03L2.67 18.95L7.59 15.65C8.39 15.11 9.52 15.17 10.23 15.79L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9V7.81C22 7.8 22 7.79 22 7.78C21.71 7.92 21.37 8 20.97 8Z"
          fill={color}
        />
        <path
          d="M9.00012 10.3801C10.3146 10.3801 11.3801 9.31456 11.3801 8.00012C11.3801 6.68568 10.3146 5.62012 9.00012 5.62012C7.68568 5.62012 6.62012 6.68568 6.62012 8.00012C6.62012 9.31456 7.68568 10.3801 9.00012 10.3801Z"
          fill={color}
        />
        <path
          d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.91 4.93C21.81 5.03 21.66 5.1 21.5 5.11H20.09L20.1 6.5C20.09 6.67 20.03 6.81 19.91 6.93C19.81 7.03 19.66 7.1 19.5 7.1C19.17 7.1 18.9 6.83 18.9 6.5V5.1L17.5 5.11C17.17 5.11 16.9 4.83 16.9 4.5C16.9 4.17 17.17 3.9 17.5 3.9L18.9 3.91V2.51C18.9 2.18 19.17 1.9 19.5 1.9C19.83 1.9 20.1 2.18 20.1 2.51L20.09 3.9H21.5C21.83 3.9 22.1 4.17 22.1 4.5C22.09 4.67 22.02 4.81 21.91 4.93Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
export const AlbumList = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M22 7.81V13.9L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L2.67 18.95L2.56 19.03C2.19 18.23 2 17.28 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
          fill={color}
        />
        <path
          d="M9.00012 10.3801C10.3146 10.3801 11.3801 9.31456 11.3801 8.00012C11.3801 6.68568 10.3146 5.62012 9.00012 5.62012C7.68568 5.62012 6.62012 6.68568 6.62012 8.00012C6.62012 9.31456 7.68568 10.3801 9.00012 10.3801Z"
          fill={color}
        />
        <path
          d="M21.9996 13.8996V16.1896C21.9996 19.8296 19.8296 21.9996 16.1896 21.9996H7.80957C5.25957 21.9996 3.41957 20.9296 2.55957 19.0296L2.66957 18.9496L7.58957 15.6496C8.38957 15.1096 9.51957 15.1696 10.2296 15.7896L10.5696 16.0696C11.3496 16.7396 12.6096 16.7396 13.3896 16.0696L17.5496 12.4996C18.3296 11.8296 19.5896 11.8296 20.3696 12.4996L21.9996 13.8996Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
export const NoticeList = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
          fill={color}
        />
        <path
          opacity="0.4"
          d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
export const AddNotice = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.1225 2.8775C19.9525 1.7075 18.0475 1.7075 16.8775 2.8775C15.7075 4.04751 15.7075 5.95249 16.8775 7.1225C18.0475 8.2925 19.9525 8.2925 21.1225 7.1225C22.2925 5.95249 22.2925 4.04751 21.1225 2.8775ZM20.5525 5.42C20.455 5.525 20.3125 5.585 20.155 5.585H19.6V6.17C19.6 6.3275 19.54 6.4625 19.435 6.5675C19.33 6.6725 19.195 6.7325 19.0375 6.7325C18.73 6.7325 18.475 6.4775 18.475 6.17V5.585H17.9125C17.605 5.585 17.35 5.3375 17.35 5.0225C17.35 4.715 17.605 4.46 17.9125 4.46H18.475V3.9275C18.475 3.62 18.7225 3.365 19.0375 3.365C19.345 3.365 19.6 3.62 19.6 3.9275V4.46H20.155C20.47 4.46 20.7175 4.715 20.7175 5.0225C20.7175 5.18 20.6575 5.3225 20.5525 5.42Z"
          fill={color}
        />
        <path
          opacity="0.4"
          d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const ArrowLeft = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 19.9201L8.48003 13.4001C7.71003 12.6301 7.71003 11.3701 8.48003 10.6001L15 4.08008"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export const ArrowRight = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.90997 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.90997 4.08008"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export const ArrowUp = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.92 15.0499L13.4 8.52989C12.63 7.75989 11.37 7.75989 10.6 8.52989L4.08002 15.0499"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export const ArrowDown = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.94995"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const Calender = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75022V2C8.75022 1.59 8.41022 1.25 8.00022 1.25C7.59022 1.25 7.25022 1.59 7.25022 2V3.56C4.55022 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
          fill={color}
        />
        <path
          opacity="0.4"
          d="M20 9.84009C20.55 9.84009 21 10.2901 21 10.8401V17.0001C21 20.0001 19.5 22.0001 16 22.0001H8C4.5 22.0001 3 20.0001 3 17.0001V10.8401C3 10.2901 3.45 9.84009 4 9.84009H20Z"
          fill={color}
        />
        <path
          d="M8.5 14.9999C8.37 14.9999 8.24 14.9699 8.12 14.9199C8 14.8699 7.89001 14.7999 7.79001 14.7099C7.70001 14.6099 7.62999 14.4999 7.57999 14.3799C7.52999 14.2599 7.5 14.1299 7.5 13.9999C7.5 13.8699 7.52999 13.7399 7.57999 13.6199C7.62999 13.4999 7.70001 13.3899 7.79001 13.2899C7.89001 13.1999 8 13.1299 8.12 13.0799C8.36 12.9799 8.64 12.9799 8.88 13.0799C9 13.1299 9.10999 13.1999 9.20999 13.2899C9.29999 13.3899 9.37001 13.4999 9.42001 13.6199C9.47001 13.7399 9.5 13.8699 9.5 13.9999C9.5 14.1299 9.47001 14.2599 9.42001 14.3799C9.37001 14.4999 9.29999 14.6099 9.20999 14.7099C9.10999 14.7999 9 14.8699 8.88 14.9199C8.76 14.9699 8.63 14.9999 8.5 14.9999Z"
          fill={color}
        />
        <path
          d="M12 15.0001C11.87 15.0001 11.74 14.9701 11.62 14.9201C11.5 14.8701 11.39 14.8001 11.29 14.7101C11.11 14.5201 11 14.2601 11 14.0001C11 13.7401 11.11 13.4801 11.29 13.2901C11.39 13.2001 11.5 13.1301 11.62 13.0801C11.86 12.9701 12.14 12.9701 12.38 13.0801C12.5 13.1301 12.61 13.2001 12.71 13.2901C12.89 13.4801 13 13.7401 13 14.0001C13 14.2601 12.89 14.5201 12.71 14.7101C12.61 14.8001 12.5 14.8701 12.38 14.9201C12.26 14.9701 12.13 15.0001 12 15.0001Z"
          fill={color}
        />
        <path
          d="M8.5 18.4999C8.37 18.4999 8.24 18.4699 8.12 18.4199C8 18.3699 7.89001 18.2999 7.79001 18.2099C7.61001 18.0199 7.5 17.7599 7.5 17.4999C7.5 17.2399 7.61001 16.9799 7.79001 16.7899C7.89001 16.6999 8 16.6299 8.12 16.5799C8.36 16.4799 8.64 16.4799 8.88 16.5799C9 16.6299 9.10999 16.6999 9.20999 16.7899C9.38999 16.9799 9.5 17.2399 9.5 17.4999C9.5 17.7599 9.38999 18.0199 9.20999 18.2099C9.10999 18.2999 9 18.3699 8.88 18.4199C8.76 18.4699 8.63 18.4999 8.5 18.4999Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const Clock = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const Upload = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 16V22M12 16L14 18M12 16L10 18"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 13.3529C22 15.6958 20.5562 17.7055 18.5 18.5604M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 16.6611 3.26124 18.2664 5 18.8061M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C19.0446 8.31916 19.8345 8.83436 20.4633 9.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const EyeOff = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5299 9.47004L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C12.9899 8.42004 13.8799 8.82004 14.5299 9.47004Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.41992 19.5301C9.55992 20.0101 10.7699 20.2701 11.9999 20.2701C15.5299 20.2701 18.8199 18.1901 21.1099 14.5901C22.0099 13.1801 22.0099 10.8101 21.1099 9.40005C20.7799 8.88005 20.4199 8.39005 20.0499 7.93005"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.47 14.53L2 22"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 2L14.53 9.47"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const EyeOn = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C13.9799 8.42004 15.5799 10.02 15.5799 12Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const Remove = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5001 6H3.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9.5 11L10 16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14.5 11L14 16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export const Update = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.67981 11.3333L2.92981 11.3333L2.92981 11.3333L3.67981 11.3333ZM3.67981 13L3.15157 13.5324C3.44398 13.8225 3.91564 13.8225 4.20805 13.5324L3.67981 13ZM5.88787 11.8657C6.18191 11.574 6.18377 11.0991 5.89203 10.8051C5.60029 10.511 5.12542 10.5092 4.83138 10.8009L5.88787 11.8657ZM2.52824 10.8009C2.2342 10.5092 1.75933 10.511 1.46759 10.8051C1.17585 11.0991 1.17772 11.574 1.47176 11.8657L2.52824 10.8009ZM18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0001 7.42199 20.1103 6.96007 19.8934 6.60721L18.6156 7.39279ZM12.0789 2.25C7.03155 2.25 2.92981 6.3112 2.92981 11.3333H4.42981C4.42981 7.15072 7.84884 3.75 12.0789 3.75V2.25ZM2.92981 11.3333L2.92981 13L4.42981 13L4.42981 11.3333L2.92981 11.3333ZM4.20805 13.5324L5.88787 11.8657L4.83138 10.8009L3.15157 12.4676L4.20805 13.5324ZM4.20805 12.4676L2.52824 10.8009L1.47176 11.8657L3.15157 13.5324L4.20805 12.4676ZM19.8934 6.60721C18.287 3.99427 15.3873 2.25 12.0789 2.25V3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279L19.8934 6.60721Z"
          fill={color}
        />
        <path
          d="M20.3139 11L20.8411 10.4666C20.549 10.1778 20.0788 10.1778 19.7867 10.4666L20.3139 11ZM18.1004 12.1333C17.8058 12.4244 17.8031 12.8993 18.0942 13.1939C18.3854 13.4885 18.8603 13.4913 19.1549 13.2001L18.1004 12.1333ZM21.4729 13.2001C21.7675 13.4913 22.2424 13.4885 22.5335 13.1939C22.8247 12.8993 22.822 12.4244 22.5274 12.1332L21.4729 13.2001ZM5.31794 16.6061C5.1004 16.2536 4.6383 16.1442 4.28581 16.3618C3.93331 16.5793 3.82391 17.0414 4.04144 17.3939L5.31794 16.6061ZM11.8827 21.75C16.9451 21.75 21.0639 17.6915 21.0639 12.6667H19.5639C19.5639 16.8466 16.1332 20.25 11.8827 20.25V21.75ZM21.0639 12.6667V11H19.5639V12.6667H21.0639ZM19.7867 10.4666L18.1004 12.1333L19.1549 13.2001L20.8411 11.5334L19.7867 10.4666ZM19.7867 11.5334L21.4729 13.2001L22.5274 12.1332L20.8411 10.4666L19.7867 11.5334ZM4.04144 17.3939C5.65405 20.007 8.56403 21.75 11.8827 21.75V20.25C9.10023 20.25 6.66584 18.7903 5.31794 16.6061L4.04144 17.3939Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const More = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="2" fill={color} />
        <circle cx="12" cy="19" r="2" fill={color} />
        <circle cx="12" cy="5" r="2" fill={color} />
      </svg>
    </div>
  );
};
export const AlbumAdd = ({ color, size }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9998 12.6978C21.9983 14.1674 21.9871 15.4165 21.9036 16.4414C21.8067 17.6308 21.6081 18.6246 21.1636 19.45C20.9676 19.814 20.7267 20.1401 20.4334 20.4334C19.601 21.2657 18.5405 21.6428 17.1966 21.8235C15.8835 22 14.2007 22 12.0534 22H11.9466C9.79929 22 8.11646 22 6.80345 21.8235C5.45951 21.6428 4.39902 21.2657 3.56664 20.4334C2.82871 19.6954 2.44763 18.777 2.24498 17.6376C2.04591 16.5184 2.00949 15.1259 2.00192 13.3967C2 12.9569 2 12.4917 2 12.0009V11.9466C1.99999 9.79929 1.99998 8.11646 2.17651 6.80345C2.3572 5.45951 2.73426 4.39902 3.56664 3.56664C4.39902 2.73426 5.45951 2.3572 6.80345 2.17651C7.97111 2.01952 9.47346 2.00215 11.302 2.00024C11.6873 1.99983 12 2.31236 12 2.69767C12 3.08299 11.6872 3.3952 11.3019 3.39561C9.44749 3.39757 8.06751 3.41446 6.98937 3.55941C5.80016 3.7193 5.08321 4.02339 4.5533 4.5533C4.02339 5.08321 3.7193 5.80016 3.55941 6.98937C3.39683 8.19866 3.39535 9.7877 3.39535 12C3.39535 12.2702 3.39535 12.5314 3.39567 12.7844L4.32696 11.9696C5.17465 11.2278 6.45225 11.2704 7.24872 12.0668L11.2392 16.0573C11.8785 16.6966 12.8848 16.7837 13.6245 16.2639L13.9019 16.0689C14.9663 15.3209 16.4064 15.4076 17.3734 16.2779L20.0064 18.6476C20.2714 18.091 20.4288 17.3597 20.5128 16.3281C20.592 15.3561 20.6029 14.1755 20.6044 12.6979C20.6048 12.3126 20.917 12 21.3023 12C21.6876 12 22.0002 12.3125 21.9998 12.6978Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11ZM18.25 4.5C18.25 4.08579 17.9142 3.75 17.5 3.75C17.0858 3.75 16.75 4.08579 16.75 4.5V5.75H15.5C15.0858 5.75 14.75 6.08579 14.75 6.5C14.75 6.91421 15.0858 7.25 15.5 7.25H16.75V8.5C16.75 8.91421 17.0858 9.25 17.5 9.25C17.9142 9.25 18.25 8.91421 18.25 8.5V7.25H19.5C19.9142 7.25 20.25 6.91421 20.25 6.5C20.25 6.08579 19.9142 5.75 19.5 5.75H18.25V4.5Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
Dashboard.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
UserList.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
EventList.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
BurgerMenu.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
AddUser.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
AddEvent.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
AddAlbum.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
AlbumList.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
NoticeList.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
AddNotice.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
ArrowLeft.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
ArrowRight.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
ArrowUp.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
ArrowDown.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
Calender.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
Clock.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
Upload.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
EyeOff.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
EyeOn.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
Remove.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
Update.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
More.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
AlbumAdd.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
