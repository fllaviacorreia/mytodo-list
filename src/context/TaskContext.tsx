import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Definindo a interface para uma Task
export type Task = {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    status: "open" | "finished";
    startsAt: string;
    endsAt: string;
    priority: "low" | "medium" | "high";
};

export type NewTask = {
    title: string;
    description: string;
    startsAt: string;
    endsAt: string;
    priority: "low" | "medium" | "high";
}

// Definindo a interface para o contexto de Task
type TaskContextType = {
    tasks: Task[];
    addTask: (task: Omit<Task, "id" | "createdAt">) => void;
    updateTask: (id: string, updatedTask: Partial<Task>) => void;
    deleteTask: (id: string) => void;
    getTaskById: (id: string) => Task | undefined;
};

// Criando o contexto com valores padrão
const TaskContext = createContext<TaskContextType>({
    tasks: [],
    addTask: () => { },
    updateTask: () => { },
    deleteTask: () => { },
    getTaskById: () => undefined,
});

export const TaskProvider = ({ children }: any) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    // Função para carregar as tarefas do AsyncStorage
    const loadTasks = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem("@mytodo-tasks");
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.error("Erro ao carregar as tarefas do AsyncStorage:", error);
        }
    };

    // Carregar as tarefas quando o componente for montado
    useEffect(() => {
        loadTasks();
    }, []);

    // Função para salvar as tarefas no AsyncStorage
    const saveTasks = async (tasks: Task[]) => {
        try {
            await AsyncStorage.setItem("@mytodo-tasks", JSON.stringify(tasks));
        } catch (error) {
            console.error("Erro ao salvar as tarefas no AsyncStorage:", error);
        }
    };

    // Função para adicionar uma nova task
    const addTask = (task: Omit<Task, "id" | "createdAt" >): void => {
        const newTask: Task = {
            ...task,
            id: Date.now().toString(), // Gerando um ID baseado no timestamp atual
            createdAt: new Date().toISOString(),
        };
    
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
    };
    

    // Função para atualizar uma task existente
    const updateTask = (id: string, updatedTask: Partial<Task>) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
        );
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
    };

    // Função para remover uma task
    const deleteTask = (id: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
    };

    // Função para buscar uma task pelo ID
    const getTaskById = (id: string) => {
        return tasks.find((task) => task.id === id);
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                updateTask,
                deleteTask,
                getTaskById,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

// Hook para acessar o contexto de Task
export const useTask = () => useContext(TaskContext);

export default TaskProvider;
