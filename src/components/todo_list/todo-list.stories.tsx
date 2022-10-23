import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TodoList from "./todo-list";

export default {
  title: "TodoList",
  component: TodoList,
  // parameters: {
  //     // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //     layout: 'fullscreen',
  // },
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  todos: [
    {
      id: "1",
      title: "test1",
      isDone: true,
    },
    {
      id: "2",
      title: "test2",
      isDone: false,
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  todos: [],
};

export const Full = Template.bind({});
Full.args = {
  todos: [
    {
      id: "1",
      title: "test1",
      isDone: true,
    },
    {
      id: "2",
      title: "test2",
      isDone: false,
    },
    {
      id: "3",
      title: "test1",
      isDone: true,
    },
    {
      id: "4",
      title: "test2",
      isDone: false,
    },
    {
      id: "5",
      title: "test1",
      isDone: true,
    },
    {
      id: "6",
      title: "test2",
      isDone: false,
    },
    {
      id: "7",
      title: "test1",
      isDone: true,
    },
    {
      id: "8",
      title: "test2",
      isDone: false,
    },
    {
      id: "9",
      title: "test1",
      isDone: true,
    },
    {
      id: "10",
      title: "test2",
      isDone: false,
    },
    {
      id: "11",
      title: "test1",
      isDone: true,
    },
    {
      id: "12",
      title: "test2",
      isDone: false,
    },
  ],
};
