import { toast } from 'react-toastify';

export default function fetchPics(name, page) {
  const ACCESS_KEY = '23348722-ce6138f5525b6382824043b6d';

  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${ACCESS_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => {
    if (res.ok) {
      console.log(res);
      return res.json();
    }

    return toast.error('Сервер не отвечает, попробуйте достучаться позднее');
  });
}
