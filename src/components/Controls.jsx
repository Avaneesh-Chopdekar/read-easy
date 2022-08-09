import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Edit from "@mui/icons-material/Edit";
import Clear from "@mui/icons-material/Clear";
import Brightness4 from "@mui/icons-material/Brightness4";

const Controls = ({
  mode,
  setMode,
  setOpenDialog,
  sliderValue,
  setSliderValue,
  setText,
}) => {
  return (
    <Stack direction="row" gap={3} pt={2} mx={2} alignItems="center">
      <Stack direction="row" alignItems="center" gap={2}>
        <Tooltip title="Toggle Theme" arrow>
          <IconButton
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
              localStorage.setItem("mode", mode === "light" ? "dark" : "light");
            }}
          >
            <Brightness4 />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit Text" arrow>
          <IconButton onClick={() => setOpenDialog(true)}>
            <Edit />
          </IconButton>
        </Tooltip>
      </Stack>
      <Slider
        min={20}
        max={200}
        mx={3}
        onChange={(e) => setSliderValue(e.target.value)}
        value={sliderValue}
      />
      <Tooltip title="Clear Text" arrow>
        <IconButton onClick={() => setText("")}>
          <Clear />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default Controls;
