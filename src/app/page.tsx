import Courses from "./components/Courses";

const HomePage = () => {
  return (
    <main>
      <h1 className="font-medium text-2xl mb-5">
          Welcome to Skillhub
      </h1>
      <Courses />
    </main>
  )
}

export default HomePage;