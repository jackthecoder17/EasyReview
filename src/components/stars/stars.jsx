/* eslint-disable react/prop-types */
// Star.js


const Star = ({ selected = false, onSelect = f => f }) => (
  <div
    className={`cursor-pointer text-4xl ${selected ? 'text-yellow-500' : 'text-gray-300'}`}
    onClick={onSelect}
  >
    ★
  </div>
);

export default Star;
