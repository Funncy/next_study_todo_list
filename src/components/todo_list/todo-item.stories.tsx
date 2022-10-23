import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TodoItemView from "./todo-item-view";

export default {
  title: "TodoItemView",
  component: TodoItemView,
  // parameters: {
  //     // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //     layout: 'fullscreen',
  // },
} as ComponentMeta<typeof TodoItemView>;

const Template: ComponentStory<typeof TodoItemView> = (args) => (
  <TodoItemView {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "test",
  isDone: false,
};

export const Chekced = Template.bind({});

Chekced.args = {
  title: "test",
  isDone: true,
};
