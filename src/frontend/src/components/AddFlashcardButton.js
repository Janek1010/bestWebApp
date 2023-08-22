import { Button, Input, Select, Option } from "@mui/joy";
import { useState } from "react";

const AddFlashcardButton = ({}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("POLISH");

  const handleAddFlashcard = async () => {
    try {
      const newFlashcard = {
        name: name,
        description: description,
        category: category,
      };

      const response = await fetch("http://localhost:8080/api/flashcards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFlashcard),
      });

      if (response.status === 201) {
        setName("");
        setDescription("");
        setCategory("POLISH");
        window.location.reload();
      } else {
        const responseBody = await response.json();
        console.error("Failed to add flashcard. Error details:", responseBody);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
  };

  return (
    <div>
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Select defaultValue="POLISH" onChange={handleCategoryChange}>
        <Option value="POLISH">POLISH</Option>
        <Option value="ENGLISH">ENGLISH</Option>
      </Select>

      <Button id="add-flashcard-btn" onClick={handleAddFlashcard}>
        Add flashcard
      </Button>
    </div>
  );
};

export default AddFlashcardButton;
