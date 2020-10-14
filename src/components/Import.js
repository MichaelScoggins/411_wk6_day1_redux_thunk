import React, { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MoreVert } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";

const Import = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const [idNum, setMakeId] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMakeId(event.currentTarget.id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="lg">
      <h2>What up! Let's add some more cars to our Fake car lot!</h2>
      <div className={classes.root}>
        <Button onClick={props.fetchMakes} variant="contained" color="primary">
          Import
        </Button>
      </div>
      <h4>Count: {props.makes.length}</h4>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((car, id) => (
            <TableRow key={car.id}>
              <TableCell>{car["MakeId"]}</TableCell>
              <TableCell>{car["MakeName"]}</TableCell>
              <MoreVert
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                id={id}
              >
                Open Menu
              </MoreVert>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Button onClick={() => props.deleteMake(idNum)}>
            <DeleteIcon />
            Delete
          </Button>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Import;
