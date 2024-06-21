// import React from "react";
// import { useState } from "react";
// import { Modal, ModalBody, ModalFooter, ModalHeader } from "bootstrap";
// import { Typography } from "@mui/material";

// const VerifyModal = ({ open, toggle }) => {
//   const [code, setCode] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(code);
//   };
//   return (
//     <Modal isOpen={open} toggle={toggle}>
//       <ModalHeader>
//         <Typography>Enter Code</Typography>
//       </ModalHeader>
//       <ModalBody>
//         <form onSubmit={handleSubmit} id="submit">
//           <input
//             type="text"
//             placeholder="code"
//             onChange={(e) => setCode(e.target.value)}
//           />
//         </form>
//       </ModalBody>
//       <ModalFooter>
//         <button onClick={toggle}>
//            Cancel
//         </button>
//         <button type="submit" form="submit">
//             Save
//         </button>
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default VerifyModal;

import React, { useState } from "react";
import {auth} from "@service";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const VerifyModal = ({ open, toggle }) => {
  const [code, setCode] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const payload = {
        code: code,
        email: localStorage.getItem("email")
    }
    try {
       const response = await auth.verify_code(payload)
       console.log(response); 
    } catch (error) {
        console.log(error)
    }
    console.log(payload);
  };

  return (
    <Modal open={open} onClose={toggle}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 1
        }}
      >
        <Typography variant="h6" component="h2">
          Enter Code
        </Typography>
        <Box component="form" onSubmit={handleSubmit} id="submit" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Code"
            variant="outlined"
            onChange={(e) => setCode(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button onClick={toggle} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button variant="contained">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default VerifyModal;

