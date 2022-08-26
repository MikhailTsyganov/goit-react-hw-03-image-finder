import BeatLoader from 'react-spinners/ClipLoader';

function Loader() {
  return (
    <div style={{ textAlign: 'center' }}>
      <BeatLoader color="#3f51b5" size={60} />
    </div>
  );
}

export default Loader;
