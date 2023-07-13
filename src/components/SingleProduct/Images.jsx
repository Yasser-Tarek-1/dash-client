import { ps4, zoom_in } from "../../assets";
import ReactImageZoom from "react-image-zoom";
const props = {
  img: ps4,
  zoomPosition: "original",
};

const props_2 = {
  img: ps4,
  zoomPosition: "original",
};

const Images = () => {
  return (
    <div className="flex-1 flex items-center gap-2 flex-col">
      <div className="p-4 rounded-lg border relative cursor-move">
        <button className="left-4 top-4 absolute z-10">
          <img src={zoom_in} className="w-6" alt="zoom_in" />
        </button>
        <ReactImageZoom {...props} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="p-4 rounded-lg border relative cursor-move">
          <ReactImageZoom {...props_2} />
        </button>
        <button className="p-4 rounded-lg border relative cursor-move">
          <ReactImageZoom {...props_2} />
        </button>
        <button className="p-4 rounded-lg border relative cursor-move">
          <ReactImageZoom {...props_2} />
        </button>
        <button className="p-4 rounded-lg border relative cursor-move">
          <ReactImageZoom {...props_2} />
        </button>
      </div>
    </div>
  );
};

export default Images;
