
import './App.css';
import ProfileCard from './ProfileCard';
import Profile from './Profile'

function App() {
  const users = [
    {
      name: 'Elon musk',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      twitterLink: <a href = "https://twitter.com/chrisnode">@chrisnode</a>,
      avatar: 'https://bit.ly/3By8sO0'
    },
 {
      name: 'Chris Morgan',
      location: 'Florida',
      foodType: 'Chicken and Chips',
      age: 45,
      likes: 'Swimming and Reading',
      twitterUsername: 'Morgan45',
      twitterLink: <a href = "https://twitter.com/chrisnode">@morgan45</a>,
      avatar:
        'https://bit.ly/3BwaJcz'
    }
  ]
  return (
    <div className="App">
      
      
      <ProfileCard user = {users} />
      <Profile userS = {users} />



    </div>
  );
}

export default App;
