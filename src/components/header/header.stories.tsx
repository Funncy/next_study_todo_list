import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./header";

export default {
  title: "Header",
  component: Header,
  // parameters: {
  //     // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //     layout: 'fullscreen',
  // },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// export const Default = Template.bind({});
//
// Default.args = {
//   active: 1,
// };
//
// export const Active = Template.bind({});
//
// Active.args = {
//   active: 2,
// };
//
// export const Completed = Template.bind({});
//
// Completed.args = {
//   active: 3,
// };
