export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white px-6 py-24">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In Touch
        </h2>

        <p className="text-gray-400">
          Interested in working together or have a question?
          Send me a message and I’ll get back to you.
        </p>

        <form
          action="https://formspree.io/f/mjgjgpwr"
          method="POST"
          className="space-y-4"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full p-3 rounded bg-gray-900 border border-gray-800 focus:outline-none focus:border-indigo-500"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full p-3 rounded bg-gray-900 border border-gray-800 focus:outline-none focus:border-indigo-500"
          />

          <textarea
            required
            name="message"
            rows="5"
            placeholder="Your message"
            className="w-full p-3 rounded bg-gray-900 border border-gray-800 focus:outline-none focus:border-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition py-3 rounded font-medium"
          >
            Send Message
          </button>
        </form>

        <p className="text-sm text-gray-500 pt-4">
          Burnaby, BC ·{" "}
          <a
            href="https://www.linkedin.com/in/arshdeep-kaur-435a3921a/"
            className="underline hover:text-white"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  )
}