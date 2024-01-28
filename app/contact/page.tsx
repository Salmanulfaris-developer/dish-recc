export default function Contact() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl mb-6">Feedback</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-600">
            Ph:no
          </label>
          <input
            type="number"
            id="number"
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="FeedBack" className="block text-sm font-medium text-gray-600">
            FeedBack
          </label>
          <input
            type="text"
            id="feedback"
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <a
          type="button"
          className="bg-amber-300 text-white py-2 px-4 rounded-md hover:bg-amber-200"
          href="http://localhost:3000/"
        >
          Submit
        </a>
      </form>
    </div>
    )
}