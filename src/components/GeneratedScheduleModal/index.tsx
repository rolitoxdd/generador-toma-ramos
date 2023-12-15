import { useStore } from "@/store";
import { memo } from "react";
import { Timetable } from "../Timetable";
import withCourses from "../Timetable/withCourses";
import { Box, Modal } from "@mui/material";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const GeneratedScheduleModal: React.FC = memo(
  function GeneratedScheduleModal() {
    const { schedule, showSchedule, closeSchedule } = useStore((store) => ({
      schedule: store.generatedSchedule,
      showSchedule: store.showGeneratedSchedule,
      closeSchedule: store.closeSchedule,
    }));
    if (!showSchedule || !schedule) return null;
    const Schedule = withCourses(Timetable, schedule);
    return (
      <Modal
        open={showSchedule}
        onClose={closeSchedule}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <>
          <Box
            sx={{
              bgcolor: "background.paper",
              maxWidth: "1280px",
              padding: "50px",
              height: "fit-content",
              position: "relative",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={closeSchedule}
              sx={{ position: "absolute", top: 0, right: 0, margin: "7px" }}
            >
              <Close />
            </IconButton>
            {Schedule}
          </Box>
        </>
      </Modal>
    );
  }
);
export default GeneratedScheduleModal;
