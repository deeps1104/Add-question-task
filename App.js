import "./App.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";
import { useState } from "react";
import MinusBtn from "./component/MinusBtn";
function App() {
  const [type, setType] = useState("none");
  const initialState = {
    title: "",
    description: "",
    text: [{ text: "" }],
    textarea: [{ textarea: "", max: "", min: "", rows: "" }],
    number: [{ number: "", max: "", min: "", step: "" }],
    radio: [{ radio: "" }],
    checkbox: [{ checkbox: "" }],
    select: [{ select: "" }],
    slider: [{ slider: "", max: "", min: "" }],
    increaseNumb: [],
  };
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    setType(event.target.value);
    setForm({
      ...form,
      min: "",
      max: "",
      increaseNumb: [""],
    });
  };
  const handleTitleDesc = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const addincreaseNumbData = ({ type }) => {
    let temp = form[type];
    let arr = temp.slice();
    if (type === "number") {
      arr.push({ number: "", max: "", min: "", step: "" });
    }
    if (type === "textarea") {
      arr.push({ textarea: "", max: "", min: "", rows: "" });
    }
    if (type === "slider") {
      arr.push({ slider: "", max: "", min: "" });
    }

    if (type === "text") {
      arr.push({ text: "" });
    }
    if (type === "select") {
      arr.push({ select: "" });
    }
    if (type === "checkbox") {
      arr.push({ checkbox: "" });
    }
    if (type === "radio") {
      arr.push({ radio: "" });
    }
    setForm({
      ...form,
      [type]: arr,
    });
  };

  const removeincreaseNumbData = (index, type) => {
    // let temp = form.increaseNumb.slice();
    let temp = form[type];
    let arr = temp?.slice();
    temp?.splice(index, 1);
    setForm({
      ...form,
      type: arr,
    });
  };
  const handleFormInputData = (e, index, type) => {
    const { name, value } = e.target;
    let temp = form[type];
    let arr = temp.slice();

    arr[index][name] = value;
    setForm({
      ...form,
      [type]: arr,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    switch (type) {
      case "text":
        var arr = {
          title: form.title,
          description: form.description,
          type: type,
          question: form[type],
        };

        console.log(arr);
        break;
      case "textarea":
        var arr = {
          title: form.title,
          description: form.description,
          type: type,
          question: form[type],
        };

        console.log(arr);
        break;
      case "number":
        var arr = {
          title: form.title,
          description: form.description,
          type: type,
          question: form[type],
        };
        console.log(arr);
        break;
      case "radio":
        var arr = {
          title: form.title,
          description: form.description,
          type: type,
          question: form[type],
        };

        console.log(arr);
        break;
      case "checkbox":
        var arr = {
          title: form.title,
          description: form.description,
          type: type,
          question: form[type],
        };

        console.log(arr);
        break;
      case "select":
        var arr = {
          title: form.title,
          description: form.description,
          type: type,
          question: form[type],
        };

        console.log(arr);
        break;
      case "slider":
        var arr = {
          title: form.title,
          description: form.description,
          type: type,
          question: form[type],
        };

        console.log(arr);
        break;
    }
  };

  return (
    <Container>
      <Card sx={{ minWidth: 275, maxWidth: 800, marginTop: 6 }}>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              Add Question
            </Typography>
            <Stack spacing={3}>
              <TextField
                id="outlined-basic"
                label="Question title"
                variant="outlined"
                name="title"
                value={form.title}
                onChange={handleTitleDesc}
              />
              <TextField
                id="outlined-basic"
                label="Question Description"
                variant="outlined"
                name="description"
                value={form.description}
                onChange={handleTitleDesc}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Type"
                  value={type}
                  onChange={handleChange}
                >
                  <MenuItem value={"none"}>None</MenuItem>
                  <MenuItem value={"text"}>Text</MenuItem>
                  <MenuItem value={"number"}>Number</MenuItem>
                  <MenuItem value={"select"}>Select</MenuItem>
                  <MenuItem value={"textarea"}>TextArea</MenuItem>
                  <MenuItem value={"radio"}>Radio</MenuItem>
                  <MenuItem value={"checkbox"}>Checkbox</MenuItem>
                  <MenuItem value={"slider"}>Slider</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Box
              marginTop={3}
              sx={{
                display: `${type === "none" || undefined ? `none` : "block"}`,
              }}
            >
              <Card>
                <CardContent>
                  {/* text */}
                  {type === "text" && (
                    <>
                      {form?.text?.length > 0 &&
                        form?.text?.map((item, index) => {
                          return (
                            <Stack
                              direction="row"
                              spacing={2}
                              sx={{ alignItems: "center", marginTop: 2 }}
                            >
                              <TextField
                                id="outlined-basic"
                                label="Text"
                                variant="outlined"
                                name="text"
                                value={item.text}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "text")
                                }
                              />
                              <MinusBtn
                                form={form}
                                removeincreaseNumbData={removeincreaseNumbData}
                                index={index}
                                type={type}
                              />
                            </Stack>
                          );
                        })}
                    </>
                  )}

                  {/* textarea */}
                  {type === "textarea" && (
                    <>
                      {form?.textarea?.length > 0 &&
                        form?.textarea?.map((item, index) => {
                          return (
                            <Stack
                              direction="row"
                              spacing={2}
                              sx={{ alignItems: "center", marginTop: 2 }}
                            >
                              <TextField
                                id="outlined-basic"
                                label="TextArea"
                                variant="outlined"
                                name="textarea"
                                value={item.textarea}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "textarea")
                                }
                              />
                              <TextField
                                id="outlined-basic"
                                label="Max"
                                type="number"
                                name="max"
                                value={item.max}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "textarea")
                                }
                                sx={{ width: "80px" }}
                                variant="outlined"
                              />
                              <TextField
                                id="outlined-basic"
                                label="Min"
                                name="min"
                                type="number"
                                variant="outlined"
                                value={item.min}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "textarea")
                                }
                                sx={{ width: "80px" }}
                              />
                              <TextField
                                id="outlined-basic"
                                label="Rows"
                                type="number"
                                variant="outlined"
                                sx={{ width: "80px" }}
                                name="rows"
                                value={item.rows}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "textarea")
                                }
                              />
                              <MinusBtn
                                form={form}
                                removeincreaseNumbData={removeincreaseNumbData}
                                index={index}
                                type={type}
                              />
                            </Stack>
                          );
                        })}
                    </>
                  )}

                  {/* number */}
                  {type === "number" && (
                    <>
                      {form?.number?.length > 0 &&
                        form?.number?.map((item, index) => {
                          return (
                            <Stack
                              direction="row"
                              spacing={2}
                              sx={{ alignItems: "center", marginTop: 2 }}
                              key={index}
                            >
                              <TextField
                                id="outlined-basic"
                                label="Number"
                                type="number"
                                variant="outlined"
                                name="number"
                                value={item.number}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "number")
                                }
                              />
                              <TextField
                                id="outlined-basic"
                                label="Max"
                                type="number"
                                sx={{ width: "80px" }}
                                variant="outlined"
                                name="max"
                                value={item.max}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "number")
                                }
                              />
                              <TextField
                                id="outlined-basic"
                                label="Min"
                                type="number"
                                variant="outlined"
                                name="min"
                                value={item.min}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "number")
                                }
                                sx={{ width: "80px" }}
                              />
                              <TextField
                                id="outlined-basic"
                                label="Step"
                                type="number"
                                variant="outlined"
                                name="step"
                                value={item.step}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "number")
                                }
                                sx={{ width: "80px" }}
                              />
                              <MinusBtn
                                form={form}
                                removeincreaseNumbData={removeincreaseNumbData}
                                index={index}
                                type={type}
                              />
                            </Stack>
                          );
                        })}
                    </>
                  )}

                  {/* Radio */}
                  {type === "radio" && (
                    <>
                      {form?.radio?.length > 0 &&
                        form?.radio?.map((item, index) => {
                          return (
                            <Stack
                              direction="row"
                              spacing={2}
                              sx={{ alignItems: "center", marginTop: 2 }}
                            >
                              <TextField
                                id="outlined-basic"
                                label="Radio"
                                variant="outlined"
                                name="radio"
                                value={item.radio}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "radio")
                                }
                              />
                              <MinusBtn
                                form={form}
                                removeincreaseNumbData={removeincreaseNumbData}
                                index={index}
                                type={type}
                              />
                            </Stack>
                          );
                        })}
                    </>
                  )}
                  {/* Select */}
                  {type === "select" && (
                    <>
                      {form?.select?.length > 0 &&
                        form?.select?.map((item, index) => {
                          return (
                            <Stack
                              direction="row"
                              spacing={2}
                              sx={{ alignItems: "center", marginTop: 2 }}
                            >
                              <TextField
                                id="outlined-basic"
                                label="Select"
                                variant="outlined"
                                name="select"
                                value={item.select}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "select")
                                }
                              />
                              <MinusBtn
                                form={form}
                                removeincreaseNumbData={removeincreaseNumbData}
                                index={index}
                                type={type}
                              />
                            </Stack>
                          );
                        })}
                    </>
                  )}

                  {/* Checkbox */}
                  {type === "checkbox" && (
                    <>
                      {form?.checkbox?.length > 0 &&
                        form?.checkbox?.map((item, index) => {
                          return (
                            <Stack
                              direction="row"
                              spacing={2}
                              sx={{ alignItems: "center", marginTop: 2 }}
                            >
                              <TextField
                                id="outlined-basic"
                                label="Checkbox"
                                variant="outlined"
                                name="checkbox"
                                value={item.checkbox}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "checkbox")
                                }
                              />
                              <MinusBtn
                                form={form}
                                removeincreaseNumbData={removeincreaseNumbData}
                                index={index}
                                type={type}
                              />
                            </Stack>
                          );
                        })}
                    </>
                  )}
                  {/* Slider */}
                  {type === "slider" && (
                    <>
                      {form?.slider?.length > 0 &&
                        form?.slider?.map((item, index) => {
                          return (
                            <Stack
                              direction="row"
                              spacing={2}
                              sx={{ alignItems: "center", marginTop: 2 }}
                            >
                              <TextField
                                id="outlined-basic"
                                label="Slider"
                                type="text"
                                variant="outlined"
                                name="slider"
                                value={item.slider}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "slider")
                                }
                              />
                              <TextField
                                id="outlined-basic"
                                label="Max"
                                type="number"
                                sx={{ width: "80px" }}
                                name="max"
                                value={item.max}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "slider")
                                }
                                variant="outlined"
                              />
                              <TextField
                                id="outlined-basic"
                                label="Min"
                                type="number"
                                variant="outlined"
                                name="min"
                                value={item.min}
                                onChange={(e) =>
                                  handleFormInputData(e, index, "slider")
                                }
                                sx={{ width: "80px" }}
                              />

                              <MinusBtn
                                form={form}
                                removeincreaseNumbData={removeincreaseNumbData}
                                index={index}
                                type={type}
                              />
                            </Stack>
                          );
                        })}
                    </>
                  )}
                </CardContent>
              </Card>
              <Box
                marginTop={1}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  color: "green",
                  fontSize: "24px",
                }}
              >
                <IoMdAddCircleOutline
                  onClick={() => addincreaseNumbData({ type })}
                  style={{ cursor: "pointer" }}
                />
              </Box>
            </Box>
          </CardContent>
          <CardActions>
            <Button type="submit" size="small" variant="contained">
              Submit
            </Button>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
}

export default App;
