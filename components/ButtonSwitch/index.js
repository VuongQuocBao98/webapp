import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { lightBlue, grey } from "@material-ui/core/colors";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { useDispatch } from "react-redux";
import { switchDarkMode } from "../../app/darkModeSlice";
import { useSelector } from "react-redux";

const PurpleSwitch = withStyles({
  switchBase: {
    color: grey[900],

    "&$checked": {
      color: lightBlue[600],
    },
    "&$checked + $track": {
      backgroundColor: lightBlue[300],
    },
  },
  checked: {},
  track: {},
})(Switch);

function ButtonSwitch(props) {
  const state = useSelector((state) => state.darkMode.darkModeData);
  const [darkMode, setDarkMode] = React.useState(state);

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setDarkMode(event.target.checked);
    let actionSwitchDarkMode = switchDarkMode(event.target.checked);

    dispatch(actionSwitchDarkMode);
  };

  return (
    <FormControlLabel
      label="Dark Mode"
      style={{ marginLeft: "5px" }}
      control={
        <PurpleSwitch
          checked={darkMode}
          onChange={handleChange}
          name="darkMode"
        />
      }
    />
  );
}

export default ButtonSwitch;
