import { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import teal from "@mui/material/colors/teal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Controls from "./components/Controls";
import EditDialog from "./components/EditDialog";

function App() {
  let storeTheme = localStorage.getItem("mode");

  const [openDialog, setOpenDialog] = useState(false);
  const [sliderValue, setSliderValue] = useState(20);
  const [text, setText] = useState("");
  const [mode, setMode] = useState(storeTheme ?? "light");

  const darkTheme = createTheme({
    palette: {
      mode: storeTheme ?? mode,
      primary: {
        main: teal[400],
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        minHeight="100vh"
      >
        <Controls
          mode={mode}
          setMode={setMode}
          setOpenDialog={setOpenDialog}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
          setText={setText}
        />
        <Typography
          p={2}
          sx={{ fontSize: `${sliderValue}px`, wordWrap: "break-word" }}
        >
          {text}
        </Typography>
        <EditDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          text={text}
          setText={setText}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
