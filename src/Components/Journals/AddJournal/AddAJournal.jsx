import { Box, Typography } from '@mui/material'
import FormJournal from './FormJournal'

export default function AddAJournal() {
  return (
    <Box>
      <Box sx={{ p: "24px 24px 0px 24px" }}>
        <Typography variant="h4">Create a Journal</Typography>
      </Box>
      <FormJournal />
    </Box>
  )
}
