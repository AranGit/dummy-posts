import PostSelectionForm from "../components/forms/PostSelectionForm";
import PageLayout from "../components/layouts/PageLayout";

function HomePage() {
  return (
    <PageLayout>
      <h3 className="text-center mb-6">Welcome to the Aran's test</h3>
      <PostSelectionForm />
    </PageLayout>
  )
}

export default HomePage
