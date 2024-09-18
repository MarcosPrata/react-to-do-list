"use client";

import { useState } from "react";
import Card from "./components/Card";
import Column from "./components/Column";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Limpar a casa",
      description: "varrer, passar, lavar",
      status: "doing",
    },
    {
      id: 2,
      title: "Fazer compras",
      description: "aculá",
      status: "done",
    },
    {
      id: 3,
      title: "Jogar videogame",
      description: "God of War",
      status: "to_do",
    },
    {
      id: 4,
      title: "Lavar roupa",
      description: "Na lavanderia",
      status: "to_do",
    },
    {
      id: 5,
      title: "Tarefa 2",
      description: "Na lavanderia",
      status: "done",
    },
    {
      id: 6,
      title: "Tarefa 3",
      description: "Na lavanderia",
      status: "doing",
    },
  ]);

  const onNextButtonClick = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          if(task.status === "to_do") {
            return { ...task, status: "doing" };
          } else if(task.status === "doing") {
            return { ...task, status: "done" };
          }

          return task;
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="container flex flex-row ">
      <Column columnName={"Tarefas para fazer"}>
        {tasks
          .filter((task) => task.status === "to_do")
          .map((task) => (
            <Card
              id={task.id}
              title={task.title}
              description={task.description}
              onButtonClick={(id) => {
                onNextButtonClick(id);
              }}
            />
          ))}
      </Column>

      <Column columnName={"Tarefas que estou fazendo"}>
        {tasks
          .filter((task) => task.status === "doing")
          .map((task) => (
            <Card
              id={task.id}
              title={task.title}
              description={task.description}
              onButtonClick={(id) => {
                onNextButtonClick(id);
              }}
            />
          ))}
      </Column>

      <Column columnName={"Tarefas que concluí"}>
        {tasks
          .filter((task) => task.status === "done")
          .map((task) => (
            <Card
              id={task.id}
              title={task.title}
              description={task.description}
              onButtonClick={(id) => {
                onNextButtonClick(id);
              }}
            />
          ))}
      </Column>
    </div>
  );
}
