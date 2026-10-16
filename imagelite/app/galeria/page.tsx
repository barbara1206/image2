'use client';
import { Template, ImageCard } from '../components';
import { Image } from '../resouce/Image';
import { ImageService, useImageService } from '../resouce/Service'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '../components';


export default function Galeria() {

  const router = useRouter();
  const useService = useImageService();
  const [images, setImage] = useState<Image[]>([]) 
  const [query, setQuery] = useState<string>('')
  const [extension, setExtension] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false);

  async function searchImages() {
  setLoading(true);

  try {
    const result = await useService.buscar(query, extension);
    setImage(result);
    console.log(query, extension);
  } catch (error) {
    console.error('Erro ao buscar imagens:', error);
  } finally {
    setLoading(false);
  }
}
  /*renderizando a imagem na tela*/
  function renderImageCard(image: Image) {
    return (
      <ImageCard key = {image.url}
        imageName={image.name}
        imageUrl={image.url}
        imageSize={image.size}
        extension={image.extension}
        uploadDate={image.uploadDate} />
    )
  }

  function renderImageCards() {
    //return images.map((image) => renderImageCard(image));
    return images.map(renderImageCard);
  }


  return (
    //<main>
    <Template>
      <section className="flex flex-col items-center justify-center my-5">
            <div className="flex space-x-4">
              <input type="text" 
              onChange={(event) => setQuery(event.target.value)}
              className="border px-4 py-2 rounded-lg text-white-900" placeholder="Buscar imagens..." />
              <select onChange={event => setExtension(event.target.value)}
               className="border px-4 py-2 rounded-lg text-white-900">
                <option value="">All formats</option>
                 <option value="PNG">PNG</option>
                  <option value="JPG">JPG</option>
                   <option value="GIF">GIF</option>
                    <option value="JPEG">JPEG</option>
              </select>
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" onClick={searchImages}>Search </button>
              <Button type="button"variant="danger"onClick={() => router.push('/upload')}>Add New</Button>
            </div>
        </section>

      {loading ? (
  <div className="flex justify-center items-center p-10">
    <p className="text-xl font-bold text-blue-900">
      Carregando...
    </p>
  </div>
) : (
  <section className="grid grid-cols-4 gap-4 p-4">
    {renderImageCards()}
  </section>
)}
    </Template>
    //</main>
  )
}
