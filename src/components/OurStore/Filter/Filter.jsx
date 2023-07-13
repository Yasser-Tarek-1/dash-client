import CheckBox from "../../../Layouts/CheckBox";
import Form from "../../../Layouts/Form";

const CHEACK_BOX = [
  {
    name: "instock",
    count: 24,
    type: "In Stock",
  },
  {
    name: "outstock",
    count: 3,
    type: "Out of stock",
  },
];

const COLORS = [
  {
    name: "Absolute Zero",
    hex: "#0048BA",
  },
  {
    name: "Acid Green",
    hex: "#B0BF1A",
  },
  {
    name: "Aero",
    hex: "#7CB9E8",
  },
  {
    name: "Aero Blue",
    hex: "#C9FFE5",
  },
  {
    name: "African Violet",
    hex: "#B284BE",
  },
  {
    name: "Antique Fuchsia",
    hex: "#915C83",
  },
  {
    name: "Antique Ruby",
    hex: "#841B2D",
  },

  {
    name: "Ao (English)",
    hex: "#008000",
  },
  {
    name: "Apple Green",
    hex: "#8DB600",
  },
  {
    name: "Apricot",
    hex: "#FBCEB1",
  },
  {
    name: "Aqua",
    hex: "#00FFFF",
  },
  {
    name: "Aquamarine",
    hex: "#7FFFD4",
  },
  {
    name: "Arctic Lime",
    hex: "#D0FF14",
  },
  {
    name: "Army Green",
    hex: "#4B5320",
  },
  {
    name: "Arsenic",
    hex: "#3B444B",
  },
  {
    name: "Artichoke",
    hex: "#8F9779",
  },
  {
    name: "Air Force Blue (RAF)",
    hex: "#5D8AA8",
  },
  {
    name: "Air Force Blue (USAF)",
    hex: "#00308F",
  },
  {
    name: "Air Superiority Blue",
    hex: "#72A0C1",
  },
  {
    name: "Alabama Crimson",
    hex: "#AF002A",
  },

  {
    name: "Alien Armpit",
    hex: "#84DE02",
  },
  {
    name: "Alizarin Crimson",
    hex: "#E32636",
  },
  {
    name: "Alloy Orange",
    hex: "#C46210",
  },
  {
    name: "Almond",
    hex: "#EFDECD",
  },
  {
    name: "Amaranth",
    hex: "#E52B50",
  },
  {
    name: "Amaranth Deep Purple",
    hex: "#9F2B68",
  },
  {
    name: "Amaranth Pink",
    hex: "#F19CBB",
  },
  {
    name: "Amaranth Purple",
    hex: "#AB274F",
  },
  {
    name: "Amaranth Red",
    hex: "#D3212D",
  },
  {
    name: "Amazon Store",
    hex: "#3B7A57",
  },
  {
    name: "Amazonite",
    hex: "#00C4B0",
  },
  {
    name: "Amber",
    hex: "#FFBF00",
  },
  {
    name: "Amber (SAE/ECE)",
    hex: "#FF7E00",
  },
  {
    name: "American Rose",
    hex: "#FF033E",
  },
  {
    name: "Amethyst",
    hex: "#9966CC",
  },
  {
    name: "Android Green",
    hex: "#A4C639",
  },

  {
    name: "Antique Brass",
    hex: "#CD9575",
  },
  {
    name: "Antique Bronze",
    hex: "#665D1E",
  },
];

const SIZE = [
  {
    count: 10,
    size: "s",
  },
  {
    count: 14,
    size: "m",
  },
  {
    count: 8,
    size: "l",
  },
  {
    count: 4,
    size: "xl",
  },
  {
    count: 1,
    size: "2xl",
  },
];

const Filter = () => {
  return (
    <div className="py-4 px-6 rounded-lg bg-white w-full">
      <h3 className="text-lg font-[500]">Filter by</h3>
      {/* Availability */}
      <div className="mt-6 flex items-start gap-3 flex-col">
        <h4 className="text-sm font-[500]">Availability</h4>
        {CHEACK_BOX.map(({ name, count, type }, idx) => (
          <CheckBox key={idx} label={`${type} (${count})`} id={name} />
        ))}
      </div>
      {/* Price */}
      <div className="mt-6 flex items-start gap-3 flex-col">
        <h4 className="text-sm font-[500]">Price</h4>
        <div className="flex items-center justify-between w-full gap-2">
          <Form.Control placeholder="$" />
          <Form.Control placeholder="$" />
        </div>
      </div>
      {/* Color */}
      <div className="mt-6 flex items-start gap-3 flex-col">
        <h4 className="text-sm font-[500]">Color</h4>
        <div className="flex items-center w-full gap-2 flex-wrap px-6">
          {COLORS.map(({ hex }, idx) => {
            return (
              <button
                key={idx}
                style={{ backgroundColor: hex }}
                className={` w-6 h-6 rounded-full block`}
              ></button>
            );
          })}
        </div>
      </div>
      {/* Size */}
      <div className="mt-6 flex items-start gap-3 flex-col">
        <h4 className="text-sm font-[500]">Size</h4>
        {SIZE.map(({ count, size }, idx) => (
          <CheckBox key={idx} label={`${size} (${count})`} id={size} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
