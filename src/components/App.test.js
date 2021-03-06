import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "./Header";
import DogGuessr from "./DogGuessr";

const app = shallow(<App />);

it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});

it("renders the Header component", () => {
  expect(app.find(Header)).toHaveLength(1);
});

it("renders the DogGuessr component", () => {
  expect(app.find(DogGuessr)).toHaveLength(1);
});
