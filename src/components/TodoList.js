import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Checkbox, TextField } from "@mui/material";
import {  Stack } from "@mui/system";
import "../styles.css";
import CheckboxListSecondary from "./CheckboxListSecondary";
import { useRef } from "react";

export default function TodoList() {
  const textRef = useRef();
  const [inputText, setInputText] = useState("");
  const [itemList, setItemList] = useState([
    { todoTask: `demo tasks`, status: "0" }

  ]);
  const [showIncomplete, setShowIncomplete] = useState(false);

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleToggle = (index) => {
    console.log({ index });
  };

  const handleAddItem = () => {
    setItemList([...itemList, { todoTask: `${inputText}`, status: "0" }]);
    setInputText("");
  };
  return (
    <Card elevation={20} sx={{ backgroundColor:"#F0A6CA", borderRadius:"1.6rem", maxWidth: 345, maxHeight: "auto" }}>
      <CardContent align="center">
        <Typography gutterBottom variant="h4" component="div">
          Todo List
        </Typography>
    
        <CheckboxListSecondary
          todoItems={itemList}
          setItemList={setItemList}
          handleToggle={handleToggle}
          showIncomplete={showIncomplete}
        />
        <Stack justifyContent="flex-end" alignItems="center" direction="row" spacing={2}>
          <Typography variant="h7" component="div">
            Show incomplete tasks only
          </Typography>
          <Checkbox
            checked={showIncomplete}
            onChange={(e) => setShowIncomplete(e.target.checked)}
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
          sx={{backgroundColor:"white"}}
          placeholder="Type here"
            ref={textRef}
            onChange={handleInputText}
            value={inputText}
            id="fullWidth"
          />
          <Button sx={{backgroundColor:"#9C89B8"}} onClick={() => handleAddItem(inputText)} variant="contained">
            add item
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
