
export interface IAboutPageProps {
}

function AboutPage(props: IAboutPageProps) {
  return (
    <div>
      About Page
    </div>
  );
}

export default AboutPage;

export function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}