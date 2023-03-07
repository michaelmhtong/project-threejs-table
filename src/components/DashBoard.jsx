import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useConfigurator } from "../contexts/Configurator";
export const DashBoard = () => {
  const { legs, setLegs } = useConfigurator();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Box className="glass" p={3}>
        <FormControl>
          <FormLabel>Legs Layout</FormLabel>
          <RadioGroup value={legs} onChange={(e) => setLegs(parseInt(e.target.value))}>
            <FormControlLabel value={0} control={<Radio />} label="Standard" />
            <FormControlLabel value={1} control={<Radio />} label="Solid" />
            <FormControlLabel value={2} control={<Radio />} label="Design" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
