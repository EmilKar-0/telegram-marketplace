import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={1}
    width={190}
    height={302}
    backgroundColor="#9a9999"
    foregroundColor="#bdbaba"
    {...props}
  >
    <rect x="0" y="0" rx="35" ry="35" width="190" height="270" />
  </ContentLoader>
);
export default Skeleton;
