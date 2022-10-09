import { Layout } from "components";
import { MemeGenerator, DoggieClasses } from "projects";

export default function ProjectPage() {
  return (
    <Layout>
      <Layout.Header title="Project" />
      <Layout.Main>
        <MemeGenerator />
        <DoggieClasses />
      </Layout.Main>
    </Layout>
  );
}
