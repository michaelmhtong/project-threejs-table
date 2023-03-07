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
  const { legs, setLegs, legsColor, setLegsColor, tableWidth, setTableWidth } = useConfigurator();

  const legsOptions = [
    { value: 0, label: "Standard", addPrice: 0 },
    { value: 1, label: "Solid", addPrice: 100 },
    { value: 2, label: "Design", addPrice: 200 },
  ];

  const legsColorOptions = [
    { value: "#777777", label: "Black", addPrice: 0 },
    { value: "#ECECEC", label: "Chrome", addPrice: 20 },
    { value: "#C9BD71", label: "Gold", addPrice: 40 },
    { value: "#C9A3B9", label: "Pink Gold", addPrice: 60 },
  ];

  // Calculate the total price based on the selected options
  const totalPrice =
    500 +
    tableWidth * 1.5 +
    legsOptions.find((option) => option.value === legs).addPrice +
    legsColorOptions.find((option) => option.value === legsColor).addPrice;

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={3}>
        {/* price */}
        <Box className="glass" p={3}>
          <Typography variant="h5" component="span">
            Price:
          </Typography>
          <Typography
            variant="h5"
            component="span"
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            €{totalPrice}
          </Typography>
        </Box>

        {/* table width */}
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Table width</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={200}
              value={tableWidth}
              onChange={(e) => {
                setTableWidth(e.target.value);
              }}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box>

        {/* Legs Layout */}
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Layout</FormLabel>
            <RadioGroup
              value={legs}
              onChange={(e) => {
                setLegs(parseInt(e.target.value));
              }}
            >
              {legsOptions.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={`${option.label} (+€${option.addPrice})`}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>

        {/* legs color */}
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Color</FormLabel>
            <RadioGroup value={legsColor} onChange={(e) => setLegsColor(e.target.value)}>
              {legsColorOptions.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={`${option.label} (+€${option.addPrice})`}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};
