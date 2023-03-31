import { Box, Stack } from "@mui/material";
import { Appbar } from "../components/Appbar";
import { MainSection } from "../layout/MainSection";

export const HomePage = () => {
  return (
    <>
      <Stack flexDirection="column" minHeight="100vh">
        {/* header */}
        <Box>
          <Appbar />
        </Box>
        {/* main section */}
        <Box
          sx={{
            flex: 1,
            paddingY: 4,
            backgroundImage:
              "linear-gradient(145deg, rgba(255,255,255,1) 30%, rgba(221,221,221,1) 100%)",
          }}
        >
          <MainSection />
        </Box>
        {/* footer */}
      </Stack>
    </>
  );
};
