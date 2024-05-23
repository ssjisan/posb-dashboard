import { TablePagination } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";
//eslint-disable-next-line
export default function Pagination() {
    const {allRequests,handleChangePage, handleChangeRowsPerPage, page, rowsPerPage} = useContext(DataContext)
    return (
        <TablePagination
            rowsPerPageOptions={[5]}
            component="div"
            count={allRequests.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ borderBottom: "none", borderTop: "1px solid rgba(145, 158, 171, 0.24)" }}

        />

    );
}
