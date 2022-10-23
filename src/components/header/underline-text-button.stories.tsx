import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UnderlineTextButton from "./underline-text-button";

export default {
  title: "UnderlineTextButton",
  component: UnderlineTextButton,
  // parameters: {
  //     // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //     layout: 'fullscreen',
  // },
} as ComponentMeta<typeof UnderlineTextButton>;

const Template: ComponentStory<typeof UnderlineTextButton> = (args) => (
  <UnderlineTextButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  active: false,
  text: "All",
};

export const Active = Template.bind({});

Active.args = {
  active: true,
  text: "All",
};
