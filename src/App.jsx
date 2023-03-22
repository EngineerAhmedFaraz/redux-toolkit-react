import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if (state.todo.isLoading) {
    return <h1 className="my-[120px] text-red-600 text-3xl">Loading....</h1>;
  }
  return (
    <div className="gradient-background">
      <Navbar />
      <button
        onClick={(e) => dispatch(fetchTodos())}
        className="py-[1rem] px-[2rem] text-white text-[18px] font-[400] uppercase my-[3%] mx-[40%] bg-slate-800 cursor-pointer ease-linear duration-300 hover:bg-yellow-500"
      >
        Fetch Todos
      </button>
      <div className="w-[1300px] mx-auto h-[800px] border-[1px] bg-black/40 border-solid border-slate-900 rounded-md shadow-sm shadow-zinc-600 px-[30px] overflow-hidden">
        {state.todo.data &&
          state.todo.data?.map((e) => {
            return (
              <li
                key={e.id}
                className="border-b-[1px] border-solid text-[18px] text-white border-slate-500 py-[10px] w-[50%]"
              >
                {e.title}
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default App;
