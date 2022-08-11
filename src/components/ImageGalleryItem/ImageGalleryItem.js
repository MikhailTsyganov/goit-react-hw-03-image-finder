export default function ImageGalleryItem({ img }) {
  return (
    <li className="gallery-item">
      <img src={img} alt="" />
    </li>
  );
}
