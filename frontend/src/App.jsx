import ComplaintForm from './components/ComplaintForm';
import ComplaintList from './components/ComplaintList';
import './App.css';
import DashboardStats from './components/DashboardStats';

function App() {

  return (

    <div className="container">

      <DashboardStats />

      <ComplaintForm />

      <ComplaintList />

    </div>

  );

}

export default App;