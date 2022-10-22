import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputBox from "./input-box";

export default {
  title: "InputBox",
  component: InputBox,
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = (args) => (
  <InputBox {...args} />
);

export const Default = Template.bind({});

Default.args = {};
