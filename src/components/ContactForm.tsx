import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../services/firebase";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const send = async (e: React.FormEvent<HTMLFormElement>) => {
		const result = { name, email, message, ts: Date.now() };
		e.preventDefault();
		setName("");
		setEmail("");
		setMessage("");
		const messages = collection(db, "messages");
		await addDoc(messages, result);
	};

	return (
		<form
			className="flex flex-col max-w-[550px] ml-auto mr-auto"
			onSubmit={send}
		>
			<label htmlFor="name">Name</label>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				className="rounded-sm outline-none bg-zinc-700 p-1"
				required
				type="text"
				name="name"
				id="name"
			/>

			<label htmlFor="email">Email</label>
			<input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="rounded-sm outline-none bg-zinc-700 p-1"
				required
				type="email"
				name="email"
				id="email"
			/>

			<label htmlFor="msg">Message</label>
			<textarea
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className="rounded-sm outline-none bg-zinc-700 p-1 h-48 resize-none"
				required
				name="msg"
				id="msg"
			></textarea>

			<button className="mt-2 p-2 w-full bg-blue-600 rounded-sm hover:bg-blue-700">
				Send
			</button>
		</form>
	);
};

export default ContactForm;
