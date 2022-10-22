import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TodoItem from "../src/components/todo-item";

export default {
  title: "TodoItem",
  component: TodoItem,
  // parameters: {
  //     // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //     layout: 'fullscreen',
  // },
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => <TodoItem />;

export const Init = Template.bind({});
