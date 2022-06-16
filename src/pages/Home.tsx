import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return

    const newTask: Task = {
      done: false,
      id: Date.now(),
      title: newTaskTitle
    }

    setTasks(prevState => [...prevState, newTask])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const task = tasks.find(task => task.id === id)

    if (!task) return

    task.done = !task.done

    setTasks([...tasks])
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const newTasksState = tasks.filter(task => task.id !== id)
    setTasks(newTasksState)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})