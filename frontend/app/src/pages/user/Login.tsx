import React, { useState } from "react";

const UserLogin = () => {
  const [username, setUsername] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/api/users/get-by-name?name=" + username).then((data) => {
      console.log(data);
    });
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-300 text-left">Username</label>
        <input
          type="text"
          className="input-base"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
      </div>
      <button
        type="submit"
        className="w-full py-2.5 bg-brand-500 hover:bg-brand-400 text-white rounded-lg font-medium shadow-md shadow-brand-500/20 transition-all active:scale-95 cursor-pointer mt-6"
      >
        Sign In
      </button>
    </form>
  );
};

const UserRegister = () => {
  const [username, setUsername] = useState("");
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        teamName,
        password,
      }),
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4 text-left">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-300">Username</label>
        <input type="text" className="input-base" placeholder="Choose a username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-300">Team Name</label>
        <input type="text" className="input-base" placeholder="Your team name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-300">Password</label>
        <input type="password" className="input-base" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-300">Confirm Password</label>
        <input type="password" className="input-base" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button
        type="submit"
        className="w-full py-2.5 bg-brand-500 hover:bg-brand-400 text-white rounded-lg font-medium shadow-md shadow-brand-500/20 transition-all active:scale-95 cursor-pointer mt-6"
      >
        Create Account
      </button>
    </form>
  );
};

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="page-container flex-1 mt-8">
      <div className="glass-card w-full max-w-md mx-auto p-8 text-center">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            {isRegistering ? "Create an account" : "Welcome back"}
          </h1>
          <p className="text-slate-400 text-sm">
            {isRegistering ? "Sign up to start managing your leagues." : "Enter your details to sign in to your account."}
          </p>
        </div>

        {isRegistering ? <UserRegister /> : <UserLogin />}

        <div className="mt-8 text-sm text-slate-400">
          {isRegistering ? (
            <p>
              Already have an account?{" "}
              <button onClick={() => setIsRegistering(false)} className="text-brand-400 hover:text-brand-300 font-medium transition-colors cursor-pointer bg-transparent border-none">
                Sign in
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button onClick={() => setIsRegistering(true)} className="text-brand-400 hover:text-brand-300 font-medium transition-colors cursor-pointer bg-transparent border-none">
                Sign up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
