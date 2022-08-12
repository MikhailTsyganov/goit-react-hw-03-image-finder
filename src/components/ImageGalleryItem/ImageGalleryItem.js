export default function ImageGalleryItem({ img, alt }) {
  return (
    <li className="gallery-item">
      <img src={img} alt={alt} />
    </li>
  );
}
