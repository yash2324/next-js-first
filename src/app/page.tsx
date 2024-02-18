"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
export default function Home() {
  const [value, setValue] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/predictions/${value}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Enter Your Name :</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={value}
          className="text-black"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Predict my info</button>
      </form>
    </main>
  );
}
