import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function ContentCard() {
  const { id } = useParams();

  // Estado para almacenar los SVG cargados dinámicamente
  const [svgs, setSvgs] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Importar dinámicamente todos los SVG de forma asíncrona
    const loadSvgs = async () => {
      const modules = import.meta.glob("./assets/*.svg");
      const loadedSvgs = {};

      for (const path in modules) {
        const module = await modules[path]();
        loadedSvgs[path] = module.default;
      }

      setSvgs(loadedSvgs);
      setIsLoading(false);
    };

    loadSvgs();
  }, []);

  // Contenido dinámico basado en el id
  const contentData = {
    1: {
      title: "ContentCard 1",
      image: "./assets/comic-ej.svg",
    },
    2: {
      title: null,
      image: null,
    },
  };

  // Obtener el contenido correspondiente al id
  const content = contentData[id] || {
    title: "Contenido no encontrado",
    image: "./assets/no-image.svg",
  };

  // Asegurar valores por defecto para title e image
  const title = content.title || "Título no disponible";
  const image = svgs[content.image] || svgs["./assets/no-image.svg"];

  if (isLoading) {
    return (
      <p className="p-6 m-6 bg-zinc-700 rounded-lg shadow-md text-5xl">
        Cargando contenido...
      </p>
    );
  }

  return (
    <article className="p-6 m-6 bg-zinc-700 rounded-lg shadow-md">
      <h1>{title}</h1>
      <img src={image} alt={title} />
    </article>
  );
}
