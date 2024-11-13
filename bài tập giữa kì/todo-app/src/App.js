import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
import axios from 'axios';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDate, setDate] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [currentEditedItem, setCurrentEditedItem] = useState("");

  
  
  const fetchTodos = () => {
    axios.get('/api/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
  };

  const fetchCompleteTodos = () => {
    axios.get('/apis/completetodos')
      .then(response => {
        setCompletedTodos(response.data);
      })
      .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
  };

  const AddTo = () => {
    if (newDate && newTitle && newDescription) {


      let formattedDate = format(newDate, 'yyyy-MM-dd HH:mm:ss'); 
      let newTodoItem = {
        title: newTitle,
        description: newDescription,
        due_date: formattedDate, 
      };
      console.log(newTodoItem);
      axios.post('/api/todos', newTodoItem)
        .then(response => {
          setTodos([...allTodos, response.data]);
          setNewTitle('');
          setNewDescription('');
          setDate('');
          fetchTodos();
          toast.success("Thêm công việc thành công!");
        })
        .catch(error => console.error("Lỗi khi thêm todo:", error));
    } else {
      toast.error("Vui lòng nhập đầy đủ thông tin");
    }
  };
  

  const DeleteToDo = (id) => {
    axios.delete(`/api/todos/${id}`)
      .then(() => {
        const updatedTodos = allTodos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        toast.success("Công việc đã được xoá khỏi todolist !");
      })
      .catch(error => {
        console.error("Lỗi khi xóa todo:", error);
      });
  };

  const DeleteToDo2 = (id) => {
    axios.delete(`/apis/completetodos/${id}`)
      .then(() => {
        const updatedTodos = completedTodos.filter(todo => todo.id !== id);
        setCompletedTodos(updatedTodos);
        toast.success("Xóa công việc thành công!");
      })
      .catch(error => {
        console.error("Lỗi khi xóa todo:", error);
      });
  };

  const isComplete = (index) => {
    
    let filteredItem = {
      ...allTodos[index],
    };
    
    const id = allTodos[index].id;
    DeleteToDo(id);  

    axios.post('/apis/completetodos', filteredItem)
      .then(response => {
        setCompletedTodos([...completedTodos, response.data]);
        setNewTitle('');
        setNewDescription('');
        setDate('');
        fetchCompleteTodos();
        toast.success("Công việc đã hoàn thành!");
      })
      .catch(error => console.error("Lỗi khi thêm todo:", error));


  };
const updateTodo = (id, updatedData) => {
  axios.put(`/api/todos/${id}`, updatedData)
    .then(response => {

      setTodos( allTodos.map(todo => (todo.id === id ? response.data : todo)));
      fetchTodos();
      toast.success("Cập nhật công việc thành công!");
    })
    .catch(error => {
      console.error("Lỗi khi cập nhật dữ liệu:", error);
      alert("Cập nhật todo thất bại. Vui lòng thử lại.");
    });
};
  useEffect(() => {
    fetchTodos();
    fetchCompleteTodos();
  }, []);

  const Edit = (ind, item) => {
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  };

  const UpdateTile = (value) => {
    setCurrentEditedItem((prev) => ({ ...prev, title: value }));
  };

  const UpdateDescription = (value) => {
    setCurrentEditedItem((prev) => ({ ...prev, description: value }));
  };

  const UpdateDate = (value) => {
    setCurrentEditedItem((prev) => ({ ...prev, due_date: value }));
  };

  const handleUpdate = () => {
    const updatedData = {
      title: currentEditedItem.title,
      description: currentEditedItem.description,
      due_date: currentEditedItem.due_date,
    };
    updateTodo(currentEditedItem.id, updatedData);
    setCurrentEdit(null);
    setCurrentEditedItem({});
  };
  const getCurrentTime = () => {
    const now = new Date();
    const dd = now.getDate();
    const mm = now.getMonth() + 1;
    const yy = now.getFullYear();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
  

    return `${dd}-${mm}-${yy} lúc ${h}:${m}:${s}`;
  };

  const getTitleColor = (dueDate) => {
    if (!dueDate) return 'black';
  
    const currentDate = new Date();
    const taskDate = new Date(dueDate);
    const differenceInDays = (taskDate - currentDate) / (1000 * 60 * 60 * 24);
  
    if (differenceInDays > 7) {
      return 'rgb(0, 255, 0)';
    } else if (differenceInDays > 5) {
      return 'rgb(194, 255, 0)'; 
    } else if (differenceInDays > 3) {
      return 'yellow'; 
    } else if (differenceInDays > 0) {
      return 'orange'; 
    } else {
      return 'red'; 
    }
  };
  
  return (
    <div className="App">
      <h1>My work</h1>
      <ToastContainer  
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
      <div className='todo-wrapper'>
        <div className='todo_input'>
          <div className="todo_input_item">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="What's the task title? "/>
          </div>
          <div className="todo_input_item">
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="What's the task description? "/>
          </div>
          <div className="todo_input_item">
            <label>Date</label>
            <input type="date" value={newDate} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="todo_input_item">
            <button type="button" onClick={AddTo} className="primaryBtn">Add</button>
          </div>
        </div>

        <div className='btn_area'>
          <button className={`SecondaryBtn ${isCompleteScreen === false && 'active'}`} onClick={() => setIsCompleteScreen(false)}>Todo</button>
          <button className={`SecondaryBtn ${isCompleteScreen === true && 'active'}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
        </div>

        <div className="todo-list">
          {!isCompleteScreen && allTodos.map((item, index) => {
            if (currentEdit === index) {
              return (
                <div className='edit' key={index}>
                  <input 
                    placeholder='Update Title' 
                    onChange={(e) => UpdateTile(e.target.value)} 
                    value={currentEditedItem.title} 
                  />
                  <textarea 
                    placeholder='Update Description' 
                    rows={3} 
                    onChange={(e) => UpdateDescription(e.target.value)} 
                    value={currentEditedItem.description} 
                  />
                  <input 
                    type="date" 
                    placeholder='Update Date' 
                    onChange={(e) => UpdateDate(e.target.value)} 
                    value={currentEditedItem.date} 
                  />
                  <button type="button" onClick={handleUpdate} className="primaryBtn">Update</button>
                </div>
              );
            } else {
              return (
                <div className="todo-list-item" key={item.id}>
                  <div>
                    <h3 style={{ color: getTitleColor(item.due_date) }}> {item.title}</h3>
                    <p>{item.description}</p>
                    <p> Thời gian kết thúc : {item.due_date && !isNaN(new Date(item.due_date)) ? format(new Date(item.due_date), 'yyyy-MM-dd') 
                      : 'Không rõ'}</p>

                  </div>
                  <div>
                    <FaCheck className='check-icon' onClick={() => isComplete(index)} title='Complete?' />
                    <MdDelete className='icon' onClick={() => DeleteToDo(item.id)} title='Delete?' />
                    <MdOutlineEditCalendar className='Edit-icon' onClick={() => Edit(index, item)} title='Edit?' />
                  </div>
                </div>
              );
            }
          })}
          {isCompleteScreen && completedTodos.map((item) => {
            return (
              <div className="todo-list-item" key={item.id}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><small>Thời điểm hoàn thành : {getCurrentTime()}</small></p>
                </div>
                <div>
                  <MdDelete className='icon' onClick={() => DeleteToDo2(item.id)} title='Delete?' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
