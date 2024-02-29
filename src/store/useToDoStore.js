import { create } from "zustand";

const useToDoStore = create((set) => ({
    toDoList: [],
    setToDo: (text) => set((state) => ({
        toDoList: [...state.toDoList, { text, isTouch: false }]
    })),
    setIsTouch: (index) =>
        set((state) => ({
            toDoList: state.toDoList.map((item, i) =>
                i === index ? { ...item, isTouch: !item.isTouch } : item  //isTouch tersini al
            ),
        })),
    deleteSelected: () => set((state) => ({
        toDoList: state.toDoList.filter((item) => !item.isTouch) //isTouch durumu true olmayan ögeleri filtrele
    })),
    deleteToDo: (index) =>
        set((state) => ({
            toDoList: state.toDoList.filter((_, i) => i !== index), //gönderilen index harici filtrele
        })),

}))

export default useToDoStore;;