import MenuBar from './components/MenuBar';

export default function App() {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username') || '';

  return (
    <div className="min-h-screen bg-gray-50">
      <MenuBar token={token} username={username} />
    </div>
  );
}