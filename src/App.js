import './App.css';
import Delete from './components/delete';
import GetData from './components/getData';
import PostData from './components/postData';
import PutData from './components/putData';

function App() {
  return (
    <div>
      <GetData  />
      <PutData />
      <Delete />
      <PostData />
    </div>
  );
}

export default App;
