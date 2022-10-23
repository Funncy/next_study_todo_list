import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputBox from "./input-box";
import InputBoxView from "./input-box-view";

export default {
  title: "InputBoxView",
  component: InputBoxView,
} as ComponentMeta<typeof InputBoxView>;

const Template: ComponentStory<typeof InputBoxView> = (args) => (
  <InputBoxView {...args} />
);

export const Default = Template.bind({});

Default.args = {};
