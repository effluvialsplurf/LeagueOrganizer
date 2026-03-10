import { useState } from "react";

const UserLogin = () => {
  const [username, setUsername] = useState("");

  const handleLogin = (username: string) => {
    fetch("/api/users/get-by-name?name=" + username).then((data) => {
      console.log(data)
    })
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-between h-[50vh]">
        <input type="text" className="bg-gray-400 rounded" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLogin(username)}>
          Login
        </button>
      </div>
    </div>
  );
}

const UserRegister = () => {
  const [username, setUsername] = useState("");
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (username: string, teamName: string, password: string) => {
    fetch("/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        teamName: teamName,
        password: password,
      }),
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-between h-[50vh]">
        <input type="text" className="bg-gray-400 rounded" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" className="bg-gray-400 rounded" placeholder="team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
        <input type="password" className="bg-gray-400 rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" className="bg-gray-400 rounded" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRegister(username, teamName, password)}>
          Register
        </button>
      </div>
    </div>
  );
}

// a page that allows a user to login or register
export default function Login() {
  const [register, setRegister] = useState(false);

  const registerOrLogin = () => {
    if (register) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <UserRegister />
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <UserLogin />
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setRegister(!register)}
      >
        Register
      </button>
      {registerOrLogin()}
    </div>
  );
}
