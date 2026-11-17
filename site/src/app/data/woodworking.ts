export interface WoodworkingPiece {
  title: string;
  description: string;
  /** Path under public/, e.g. 'images/woodworking/side-table.jpg' */
  image: string;
  alt: string;
  /** Pixel size of the image file, used to avoid layout shift. */
  width: number;
  height: number;
}

// Add a piece: drop the photo in public/images/woodworking/ and add an entry here.
// The gallery section stays hidden until this list has at least one entry.
// TODO: descriptions below are drafted from the photos; correct the wood species and details.
export const woodworking: WoodworkingPiece[] = [
  {
    title: 'Kinetic Sand Table',
    description:
      'A dark hardwood table with a recessed tray of sand and color-changing lighting. A mechanism underneath draws slow, looping patterns in the sand. An Arduino handles the CNC motion control, and a Raspberry Pi running OctoPrint provides a web UI.',
    image: 'images/woodworking/sand-table.jpg',
    alt: 'Dark wood table with a lit tray of sand showing a flower-shaped spiral pattern',
    width: 1600,
    height: 1200,
  },
  {
    title: 'Under the Sand Table',
    description:
      'The mechanism beneath the tray: an XY gantry on linear rails driven by belts and stepper motors, with the Arduino CNC controller, wiring, and 3D-printed brackets.',
    image: 'images/woodworking/sand-table-mechanism.jpg',
    alt: 'Underside of the sand table showing rails, belts, motors, and wiring',
    width: 1600,
    height: 1200,
  },
  {
    title: 'Mountain Dulcimer',
    description:
      'A mountain dulcimer with a bookmatched curly cherry top, a roswood fretboard, and flame-shaped sound holes.',
    image: 'images/woodworking/dulcimer.jpg',
    alt: 'Mountain dulcimer with figured wood top leaning against a deck railing',
    width: 768,
    height: 1024,
  },
  {
    title: 'Inlaid Keepsake Box',
    description:
      'A locking keepsake box in padauk hardwood. The lid has a curly maple panel framed by a checkerboard inlay, and dark walnut splines reinforce the corners.',
    image: 'images/woodworking/keepsake-box.jpg',
    alt: 'Red wooden box with a checkerboard inlay border on the lid and a brass keyhole',
    width: 1600,
    height: 1200,
  },
  {
    title: '3D End-Grain Cutting Boards',
    description:
      'End-grain boards in a stepped cube pattern that reads as three-dimensional, built from walnut, cherry, and maple separated by thin maple strips.',
    image: 'images/woodworking/cutting-boards.jpg',
    alt: 'Three end-grain cutting boards with a three-dimensional cube pattern',
    width: 1600,
    height: 1067,
  },
  {
    title: 'Celtic Knot Pen',
    description:
      'A wooden pen with a Celtic knot inlaid in black, finished to a high gloss and paired with gold and chrome hardware.',
    image: 'images/woodworking/celtic-knot-pen.jpg',
    alt: 'Wooden pen with a black Celtic knot inlay on an acrylic stand',
    width: 1600,
    height: 1600,
  },
  {
    title: 'Side Table with Drawer',
    description:
      'A maple hardwood side table with tapered legs and a single drawer whose front shows off a swirling, figured grain.',
    image: 'images/woodworking/side-table.jpg',
    alt: 'Light wood side table with a single drawer and dark round knob',
    width: 1024,
    height: 768,
  },
  {
    title: 'Electric Spinner',
    description:
      'A compact electric spinner for making yarn. A spalted hackberry wood base holds the speed knob and switch, with a wooden flyer and bobbin on top.',
    image: 'images/woodworking/electric-spinner.jpg',
    alt: 'Spalted wood box with a knob and switch supporting a wooden spinning flyer and bobbin',
    width: 1600,
    height: 1200,
  },
  {
    title: 'Drum Carder',
    description:
      'A hand-cranked drum carder for preparing fiber, built from stacked plywood discs, aluminum parts, and a belt drive.',
    image: 'images/woodworking/drum-carder.jpg',
    alt: 'Hand-cranked drum carder with large plywood drums and a green drive belt',
    width: 1600,
    height: 1200,
  },
];
