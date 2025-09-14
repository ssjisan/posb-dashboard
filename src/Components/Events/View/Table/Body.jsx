import {
  Box,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  TableBody,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import PropTypes from "prop-types";
import {
  Remove,
  More,
  Edit,
  Drag,
  NoData,
  EyeBold,
  Bill,
  Download,
} from "../../../../assets/IconSet";
import { format } from "date-fns";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Body({
  events,
  selectedRowId,
  onDragEnd,
  selectedTab,
  handlePreview,
  handleCloseMenu,
  handleOpenMenu,
  open,
  setDataToDelete,
  setIsModalOpen,
  redirectEdit,
  handlePayment,
  handleDownload,
}) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="events">
        {(provided) => (
          <TableBody ref={provided.innerRef} {...provided.droppableProps}>
            {events.length === 0 ? (
              <TableRow sx={{ height: "360px" }}>
                <TableCell colSpan={9} align="center">
                  <NoData />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontWeight: 600 }}
                  >
                    No Data
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              events.map((data, index) => (
                <Draggable
                  key={data._id}
                  draggableId={data._id}
                  index={index}
                  isDragDisabled={selectedTab === "archived"} // Disable drag for archived events
                >
                  {(provided, snapshot) => (
                    <TableRow
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? 0.5 : 1, // Optional styling during drag
                      }}
                    >
                      {selectedTab === "running" && (
                        <TableCell align="center" sx={{ width: "40px" }}>
                          <Tooltip title="Drag">
                            <IconButton sx={{ width: "40px", height: "40px" }}>
                              <Drag color="#919EAB" size={24} />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      )}
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ padding: "16px", width: "280px" }}
                      >
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Box
                            sx={{
                              width: "80px",
                              height: "48px",
                              borderRadius: "8px",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={
                                data?.coverPhoto?.url
                                  ? data.coverPhoto.url
                                  : "/placeholder.png"
                              }
                              alt={data.name}
                              width="100%"
                              height="100%"
                              style={{ objectFit: "cover" }}
                            />
                          </Box>
                          <Typography variant="subtitle2" noWrap>
                            <Box
                              sx={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                width: "274px",
                              }}
                            >
                              {data.name}
                            </Box>
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ padding: "16px", width: "280px" }}
                      >
                        {data.location}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ padding: "16px", width: "240px" }}
                      >
                        {data.eventDate
                          ? format(new Date(data.eventDate), "dd MMMM, yyyy")
                          : ""}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ padding: "16px", width: "120px" }}
                      >
                        {data.eventTime
                          ? format(new Date(data.eventTime), "hh:mm a")
                          : ""}
                      </TableCell>
                      {data?.registrationRequired === true ? (
                        <TableCell
                          align="left"
                          sx={{ padding: "16px", width: "140px" }}
                        >
                          Yes
                        </TableCell>
                      ) : (
                        <TableCell
                          align="left"
                          sx={{ padding: "16px", width: "140px" }}
                          component={"a"}
                        >
                          No
                        </TableCell>
                      )}
                      <TableCell align="center">
                        <Tooltip title="Actions">
                          <IconButton
                            sx={{ width: "40px", height: "40px" }}
                            onClick={(event) => handleOpenMenu(event, data)}
                          >
                            <More color="#919EAB" size={24} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  )}
                </Draggable>
              ))
            )}
            {provided.placeholder}
          </TableBody>
        )}
      </Droppable>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: {
              width: 160,
              p: "8px",
              borderRadius: "8px",
              boxShadow: "-20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
            },
          },
        }}
      >
        <MenuItem
          sx={{
            display: "flex",
            gap: "8px",
            mb: "8px",
            borderRadius: "8px",
            fontSize: "14px",
          }}
          onClick={() => handlePreview(selectedRowId)}
        >
          <EyeBold color="#919EAB" size={16} />
          Preview
        </MenuItem>

        {selectedTab === "running" && (
          <MenuItem
            sx={{
              display: "flex",
              gap: "8px",
              mb: "8px",
              borderRadius: "8px",
              fontSize: "14px",
            }}
            onClick={(e) => redirectEdit(e, selectedRowId)}
          >
            <Edit color="#919EAB" size={16} />
            Edit
          </MenuItem>
        )}
        <MenuItem
          sx={{
            display: "flex",
            gap: "8px",
            mb: "8px",
            borderRadius: "8px",
            fontSize: "14px",
          }}
          onClick={(e) => handlePayment(e, selectedRowId)}
        >
          <Bill color="#919EAB" size={16} />
          Payment
        </MenuItem>
        <MenuItem
          sx={{
            display: "flex",
            gap: "8px",
            mb: "8px",
            borderRadius: "8px",
            fontSize: "14px",
          }}
          onClick={(e) => handleDownload(e, selectedRowId)}
        >
          <Download color="#919EAB" size={16} />
          Download list
        </MenuItem>
        <MenuItem
          sx={{
            color: "error.main",
            display: "flex",
            gap: "8px",
            borderRadius: "8px",
            fontSize: "14px",
          }}
          onClick={() => {
            setDataToDelete(selectedRowId);
            setIsModalOpen(true);
            handleCloseMenu(); // Close popover
          }}
        >
          <Remove color="red" size={16} /> Delete
        </MenuItem>
      </Popover>
    </DragDropContext>
  );
}

Body.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      fees: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      contactPerson: PropTypes.string.isRequired,
      contactEmail: PropTypes.string.isRequired,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
    })
  ).isRequired,
  selectedRowId: PropTypes.string, // Assuming the ID is a string
  selectedTab: PropTypes.string.isRequired, // Validated as string
  onDragEnd: PropTypes.func.isRequired, // Function for drag-and-drop end event
  handlePreview: PropTypes.func.isRequired, // Function to handle preview action
  handleCloseMenu: PropTypes.func.isRequired, // Function to close the menu
  handleOpenMenu: PropTypes.func.isRequired, // Function to open the menu
  open: PropTypes.object, // Reference to the anchor element for the popover
  setDataToDelete: PropTypes.func.isRequired, // Function to set the item to delete
  setIsModalOpen: PropTypes.func.isRequired, // Function to open/close modal
  redirectEdit: PropTypes.func.isRequired,
  handlePayment: PropTypes.func.isRequired,
  handleDownload: PropTypes.func.isRequired,
};
