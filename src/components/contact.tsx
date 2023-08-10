import { Contact } from "contentlayer/generated";
import { useState } from "react";

export default function ContactPage({ data }: { data: Contact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="">
      <div className="lg:max-w-screen-lg container mx-auto px-8 h-full">
        <h1 className="font-heading text-4xl lg:text-6xl text-center font-light text-feldgrau uppercase py-16">
          {data.title}
        </h1>
        <form
          className="pb-16"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        >
          <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="block w-full rounded p-2"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="block w-full rounded p-2"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="block w-full rounded p-2"
              name="message"
              id="message"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
          </div>
          <div className="mb-4">
            <button
              className="block bg-feldgrau text-isabelline w-full rounded uppercase py-4 px-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
