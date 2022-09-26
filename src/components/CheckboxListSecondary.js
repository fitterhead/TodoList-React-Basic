import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";

export default function CheckboxListSecondary({
  todoItems,
  showIncomplete,
  setItemList,
}) {
  const handleToggle = (value) => {
    console.log({ todoItems });
    console.log(todoItems.indexOf(value));
    const objectIndex = todoItems.indexOf(value);
    setItemList(
      todoItems.map((item, index) => {
        if (index === objectIndex) {
          return { ...item, status: `${item.status === "0" ? "1" : "0"}` };
        }
        return item;
      })
    );
  };

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "rgba(255,255,255,0.4)",
        borderRadius: "1rem",
      }}
    >
      {todoItems
        .filter((value) => (showIncomplete ? value.status !== "1" : true))
        .map((value) => {
          const labelId = `${Math.random()}`;
          return (
            <ListItem
              sx={{ padding: "1em", borderRadius: "10em" }}
              key={labelId}
              secondaryAction={
                <>
                  <Checkbox
                    edge="end"
                    checked={value.status === "0" ? false : true}
                    onChange={() => handleToggle(value)}
                    // inputProps={{ "aria-labelledby": labelId }}
                  />
                  <IconButton
                    onClick={() => {
                      setItemList(todoItems.filter((item) => item !== value));
                      console.log({ todoItems });
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </>
              }
              disablePadding
            >
              <ListItemText
                sx={{
                  textDecoration: `${
                    value.status === "0" ? "" : "line-through"
                  }`,
                }}
                id={labelId}
                primary={`${value.todoTask}`}
              />
            </ListItem>
          );
        })}
    </List>
  );
}
