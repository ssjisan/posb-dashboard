import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Layout/Sidebar";
import CreateBlogForm from "../Components/Blog/CreateBlog/CreateBlogForm";
import { useState } from "react";

export default function CreateBlog() {
    const drawerWidth = 280;
    const [editorContent, setEditorContent] = useState('');

    const handleEditorChange = (content) => {
      setEditorContent(content);
    };
    return (
      <Box>
        <Sidebar />
        <Box
          component="main"
          sx={{
            p: 3,
            width: { lg: `calc(100% - ${drawerWidth}px)` },
            ml: { lg: `${drawerWidth}px` },
          }}
        >
          <Toolbar />
          <Box sx={{ p: "24px 24px 0px 24px" }}>
            Write a blog
          </Box>
          <Box>
            <CreateBlogForm content={editorContent} onChange={handleEditorChange} />
          </Box>
        </Box>
      </Box>
    );
}
