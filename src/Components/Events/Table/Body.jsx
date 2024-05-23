import { IconButton, TableBody, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useContext } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";
import { BurgerMenu } from "../../../assets/IconSet";

export default function Body() {
  const { allRequests, page, rowsPerPage, handleRemoveRequest } =
    useContext(DataContext);
  //eslint-disable-next-line
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      color: "#212121",
      fontWeight: "500",
      border: "none",
      padding: "8px",
    }
  }));
  return (
    <TableBody>
      {/* eslint-disable-next-line */}
      {allRequests
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data.id}>
            <StyledTableCell align="left">{data.name}</StyledTableCell>
            <StyledTableCell align="left">{data.email}</StyledTableCell>
            <StyledTableCell align="center">{data.phone}</StyledTableCell>
            <StyledTableCell align="center">
              {data.position === "" ? "--" : data.position}
            </StyledTableCell>
            <StyledTableCell align="center">{data.budget}</StyledTableCell>
            <StyledTableCell align="center">{data.service}</StyledTableCell>
            <StyledTableCell align="center">
              {data.projectBrief === "" ? "--" : data.projectBrief}
            </StyledTableCell>
            <StyledTableCell align="center">
              <IconButton
                sx={{ width: "40px", height: "40px" }}
                onClick={() => handleRemoveRequest(data.id)}
              >
                <BurgerMenu color="red" size={24}/>
              </IconButton>
            </StyledTableCell>
          </TableRow>
        ))}
    </TableBody>
  );
}
