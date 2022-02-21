import { useEffect, useState } from "react";

const ImageFallback = (props) => {
  const { fallbackSrc, alt, src, ...rest } = props;
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    const http = new XMLHttpRequest();
    http.open('GET', src, false);
    http.send();
    if (http.status !== 200) {
      setImageSrc(fallbackSrc);
    }
  }, [])

  return <img {...rest} src={imageSrc} alt={alt} />
}

export default ImageFallback;