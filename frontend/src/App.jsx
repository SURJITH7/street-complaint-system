import Login from './components/Login';
import ComplaintForm from './components/ComplaintForm';
import ComplaintList from './components/ComplaintList';
import DashboardStats from './components/DashboardStats';

import './App.css';

function App() {

  const token = localStorage.getItem('token');

  const handleLogout = () => {

    localStorage.removeItem('token');

    window.location.reload();

  };

  return (

    <div className="container">

      {
        token ? (

          <>

            <button onClick={handleLogout}>
              Logout
            </button>

            <DashboardStats />

            <ComplaintForm />

            <ComplaintList />

          </>

        ) : (

          <Login />

        )
      }

    </div>

  );

}

export default App;