import AllFlashcardsView from "./components/AllFlashcardsView";
import AddFlashcardButton from "./components/AddFlashcardButton";
import { Box } from "@mui/joy";

function App() {
  return (
    <div className="App">
      <Box sx={{
        display: "flex"
      }}>
     <AddFlashcardButton/>
      <AllFlashcardsView />
      </Box>
    </div>
  );
}

export default App;
