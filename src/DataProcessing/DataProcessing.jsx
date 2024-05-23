import { createContext } from "react";
import PropTypes from "prop-types";
import LoginForm from "./Components/LoginForm";
import ProjectRequestData from "./Components/ProjectRequestData";
import ScheduleMeetingData from "./Components/ScheduleMeetingData";
import AuthProvider from "./Components/AuthProvider";
import axios from "axios";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
  const { auth, setAuth } = AuthProvider();

  const {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleLogin,
    isUserLoggedIn,
    setIsUserLoggedIn,
    handleLoginDetails,
    loginDetails,
  } = LoginForm();
  const {
    allRequests,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
    handleRemoveRequest,
  } = ProjectRequestData();
  const {
    allScheduleMeeting,
    handleSchedulePageChange,
    handleScheduleRowsPerPage,
    schedulePage,
    scheduleRowsPerPage,
    handleScheduleRemoveRequest,
  } = ScheduleMeetingData();

  
  // Axios Configuration
  // eslint-disable-next-line
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_API;
  axios.defaults.headers.common["Authorization"] = auth?.token;
  return (
    <DataContext.Provider
      value={{
        // Auth Provider
        auth,
        setAuth,
        //Login Form Data Pass
        showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleLogin,
        isUserLoggedIn,
        setIsUserLoggedIn,
        handleLoginDetails,
        loginDetails,
        // Client Project Request
        allRequests,
        handleChangePage,
        handleChangeRowsPerPage,
        page,
        rowsPerPage,
        handleRemoveRequest,
        // Schedule Meeting Data
        allScheduleMeeting,
        handleSchedulePageChange,
        handleScheduleRowsPerPage,
        schedulePage,
        scheduleRowsPerPage,
        handleScheduleRemoveRequest,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
// Prop types validation
DataProcessing.propTypes = {
  children: PropTypes.node.isRequired,
};
