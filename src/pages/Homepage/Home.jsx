
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Hero Section */}
      <header className="text-center py-16 bg-white shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to MemoCards
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Boost your learning with custom flashcards tailored to your study
          needs.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/create-flashcard"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Create Flashcards
          </Link>
          <Link
            to="/flashcards"
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition"
          >
            Explore Flashcards
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Why Choose MemoCards?
        </h2>
        <ul className="space-y-4 text-lg text-gray-600">
          <li>Simple and easy-to-use flashcard creation</li>
          <li>Customizable flashcard sets to suit your needs</li>
          <li>Study anywhere, anytime</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-8 text-center">
        <p className="text-gray-700 mb-4">
          Join thousands of learners improving their study habits with
          MemoCards.
        </p>
        <Link
          to="/auth"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
        >
          Sign Up for Free
        </Link>
      </footer>
    </div>
  );
};

export default Home;
